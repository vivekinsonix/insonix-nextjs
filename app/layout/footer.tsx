import Link from "next/link";


export default function Footer() {


    return (

        <footer className="border-t  border-gray-900 bg-gray-950">
            <div className="mx-auto max-w-7xl container px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
                <div>
                    <div className="flex items-center gap-2">
                        <Link href="/" className="hover:text-teal-700 flex items-center text-white font-extrabold text-xl cursor-pointer">
                            {/* <img src="/srp-us-white.png" width="150px" /> */}

                            <span className="text-blue-500">INSONIX</span>
                        </Link>
                    </div>
                    <p className="mt-3 text-slate-50">15 Years of Market Leadership </p>
                </div>
                <div>
                    <h4 className="font-semibold text-slate-50">Company</h4>
                    <ul className="mt-2 space-y-1">
                        <li><a href="/about" className="hover:text-blue-400 text-gray-400">About</a></li>
                        <li><a href="/careers" className="hover:text-blue-400 text-gray-400">Careers</a></li>
                        <li><a href="/news" className="hover:text-blue-400 text-gray-400">Newsroom</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-slate-50">Resources</h4>
                    <ul className="mt-2 space-y-1">
                        <li><a href="/blogs" className="hover:text-blue-400 text-gray-400">Blogs</a></li>
                        <li><a href="/news" className="hover:text-blue-400 text-gray-400">Media Library</a></li>
                        <li><a href="/suppliersl" className="hover:text-blue-400 text-gray-400">Suppliers</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold  text-slate-50">Contact</h4>
                    <p className="mt-2 text-gray-400">Plot No. 605, Industrial Area Phase 9,<br />SAS Nagar (Mohali), Punjab 160062</p>
                    <p className="mt-1 text-gray-400">+91 9779178726</p>
                    <p className="mt-1 text-gray-400"><a className="hover:text-teal-700" href="mailto:info@srpuslogistics.com">info@srpuslogistics.com</a></p>
                </div>
            </div>
            <div className="">
                <div className="mx-auto container px-4 py-6 text-xs text-center text-gray-400">© 2025 SRP US Logistics Pvt Ltd. All rights reserved.</div>
            </div>
        </footer>
    );
}
