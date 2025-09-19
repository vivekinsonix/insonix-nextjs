"use client";

import React, { useEffect, useRef, useState } from "react";
import Graph from "graphology";
import Sigma from "sigma";
import { EdgeDisplayData, NodeDisplayData } from "sigma/types";
import data from "../contacts/data.json";
import { Label, Textarea } from "flowbite-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomNodeDisplayData extends NodeDisplayData {
    labelSize?: number;
    labelColor?: string;
    labelBackground?: string;
}

const SigmaGraph: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const datalistRef = useRef<HTMLDataListElement>(null);
    const [selectedNode, setSelectedNode] = useState<any>(null);
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        if (!containerRef.current || !inputRef.current || !datalistRef.current) return;

        const graph = new Graph();

        // Add nodes from JSON
        data.nodes.forEach((node) => {
            if (!graph.hasNode(node.id)) {
                const baseSize = node.size || 10;
                const pulseOffset = Math.random() * Math.PI * 2;

                graph.addNode(node.id, {
                    ...node,
                    baseSize,
                    pulseOffset,
                });
            }
        });

        // Add edges from JSON
        data.edges.forEach((edge) => {
            graph.addEdge(edge.source, edge.target, { ...edge });
        });

        const renderer = new Sigma(graph, containerRef.current);

        // --- Label settings ---
        renderer.setSetting("labelSize", 16);
        renderer.setSetting("labelRenderedSizeThreshold", 0);
        renderer.setSetting("labelDensity", 1);
        renderer.setSetting("labelGridCellSize", 60);

        // Per-node label colors & backgrounds
        renderer.setSetting("labelColor", { mode: "nodes", attribute: "labelColor" });
        renderer.setSetting("labelBackground", "node");
        renderer.setSetting("labelBackgroundColor", { mode: "nodes", attribute: "labelBackground" });
        renderer.setSetting("labelBackgroundAlpha", 1);

        const state = {
            hoveredNode: null as string | null,
            hoveredNeighbors: null as Set<string> | null,
        };

        // Populate datalist for search
        datalistRef.current.innerHTML = graph
            .nodes()
            .map((node) => `<option value="${graph.getNodeAttribute(node, "label")}"></option>`)
            .join("\n");

        // Hover handling
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

        // Node reducer — apply label size + colors
        renderer.setSetting("nodeReducer", (node, data) => {
            const res: Partial<CustomNodeDisplayData> = { ...data };

            res.label = data.label;
            res.labelSize = typeof data.labelSize === "number" ? data.labelSize : 24;
            res.labelColor = "#ffffff";
            res.labelBackground = "transparent";
            res.color = data.color || "#fff";

            if (state.hoveredNeighbors && !state.hoveredNeighbors.has(node) && state.hoveredNode !== node) {
                res.label = "";
                res.color = "#fafa";
            }

            if (state.hoveredNode === node) {
                res.size = (data.baseSize || data.size || 10) + 4;
                res.labelSize = (data.labelSize || 24) + 6;
                res.labelColor = "#000000";
                res.labelBackground = "#ffffff";
            }

            return res;
        });

        // Edge reducer — hide unrelated edges
        renderer.setSetting("edgeReducer", (edge, data) => {
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

        // Search functionality
        const handleSearch = () => {
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
                if (pos) {
                    camera.animate(pos, { duration: 600 });
                }
            }
        };

        inputRef.current?.addEventListener("change", handleSearch);

        // Sigma event listeners
        renderer.on("enterNode", ({ node }) => setHoveredNode(node));
        renderer.on("leaveNode", () => setHoveredNode(undefined));
        renderer.on("clickNode", ({ node }) => {
            const attributes = graph.getNodeAttributes(node);
            setSelectedNode({ id: node, ...attributes });
        });

        // Animation loop for pulsing effect
        let animationFrame: number;
        const animate = () => {
            const t = Date.now() / 1000;

            graph.forEachNode((node) => {
                const baseSize = graph.getNodeAttribute(node, "baseSize") || 8;
                const offset = graph.getNodeAttribute(node, "pulseOffset") || 0;

                const pulse = Math.sin(t * 4 + offset) * 1.5 + baseSize;
                graph.setNodeAttribute(node, "size", pulse);
            });

            renderer.refresh();
            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            renderer.kill();
            inputRef.current?.removeEventListener("change", handleSearch);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div className="graph-container p-4">
            <div className="grid grid-cols-3 gap-4">
                <div></div>
                <div></div>
                <div>
                    <input
                        ref={inputRef}
                        list="suggestions"
                        placeholder="Search Your Project Category..."
                        className="border-0 shadow-lg bg-gradient-to-r from-teal-200 to-blue-200 p-3 mb-2 w-full rounded text-black"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
                        }}
                    />
                </div>
            </div>

            <datalist id="suggestions" ref={datalistRef} />

            <div ref={containerRef} id="sigma-container" style={{ height: "900px", width: "100%" }} />

            {selectedNode && (
                <div className="fixed inset-0 bg-indigo-800/50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-xl max-w-5xl w-full">
                        <h2 className="text-3xl mb-5 text-left text-black">
                            Selected Area: <strong>{selectedNode.label}</strong>
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
