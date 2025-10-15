"use client";

import React, { useEffect, useRef, useState } from "react";
import Graph from "graphology";
import type { EdgeDisplayData, NodeDisplayData } from "sigma/types";
import data from "./data.json";
import { Label, Textarea } from "flowbite-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// --- Custom node type ---
interface CustomNodeDisplayData extends NodeDisplayData {
    baseSize?: number;
    pulseOffset?: number;
    labelSize?: number;
    labelColor?: string;
    labelBackground?: string;
}

const SigmaGraph: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const datalistRef = useRef<HTMLDataListElement>(null);
    const [selectedNode, setSelectedNode] = useState<Record<string, unknown> | null>(null);
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        if (!containerRef.current || !inputRef.current || !datalistRef.current) return;

        const graph = new Graph();

        // --- Add nodes ---
        data.nodes.forEach((node: Record<string, any>) => {
            if (!graph.hasNode(node.id)) {
                graph.addNode(node.id, {
                    ...node,
                    baseSize: node.size ?? 10,
                    pulseOffset: Math.random() * Math.PI * 2,
                } as CustomNodeDisplayData);
            }
        });

        // --- Add edges ---
        data.edges.forEach((edge: Record<string, any>) => {
            if (!graph.hasEdge(edge.source, edge.target)) {
                graph.addEdge(edge.source, edge.target, { ...edge });
            }
        });

        // --- Renderer (dynamically import Sigma on client only) ---
        let renderer: any = null;
        const state = {
            hoveredNode: null as string | null,
            hoveredNeighbors: null as Set<string> | null,
        };

        let animationFrame: number | null = null;
        let outerInputEl: HTMLInputElement | null = null;
        let outerHandleSearch: (() => void) | null = null;

        (async () => {
            // Dynamically import Sigma to avoid referencing WebGL on the server
            const SigmaModule = await import("sigma");
            // default export contains the constructor
            const SigmaCtor = (SigmaModule as any).default ?? (SigmaModule as any);

            const settings = {
                labelSize: 16,
                labelRenderedSizeThreshold: 0,
                labelGridCellSize: 60,
                labelDensity: 1,
                labelSizeMode: "fixed",
                labelColor: { mode: "nodes", attribute: "color" }, // use node color
                labelBackground: "node",
                labelBackgroundColor: { mode: "nodes", attribute: "color" },
                labelBackgroundAlpha: 0.3,
            } as unknown as any;

            renderer = new SigmaCtor(graph, containerRef.current, settings);

            // --- Populate datalist for search ---
            datalistRef.current!.innerHTML = graph
                .nodes()
                .map((node) => `<option value="${graph.getNodeAttribute(node, "label")}"></option>`)
                .join("\n");

            // --- Hover handling ---
            const setHoveredNode = (node?: string) => {
                if (node) {
                    state.hoveredNode = node;
                    state.hoveredNeighbors = new Set(graph.neighbors(node));
                } else {
                    state.hoveredNode = null;
                    state.hoveredNeighbors = null;
                }
                renderer.refresh({ skipIndexation: true });
            };

            // --- Node reducer ---
            renderer.setSetting("nodeReducer", (node: string, data: any) => {
                const res: CustomNodeDisplayData = { ...data };
                res.label = data.label;
                res.labelSize = data.labelSize ?? 24;
                res.labelColor = "#ffffff";
                res.labelBackground = "transparent";
                res.color = data.color || "#fff";

                if (
                    state.hoveredNeighbors &&
                    !state.hoveredNeighbors.has(node) &&
                    state.hoveredNode !== node
                ) {
                    res.label = "";
                    res.color = "#fafa";
                }

                if (state.hoveredNode === node) {
                    res.size = (data.baseSize ?? data.size ?? 10) + 4;
                    res.labelSize = (data.labelSize ?? 24) + 6;
                    res.labelColor = "#000000";
                    res.labelBackground = "#ffffff";
                }

                return res;
            });

            // --- Edge reducer ---
            renderer.setSetting("edgeReducer", (edge: string, data: any) => {
                const res: Partial<EdgeDisplayData> = { ...data };
                if (
                    state.hoveredNode &&
                    !graph.extremities(edge).includes(state.hoveredNode) &&
                    !graph.areNeighbors(graph.source(edge), state.hoveredNode)
                ) {
                    res.hidden = true;
                }
                return res;
            });

            // --- Search ---
            const handleSearchLocal = () => {
                const value = inputRef.current?.value?.trim().toLowerCase();
                if (!value) return;

                const foundNode = graph
                    .nodes()
                    .find((n) => graph.getNodeAttribute(n, "label")?.toLowerCase() === value);

                if (foundNode) {
                    const attributes = graph.getNodeAttributes(foundNode);
                    setSelectedNode({ id: foundNode, ...attributes });

                    const camera = renderer.getCamera();
                    const pos = renderer.getNodeDisplayData(foundNode);
                    if (pos) camera.animate(pos, { duration: 600 });
                }
            };

            // attach search listener (capture element reference)
            const inputEl = inputRef.current;
            inputEl?.addEventListener("change", handleSearchLocal);
            // expose to outer scope for cleanup
            outerInputEl = inputEl;
            outerHandleSearch = handleSearchLocal;

            // --- Sigma events ---
            renderer.on("enterNode", ({ node }: { node: string }) => setHoveredNode(node));
            renderer.on("leaveNode", () => setHoveredNode(undefined));
            renderer.on("clickNode", ({ node }: { node: string }) => {
                const attributes = graph.getNodeAttributes(node);
                setSelectedNode({ id: node, ...attributes });
            });

            // --- Pulse animation ---
            const animate = () => {
                const t = Date.now() / 1000;
                graph.forEachNode((node) => {
                    const baseSize = graph.getNodeAttribute(node, "baseSize") ?? 8;
                    const offset = graph.getNodeAttribute(node, "pulseOffset") ?? 0;
                    const pulse = Math.sin(t * 4 + offset) * 1.5 + baseSize;
                    graph.setNodeAttribute(node, "size", pulse);
                });
                renderer.refresh();
                animationFrame = requestAnimationFrame(animate);
            };
            animate();

            // cleanup when effect is torn down - nothing to do here; outer cleanup will run
        })();

        // --- Cleanup ---
        return () => {
            try {
                if (renderer && typeof renderer.kill === "function") renderer.kill();
            } catch {
                // ignore
            }
            if (outerInputEl && outerHandleSearch) {
                outerInputEl.removeEventListener("change", outerHandleSearch);
            }
            if (animationFrame != null) cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div className="graph-container p-4">
            <div className="grid grid-cols-3 gap-4 mb-2">
                <div></div>
                <div>
                    <input
                        ref={inputRef}
                        list="suggestions"
                        placeholder="Search Your Project Category..."
                        className="border-0 shadow-lg bg-gradient-to-r from-teal-200 to-blue-200 p-3 w-full rounded text-black"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
                        }}
                    />
                </div>
                <div></div>
            </div>

            <datalist id="suggestions" ref={datalistRef} />

            <div ref={containerRef} id="sigma-container" style={{ height: "900px", width: "100%" }} />

            {selectedNode && (
                <div className="fixed inset-0 bg-indigo-800/50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-xl max-w-5xl w-full">
                        <h2 className="text-3xl mb-5 text-left text-black">
                            Selected Area: <strong>{String(selectedNode.label)}</strong>
                        </h2>

                        <div className="w-full mb-5">
                            <div className="mb-2 block text-left">
                                <Label htmlFor="comment">Requirements:</Label>
                            </div>
                            <Textarea
                                className="bg-white"
                                id="query"
                                placeholder="Write your Requirements..."
                                required
                                rows={4}
                            />
                        </div>

                        <div className="flex flex-col gap-2 mb-4 text-left">
                            <label className="text-sm font-medium text-gray-700">Select Date & Time</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date as Date)}
                                showTimeSelect
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className="w-full p-2 border border-gray-300 text-black rounded-md"
                            />
                        </div>

                        <div className="flex justify-end gap-3">
                            <button className="inline-block bg-blue-500 text-black font-bold py-3 px-8 rounded-full uppercase tracking-wide hover:scale-105 transition">
                                Submit
                            </button>
                            <button
                                onClick={() => setSelectedNode(null)}
                                className="bg-transparent border border-blue-500 text-black px-4 font-bold py-3 rounded-full uppercase tracking-wide hover:scale-105 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SigmaGraph;