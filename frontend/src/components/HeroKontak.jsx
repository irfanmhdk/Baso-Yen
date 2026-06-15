import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaTruck, FaMapMarkerAlt, FaBriefcase, FaShoppingBag, FaClock } from 'react-icons/fa';

const HeroKontak = () => {
  return (
    <section className='bg-trey py-5 px-6 md:px-16 text-black relative font-sans'>

      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-choco uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100">
          Kontak
        </span>
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-primary">
          Hubungi Kami
        </h1>
        <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
        <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed">
          Jangan ragu untuk berbicara dengan perwakilan online kami kapan saja Anda menggunakan sistem Obrolan Langsung di situs web
          atau salah satu program pengiriman messaging instan ke surel <br/>
          <span className="text-black font-bold hover:underline ml-1">
            marketing@basoyen.com</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-10">

        {/* ================= GRID KIRI ================= */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-6 flex flex-col justify-between">

          {/* Marketing Horeka */}
          <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
            <div className="p-3 bg-red-50 text-primary rounded-xl shrink-0 border border-red-100">
              <FaBriefcase className="text-lg text-gold" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm tracking-tight text-black uppercase">Marketing Horeka</h3>
              <a
                href="https://wa.me/628112335080"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-green-600 font-semibold transition-colors"
              >
                <FaWhatsapp className="text-green-500" /> 0811-2335-080
              </a>
            </div>
          </div>

          {/* Order Online */}
          <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
            <div className="p-3 bg-red-50 text-primary rounded-xl shrink-0 border border-red-100">
              <FaShoppingBag className="text-lg text-gold" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm tracking-tight text-black uppercase">Order Online</h3>
              <a
                href="https://wa.me/6289678391030"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-green-600 font-semibold transition-colors"
              >
                <FaWhatsapp className="text-green-500" /> 0896-7839-1030
              </a>
            </div>
          </div>

          {/* MOKO (Mobil Toko) */}
          <div className="flex items-start gap-4 pb-2">
            <div className="p-3 bg-red-50 text-primary rounded-xl shrink-0 border border-red-100">
              <FaTruck className="text-lg text-gold" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm tracking-tight text-black uppercase">MOKO (Mobil Toko)</h3>
              <p className="text-sm text-choco font-semibold bg-red-50/60 inline-block px-2.5 py-0.5 rounded-md border border-red-100/40">
                Hanya Area Bandung
              </p>
            </div>
          </div>

        </div>

        {/* ================= GRID KANAN ================= */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between gap-6">

          {/* Sub-Seksi Jam Operasional */}
          <div className="space-y-3">
            <h2 className='text-sm font-bold text-choco uppercase tracking-wider border-b-2 border-gold/30 pb-1.5 w-fit flex items-center gap-2'>
              <FaClock className="text-primary" /> Jam Operasional
            </h2>
            <div className="space-y-2 pt-1">
              <p className='text-xs text-gray-600 border-b border-gray-100 pb-2 flex justify-between items-center'>
                <span>Yen Factory BKR: <span className="text-black font-bold bg-gray-50 px-2 py-0.5 rounded">07.00 – 17.00</span></span>
              </p>
              <p className='text-xs text-gray-600 pb-1 flex justify-between items-center'>
                <span>Meatball Factory Yen: <span className="text-black font-bold bg-gray-50 px-2 py-0.5 rounded">08.00 – 20.00</span></span>
              </p>
            </div>
          </div>

          {/* Lokasi */}
          <div className="space-y-4 pt-2">
            <h2 className='text-sm font-bold text-choco uppercase tracking-wider border-b-2 border-gold/30 pb-1.5 w-fit flex items-center gap-2'>
              <FaMapMarkerAlt className="text-primary" /> Lokasi Store
            </h2>

            <div className="space-y-4">
              {/* Lokasi 1 */}
              <div className='flex items-start gap-3 border-b border-gray-100 pb-3'>
                <div className="p-2 bg-red-50 text-primary rounded-xl shrink-0 border border-red-100">
                  <FaMapMarkerAlt className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs tracking-tight text-black">Baso Yen BKR</h4>
                  <p className="text-xs text-gray-500 font-medium">Komp. Puri BKR Kav 61 Regol, Bandung</p>
                </div>
              </div>

              {/* Lokasi 2 */}
              <div className='flex items-start gap-3'>
                <div className="p-2 bg-red-50 text-primary rounded-xl shrink-0 border border-red-100">
                  <FaMapMarkerAlt className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs tracking-tight text-black">Baso Yen Meatball Factory</h4>
                  <p className="text-xs text-gray-500 font-medium">Jl. Pasirkaliki 106 Cicendo, Bandung</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroKontak;