'use client';

import HTMLFlipBook from 'react-pageflip';
import { useState } from 'react';

export default function WebBook() {
    const [page, setPage] = useState(0);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 overflow-y-hidden">
            <HTMLFlipBook
                width={300}
                height={500}
                size="stretch"
                minWidth={315}
                maxWidth={600}
                minHeight={400}
                maxHeight={800}
                drawShadow
                className="shadow-2xl"
                style={{ background: 'black' }}
            >
                <div className="bg-[#111] text-white p-6 flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl font-bold mb-4">Catatan Penting Untuk Anak Muda</h1>
                    <p className="text-left">Bukan sekadar motivasi, ini suara yang mungkin kamu butuh dengar hari ini.</p>
                </div>

                <div className="bg-[#222] text-white p-6 flex flex-col justify-center items-center text-center">
                    <h2 className="text-xl font-semibold mb-2">Daftar Isi</h2>
                    <ul className="text-left list-disc pl-5">
                        <li>Saat Kamu Ngerasa Paling Sendiri</li>
                        <li>Jangan Tunggu Sempurna Baru Gerak</li>
                        <li>Hidupmu Punya Tujuan</li>
                        <li>Stop Ngebandingin, Mulai Ngelangkah</li>
                        <li>Gak Semua Harus Viral</li>
                        <li>Gagal Itu Wajar, Menyerah Itu Ngeri</li>
                        <li>Lingkungan Bisa Bikin Kamu Naik atau Ancur</li>
                        <li>Dunia Emang Gila, Tapi Kamu Jangan</li>
                        <li>Waktu Terus Jalan, Kamu Masih Nunda?</li>
                        <li>Hidup Gak Sekadar Cari Uang</li>
                    </ul>
                </div>

                <div className="bg-[#111] text-white p-6 flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl font-bold mb-4">Poin 1</h1>
                    <i>"Saat Kamu Ngerasa Paling Sendiri"</i>
                </div>

                <div className="bg-[#111] text-white p-6 flex flex-col justify-center items-center text-center">
                    <h2 className="text-xl font-semibold mb-2 text-left"><span className="text-sm">Hal. 1</span><br />Saat Kamu Ngerasa Paling Sendiri</h2>
                    <p className="mt-3 text-left">Aku ingat malam itu hujan deras. Semua teman sibuk dengan urusannya masing-masing. Grup chat sepi, notifikasi nihil. Rasanya kayak dunia sengaja diem — atau sengaja ninggalin. Aku scroll media sosial cuma buat makin nyakitin diri sendiri. Lihat orang-orang hangout, ngetawain sesuatu, pamer pencapaian. Sedangkan aku? Di kamar, ngerasa jadi manusia paling sepi di bumi.</p>
                </div>

                <div className="bg-[#111] text-white p-6 flex flex-col justify-center items-center text-center">
                    <h2 className="text-xl font-semibold mb-2 text-left"><span className="text-sm">Hal. 2</span><br />Saat Kamu Ngerasa Paling Sendiri</h2>
                    <p className="mt-3 text-left">Ada rasa sedih yang nggak bisa dijelasin. Bahkan nangis pun nggak keluar. Saat itu, aku mikir, “Apa aku doang yang ngerasa gini? Apa salahku sampe ngerasa ditinggalin semua orang?” Rasa sepi ini nyata. Tapi saat aku duduk diam dan dengerin suara hati, satu kalimat muncul: “Kamu gak sendirian. Ini fase, bukan akhir."</p>
                </div>

                <div className="bg-[#111] text-white p-6 flex flex-col justify-center items-center text-center">
                    <h2 className="text-xl font-semibold mb-2 text-left"><span className="text-sm">Hal. 3</span><br />Saat Kamu Ngerasa Paling Sendiri</h2>
                    <p className="mt-3 text-left">Banyak anak muda ngalamin momen ini: merasa sendiri, nggak punya siapa-siapa, dan mulai ragu dengan hidup sendiri. Tapi kenyataannya, rasa kesepian itu bukan tanda bahwa kamu salah atau gagal — itu alarm bahwa kamu butuh koneksi dengan dirimu sendiri dulu.</p>
                </div>

                <div className="bg-[#111] text-white p-6 flex flex-col justify-center items-center text-center">
                    <h2 className="text-xl font-semibold mb-2 text-left"><span className="text-sm">Hal. 4</span><br />Saat Kamu Ngerasa Paling Sendiri</h2>
                    <p className="mt-3 text-left">Kadang Tuhan tarik semua orang bukan buat nyakitin kamu, tapi buat kamu sadar, yang paling kamu butuhin itu bukan orang lain, tapi kamu sendiri.

                        Kesepian bukan musuh. Ia adalah ruang hening di mana kamu bisa lebih kenal dirimu. Karena di tengah sepi, kamu belajar denger suara hati, belajar tenangin diri sendiri, dan akhirnya... belajar berdiri.</p>
                </div>

                <div className="bg-[#111] text-white p-6 flex flex-col justify-center items-center text-center">
                    <h2 className="text-xl font-semibold mb-2 text-left"><span className="text-sm">Hal. 5</span><br />Saat Kamu Ngerasa Paling Sendiri</h2>
                    <p className="mt-3 text-left">Saat kamu ngerasa paling sendiri, lakukan 3 hal ini:</p>
                    <ul className="text-left mt-2 space-y-1">
                        <li>
                            <p className="font-bold">1. Tulis isi pikiranmu</p>
                            <p>Nulis bisa jadi tempat aman buat “numpahin” beban. Kadang kita nggak butuh solusi, cuma butuh denger suara sendiri di atas kertas.</p>
                        </li>
                        <li>
                            <p className="font-bold">2. Kurangi screen time</p>
                            <p>Sosial media bikin kamu bandingin hidupmu yang real dengan hidup orang lain yang palsu. Lepaskan sejenak.</p>
                        </li>
                    </ul>
                </div>

                <div className="bg-[#111] text-white p-6 flex flex-col justify-center items-center text-center">
                    <h2 className="text-xl font-semibold mb-2 text-left"><span className="text-sm">Hal. 6</span><br />Saat Kamu Ngerasa Paling Sendiri</h2>
                    <ul className="text-left mt-4">
                        <li>
                            <p className="font-bold">3. Lakuin sesuatu buat diri sendiri</p>
                            <p>Sosial media bikin kamu bandingin hidupmu yang real dengan hidup orang lain yang palsu. Lepaskan sejenak.</p>
                        </li>
                    </ul>
                </div>

                <div className="bg-[#111] text-white p-6 flex flex-col justify-center items-center text-center">
                    <h2 className="text-xl font-semibold mb-2 text-left"><span className="text-sm">Hal. 7</span><br />Saat Kamu Ngerasa Paling Sendiri</h2>
                    <p className="mt-3 text-left">Kesendirian bukan kutukan. Ia adalah ruang pertumbuhan. Banyak orang sukses di dunia ini, pernah melewati malam sunyi dan dingin sendirian. Tapi mereka memilih tetap berjalan. Dan kamu juga bisa.</p>
                </div>
            </HTMLFlipBook>
        </div>
    );
}
