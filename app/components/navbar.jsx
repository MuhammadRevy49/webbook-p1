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
            <nav className="absolute top-0 left-0 w-full p-4 flex items-center justify-between bg-black backdrop-blur z-20">
                <div className="flex items-center space-x-2">
                    <Menu className="w-5 h-5 text-white" />
                    <span className="text-sm font-semibold text-white">WebBook</span>
                </div>
            </nav>
        </>
    )
}