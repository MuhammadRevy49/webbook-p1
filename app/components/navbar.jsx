'use client'

import {
    X,
    Menu,
} from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [Sidebar, setSidebar] = useState(false);

    return (
        <nav className="bg-[#000] text-white p-3 flex flex-row items-center justify-between inset-0 z-33">
            <div>
                <h1>Buku Digi</h1>
            </div>
            <ul className="hidden md:flex-row md:space-x-3 md:flex">
                <li><a href="">Lagu</a></li>
                <li><a href="">Kuis</a></li>
                <li><a href="">Bonus</a></li>
            </ul>
            <Menu onClick={() => setSidebar(true)} className="block md:hidden" />
            {Sidebar && (
                <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-20 z-40" onClick={() => setSidebar(false)}>
                    <div className={`fixed top-0 right-0 w-64 h-full bg-[#0a0a0a] z-43 transition-transform ${Sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex justify-between p-3">
                            <h1>Buku Digi</h1>
                            <X onClick={() => setSidebar(false)} className="top-3 right-3 cursor-pointer transition-all" />
                        </div>
                        <ul className="flex flex-col space-y-3 p-5">
                            <li>
                                <label>Buku Versi PDF</label>
                                <a href="" className="p-1 flex justify-center bg-red-500 rounded hover:bg-red-300 transition-all">Download</a>
                            </li>
                            <li>
                                <label>Tantangan Kamu</label>
                                <a href="" className="p-1 flex justify-center bg-green-500 rounded hover:bg-green-300 transition-all">Download</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    )
}