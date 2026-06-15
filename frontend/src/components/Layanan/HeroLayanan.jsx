import React from 'react'
import { Link } from 'react-router-dom';
import assets from "../../assets/assets-produk.js";

const HeroLayanan = () => {
    const { store } = assets;

    return (
        <>
            {/* 1. SEKSI HERO */}
            <section id='Hero' className="min-h-[calc(100vh-76px)] flex items-center px-6 md:px-16 py-12 md:py-0 relative overflow-hidden text-trey">

                <img
                    src={store?.store2}
                    alt="Store Baso Yen"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                <div className="absolute inset-0 bg-black/60 z-10"></div>

                <div className="max-w-7xl mx-auto w-full relative z-20 flex flex-col justify-center items-center text-center">

                    <div className="space-y-6 max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-black text-trey uppercase tracking-tight leading-none drop-shadow-md">
                            Layanan Kami
                        </h1>

                        <p>
                            Baso Yen merupakan perusahaan mie, baso, & sosis yang didirikan sejak tahun 1980-an. Sejak berdiri, perusahaan Mie, Baso & Sosis Yen mengusung idealisme untuk memberikan kualitas yang terbaik. Pengolahan mie baso & sosis Yen ini pun mudah, sehingga setiap orang dapat memasak mie baso & sosis selezat di resto. Sejak berdiri perusahaan Yen telah dipercaya sebagai pemasok di restoran-restoran, hotel-hotel, cafe, dan foodcourt.
                        </p>

                        {/* Tombol Aksi */}
                        <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#lokasi"
                                className="bg-primary text-trey font-bold text-xs tracking-wider uppercase px-8 py-2 rounded-full hover:scale-105 transition-all text-center"
                            >
                                LOKASI
                            </a>
                            <a
                                href="#delivery"
                                className="border border-white backdrop-blur-sm hover:bg-trey/10 text-trey font-extrabold text-xs tracking-wider uppercase px-8 py-2 rounded-full shadow-lg hover:scale-105 transition-all text-center"
                            >
                                DELIVERY
                            </a>
                            <a
                                href="#market"
                                className="border border-white backdrop-blur-sm hover:bg-trey/10 text-trey font-bold text-xs tracking-wider uppercase px-8 py-2 rounded-full hover:scale-105 transition-all text-center"
                            >
                                MARKETPLACE
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default HeroLayanan