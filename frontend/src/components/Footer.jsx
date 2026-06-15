import React from 'react';
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaShoppingBag } from 'react-icons/fa';
import assets from '../assets/assets-produk';

const Footer = () => {
  return (
    /* PERBAIKAN: Background diubah menjadi gelap, text diubah ke abu-abu terang */
    <footer className="bg-[#1A1A1A] text-gray-400 pt-16 pb-8 border-t border-gray-800 font-sans relative z-10">
      <div className="mx-auto max-w-6xl px-4">
        
        {/* GRIDS UTAMA FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-12">
          
          {/* ================= SEKSI 1: OFFLINE STORE ================= */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase border-b border-gray-800 pb-2">
              Offline Store
            </h3>
            <div className="space-y-5 text-xs leading-relaxed text-gray-400">
              {/* Toko 1 */}
              <div className="space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-red-500 text-sm shrink-0" /> Yen Factory
                </p>
                <p>Komp. Puri BKR Kav 61 Regol, Bandung</p>
                <p className="text-[11px] bg-white/5 text-white inline-block px-2 py-0.5 rounded font-medium border border-white">
                  Jam Buka: 07.00 – 17.00
                </p>
                <a 
                  href="https://wa.me/628972078800" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold pt-1 transition-colors"
                >
                  <FaWhatsapp className="text-base" /> Yen Factory BKR
                </a>
              </div>

              {/* Toko 2 */}
              <div className="space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-red-500 text-sm shrink-0" /> Meatball Factory Yen
                </p>
                <p>Jl. Pasirkaliki 106 Cicendo, Bandung</p>
                <p className="text-[11px] bg-white/5 text-white inline-block px-2 py-0.5 rounded font-medium border border-white">
                  Jam Buka: 08.00 – 20.00
                </p>
                <a 
                  href="https://wa.me/6285100805080" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold pt-1 transition-colors"
                >
                  <FaWhatsapp className="text-base" /> Meatball Factory Paskal
                </a>
              </div>
            </div>
          </div>

          {/* ================= SEKSI 2: KONTAK KAMI ================= */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase border-b border-gray-800 pb-2">
              Kontak Kami
            </h3>
            <ul className="space-y-3 text-xs text-gray-400 font-medium">
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-gray-600 shrink-0" />
                <span>Yen Factory BKR: <span className="text-white font-semibold">08972078800</span></span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-gray-600 shrink-0" />
                <span>Meatball Factory Paskal: <span className="text-white font-semibold">085100805080</span></span>
              </li>
            </ul>
          </div>

          {/* ================= SEKSI 3: ONLINE STORE ================= */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase border-b border-gray-800 pb-2">
              Online Store
            </h3>
            <div className="flex flex-col gap-3 text-black">
              <a 
                href="https://shopee.co.id/miebasososisyen?smtt=9&uls_trackid=9f0ab64e3c70&utm_campaign=s149466168_ss_id_ig00_lpbasoyen&utm_content=lpbasoyen&utm_medium=seller&utm_source=instagram" 
                className="flex items-center hover:text-trey gap-3 p-2.5 bg-trey border border-gray-800 rounded-xl shadow-sm hover:bg-[#2d2d2d] transition-all duration-200 max-w-[200px]"
              >
                <img 
                  src={assets.photo.sfood} 
                  alt="Shopee" 
                  className="h-6 w-auto object-contain brightness-95" 
                />
                <span className="text-xs font-bold">Shopee</span>
              </a>

              <a 
                href="https://www.tokopedia.com/baso-yen" 
                className="flex items-center hover:text-trey gap-3 p-2.5 bg-trey border border-gray-800 rounded-xl shadow-sm hover:bg-[#2d2d2d] transition-all duration-200 max-w-[200px]"
              >
                <img 
                  src={assets.photo.gfood} 
                  alt="Tokopedia" 
                  className="h-6 w-auto object-contain brightness-95" 
                />
                <span className="text-xs font-bold">Tokopedia</span>
              </a>
            </div>
          </div>

          {/* ================= SEKSI 4: MEDIA SOSIAL ================= */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase border-b border-gray-800 pb-2">
              Media Sosial
            </h3>
            <p className="text-xs text-gray-500">
              Ikuti keseruan dan promo terbaru kami di media sosial resmi Baso Yen.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href="https://www.youtube.com/channel/UCQLcnQA2X6I8kZGCGzVN5Fg"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#242424] border border-gray-800 text-red-500 hover:bg-red-500 hover:text-white hover:scale-110 transition-all shadow-sm">
                <FaYoutube className="text-lg" />
              </a>
              <a href="https://www.instagram.com/basoyen/"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#242424] border border-gray-800 text-pink-500 hover:bg-pink-500 hover:text-white hover:scale-110 transition-all shadow-sm">
                <FaInstagram className="text-lg" />
              </a>
              <a href="https://www.tiktok.com/@miebasoyen"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#242424] border border-gray-800 text-gray-300 hover:bg-white hover:text-black hover:scale-110 transition-all shadow-sm">
                <FaTiktok className="text-md" />
              </a>
              <a href="https://www.facebook.com/basososisyen/"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#242424] border border-gray-800 text-blue-500 hover:bg-blue-500 hover:text-white hover:scale-110 transition-all shadow-sm">
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </div>

        </div>

        {/* ================= COPYRIGHT BANNER ================= */}
        <div className="pt-8 mt-8 border-t border-gray-800/80 text-center">
          <p className="text-xs text-gray-500 font-medium tracking-wide">
            © 2026 PBL by <span className="font-semibold text-gray-400 font-serif">𝖒𝖆𝖍𝖆𝖗</span>. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;