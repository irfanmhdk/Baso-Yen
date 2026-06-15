import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // Menggunakan Link dari react-router-dom
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  const location = useLocation();
  
  // Deteksi apakah user sedang berada di halaman admin
  const isAdminPage = location.pathname.startsWith('/admin');

  // Jika di halaman admin, tampilkan footer super minimalis agar tidak merusak layout dashboard
  if (isAdminPage) {
    return (
      <footer className="bg-white border-t border-gray-200 py-4 px-8 flex flex-col sm:flex-row items-center justify-between gap-2 w-full mt-auto">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          © 2026 PBL by mahar
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
            Admin Panel Mode
          </span>
        </div>
      </footer>
    );
  }

  // Tampilan Footer Lengkap untuk Halaman Utama Konsumen
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-600 font-sans mt-auto w-full">
      {/* Container Utama */}
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        
        {/* Kolom 1: Tentang / Brand */}
        <div className="space-y-3">
          <h3 className="text-sm font-black uppercase tracking-wider text-gray-800">
            Baso Yen
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed max-w-sm font-medium">
            Menyajikan kelezatan baso premium dengan resep legendaris dan bahan berkualitas tinggi demi kepuasan rasa kuliner Anda.
          </p>
        </div>

        {/* Kolom 2: Tautan Pintas */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">
            Navigasi
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            {/* PENTING: Mengubah tag 'a' menjadi 'Link' bawaan react-router-dom agar tidak hard reload */}
            <Link to="/" className="hover:text-red-600 transition-colors duration-200">Beranda</Link>
            <Link to="/produk" className="hover:text-red-600 transition-colors duration-200">Produk</Link>
            <Link to="/resep" className="hover:text-red-600 transition-colors duration-200">Resep</Link>
            <Link to="/layanan" className="hover:text-red-600 transition-colors duration-200">Layanan</Link>
            <Link to="/tentang" className="hover:text-red-600 transition-colors duration-200">Tentang Kami</Link>
            <Link to="/kontak" className="hover:text-red-600 transition-colors duration-200">Kontak</Link>
          </div>
        </div>

        {/* Kolom 3: Kontak Info */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">
            Hubungi Kami
          </h3>
          <ul className="space-y-2.5 text-xs font-medium text-gray-500">
            <li className="flex items-center gap-2">
              <HiOutlineLocationMarker size={16} className="text-red-500 flex-shrink-0" />
              <span>Bandung, Jawa Barat, Indonesia</span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlinePhone size={16} className="text-green-500 flex-shrink-0" />
              <span>+62 812-3456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineMail size={16} className="text-blue-500 flex-shrink-0" />
              <span>info@basoyen.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Garis Pembatas Bawah */}
      <div className="border-t border-gray-50 bg-gray-50/50 py-4 text-center">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          © 2026 PBL by mahar
        </p>
      </div>
    </footer>
  );
};

export default Footer;