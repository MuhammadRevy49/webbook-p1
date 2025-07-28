'use client';

import HTMLFlipBook from 'react-pageflip';
import { useRef, useState, useEffect } from 'react';
import { Maximize2, Minimize2, Volume2, VolumeX, Menu } from 'lucide-react';

export default function WebBook() {
    const bookRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMusicOn, setIsMusicOn] = useState(false);

    const toggleFullscreen = () => {
        const elem = document.documentElement;
        if (!document.fullscreenElement) {
            elem.requestFullscreen().then(() => setIsFullscreen(true));
        } else {
            document.exitFullscreen().then(() => setIsFullscreen(false));
        }
    };

    const toggleMusic = () => {
        setIsMusicOn(!isMusicOn);
        // Tambahkan audio play/pause logika di sini nanti
    };

    useEffect(() => {
        const onExit = () => setIsFullscreen(false);
        document.addEventListener('fullscreenchange', onExit);
        return () => document.removeEventListener('fullscreenchange', onExit);
    }, []);

    return (
        <div className="min-h-screen bg-[#111] text-white overflow-hidden relative">

            {/* Buku Flip */}
            <div className="flex items-center justify-center h-screen md:pt-6">
                <HTMLFlipBook
                    ref={bookRef}
                    width={400}
                    height={600}
                    size="stretch"
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={420}
                    maxHeight={1536}
                    showCover={true}
                    mobileScrollSupport={true}
                    className="shadow-2xl"
                >
                    <img
                        src="cover/cover.png"
                        alt="Cover Depan"
                        className="w-full h-full object-contain"
                    />
                    <div className="bg-[#000] text-white p-4">📄 Halaman 1</div>
                    <div className="bg-[#333] text-white p-4">📄 Halaman 2</div>
                    <div className="bg-[#000] text-white p-4">📄 Halaman 3</div>
                    <div className="bg-[#333] text-white p-4">📄 Halaman 4</div>
                    <div className="bg-[#000] text-white p-4">📖 Cover Belakang</div>
                </HTMLFlipBook>
            </div>

            {/* Info Geser */}
            <div className="absolute bottom-4 left-4 max-w-full w-fit bg-white/10 text-xs text-white px-4 py-2 rounded-full backdrop-blur z-20">
                Klik kanan / kiri untuk membuka halaman
            </div>

            {/* Tombol Musik dan Fullscreen */}
            <div className="absolute bottom-4 right-4 flex space-x-3 z-20 w-fit">
                {/* Tombol Musik */}
                <button
                    onClick={toggleMusic}
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20"
                    title="Toggle Musik"
                >
                    {isMusicOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                </button>

                {/* Tombol Fullscreen */}
                <button
                    onClick={toggleFullscreen}
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20"
                    title="Toggle Fullscreen"
                >
                    {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                </button>
            </div>

        </div>
    );
}
