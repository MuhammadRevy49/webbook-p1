'use client';

import HTMLFlipBook from 'react-pageflip';
import { useRef, useState, useEffect } from 'react';
import { Maximize2, Minimize2, Volume2, VolumeX, Menu } from 'lucide-react';

export default function WebBook() {
    const bookRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMusicOn, setIsMusicOn] = useState(false);
    // Musik
    const audioRef = useRef(null);

    const toggleFullscreen = () => {
        const elem = document.documentElement;
        if (!document.fullscreenElement) {
            elem.requestFullscreen().then(() => setIsFullscreen(true));
        } else {
            document.exitFullscreen().then(() => setIsFullscreen(false));
        }
    };

    const toggleMusic = () => {
        setIsMusicOn(prev => {
            const newState = !prev;
            if (newState) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
            return newState;
        });
    };


    useEffect(() => {
        const onExit = () => setIsFullscreen(false);
        document.addEventListener('fullscreenchange', onExit);
        return () => document.removeEventListener('fullscreenchange', onExit);
    }, []);

    return (
        <div className="min-h-screen bg-[#111] text-white overflow-hidden relative">

            {/* Buku Flip */}
            <div className="flex items-center justify-center h-screen md:pt-2">
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
                        src="cover/buku/1.png"
                        alt="Cover Depan"
                        className="w-full h-full object-contain"
                    />
                    <img
                        src="cover/buku/2-upt.png"
                        alt="Cover Depan"
                        className="w-full h-full object-contain"
                    />
                    <img
                        src="cover/buku/3.png"
                        alt="Cover Depan"
                        className="w-full h-full object-contain"
                    />
                    <img
                        src="cover/buku/4.png"
                        alt="Cover Depan"
                        className="w-full h-full object-contain"
                    />
                    <img
                        src="cover/buku/5.png"
                        alt="Cover Depan"
                        className="w-full h-full object-contain"
                    />
                    <img
                        src="cover/buku/6.png"
                        alt="Cover Depan"
                        className="w-full h-full object-contain"
                    />
                    <img
                        src="cover/buku/7.png"
                        alt="Cover Depan"
                        className="w-full h-full object-contain"
                    />
                    <img
                        src="cover/buku/8.png"
                        alt="Cover Depan"
                        className="w-full h-full object-contain"
                    />
                    <img
                        src="cover/buku/9.png"
                        alt="Cover Depan"
                        className="w-full h-full object-contain"
                    />
                    <img
                        src="cover/buku/10.png"
                        alt="Cover Depan"
                        className="w-full h-full object-contain"
                    />
                    <img
                        src="cover/buku/11.png"
                        alt="Cover Depan"
                        className="w-full h-full object-contain"
                    />
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
            <audio ref={audioRef} loop>
                <source src="/musik/monolog.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

        </div>
    );
}
