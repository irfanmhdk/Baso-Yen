import React from 'react'
import assets from "../../assets/assets-produk.js";

const Tentang = () => {
    const { store } = assets;

    return (
        <>
            {/* SEKSI TENTANG */}
            < section id="tentang" className="bg-trey flex items-center px-6 md:px-16 py-16 md:py-24 relative overflow-hidden border-t border-gray-100" >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full relative z-10">

                    {/* KOLOM KIRI: TEKS DESKRIPSI */}
                    <div className="space-y-6 text-center md:text-left order-2 md:order-1">
                        <span className="text-xs font-bold tracking-widest text-primary uppercase bg-red-100 px-4 py-1.5 rounded-full inline-block">
                            Tentang Kami
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-none">
                            Baso Yen
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
                            Baso Yen, produsen mie basah, Bakso dan sosis sapi di Bandung. Kami berkomitmen untuk memberikan kualitas yang terbaik. Pengolahan mie baso & sosis Yen ini pun mudah, sehingga setiap orang dapat memasak mie baso & sosis selezat di resto. Sejak berdiri, perusahaan Yen telah dipercaya sebagai pemasok di restoran-restoran, hotel-hotel, cafe, dan foodcourt.
                        </p>

                        <div className="pt-2">
                            <a
                                href="https://maps.app.goo.gl/aC86m9hFHb2xyVHs9"
                                className="inline-block bg-primary text-white font-extrabold text-xs tracking-wider uppercase px-8 py-4 rounded-full shadow-md hover:bg-red-800 hover:scale-105 transition-all text-center"
                            >
                                Kunjungi Rumah Produksi
                            </a>
                        </div>
                    </div>

                    {/* KOLOM KANAN: FOTO / VISUAL */}
                    <div className="flex justify-center items-center relative h-64 md:h-[450px] order-1 md:order-2">
                        {/* Lingkaran di Belakang Foto */}
                        <div className="absolute w-60 h-60 md:w-96 md:h-96 bg-primary rounded-full border border-primary/10 animate-spin-slow"></div>
                        <div className="absolute w-48 h-48 md:w-80 md:h-80 bg-white/80 rounded-full blur-2xl"></div>

                        <img
                            src={store?.store1}
                            alt="Rumah Produksi Baso Yen"
                            className="h-full w-auto object-contain rounded-full z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] transform hover:scale-105 transition-all duration-500 select-none"
                        />
                    </div>

                </div>
            </section >
        </>
    )
}

export default Tentang