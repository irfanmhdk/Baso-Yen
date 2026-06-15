import React from 'react'
import { Link } from 'react-router-dom';
import assets from "../../assets/assets-produk.js";

const Hero = () => {
  const { store } = assets;

  return (
    <>
      {/* SEKSI HERO */}
      <section id='Hero' className="min-h-[calc(100vh-76px)] flex items-center px-6 md:px-16 py-12 md:py-0 relative overflow-hidden text-trey">

        <img
          src={store?.store1}
          alt="Store Baso Yen"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="max-w-7xl mx-auto w-full relative z-20 flex flex-col justify-center items-center text-center">

          <div className="space-y-6 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-sulfur uppercase bg-black/50 px-4 py-1.5 rounded-full inline-block border border-white/10">
              Selamat Datang di Baso Yen
            </span>

            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-white drop-shadow-md">
              Produsen Bakso, Sosis <br className="hidden md:block" /> & Mie Segar Terbaik
            </h1>

            <p className="text-sm md:text-base text-gray-200 font-medium leading-relaxed mx-auto md:mx-0 drop-shadow-sm">
              Menyediakan pilihan bakso sapi, mi basah, sosis premium, dan kulit <br /> pangsit berkualitas tinggi untuk kebutuhan keluarga maupun bisnis <br /> kuliner Anda.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/produk" className="bg-primary hover:bg-red-800 text-trey font-extrabold text-xs tracking-wider uppercase px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all text-center">
                Lihat Produk
              </Link>
              <Link to="/kontak" className="border border-white/60 text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all text-center">
                Hubungi Kami
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero