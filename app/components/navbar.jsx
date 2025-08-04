'use client'

import {
    X,
    Menu,
} from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [Sidebar, setSidebar] = useState(false);

    return (
        <>
            <nav className="top-0 left-0 w-full p-4 flex items-center justify-between bg-[#111] backdrop-blur z-20">
                <div className="flex items-center space-x-2">
                    <button className="p-1 text-white rounded hover:bg-[#333] hover:cursor-pointer transition-all"><Menu className="w-5 h-5" /></button>
                    <span className="text-sm font-semibold text-white">
                        Jejak Kekuatan
                    </span>
                </div>
                <div>
                    <a
                        href="/file/ebook-overthinking.pdf"
                        download
                        className="bg-[#555] text-center text-white font-semibold px-3 py-2 rounded shadow hover:bg-gray-200 hover:text-black transition-all duration-200"
                    >
                        Download File PDF
                    </a>
                </div>
            </nav>
        </>
    )
}