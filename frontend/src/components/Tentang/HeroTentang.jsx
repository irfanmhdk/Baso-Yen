import React from 'react';
import assets from "../../assets/assets-produk.js";

const HeroTentang = () => {
  return (
    <section 
      className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ 
        backgroundImage: `url(${assets.store.store3})`,
        backgroundAttachment: 'fixed' // Memberikan efek paralaks elegan saat di-scroll
      }}
    >
      {/* ================= OVERLAY GRADASI PREMIUM ================= */}
      {/* Menggunakan perpaduan hitam dan merah marun khas Yen untuk atmosfer hangat */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/70 to-primary/40 z-10"></div>

      {/* ================= KONTEN UTAMA HERO ================= */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-6 space-y-6">
        
        {/* Badge Atas */}
        <div className="inline-block animate-fade-in">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-gold uppercase bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white">
            Kenali Lebih Dekat
          </span>
        </div>

        {/* Judul Utama */}
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
          FILOSOFI <span className="text-gold">&</span> MISI <br />
          <span className="bg-gradient-to-r from-white via-gray-200 to-gold bg-clip-text text-transparent">
            Baso Yen Bandung
          </span>
        </h1>

        {/* Garis Aksen Emas */}
        <div className="w-20 h-1 bg-gold mx-auto rounded-full shadow-lg"></div>

        {/* Deskripsi Singkat */}
        <p className="text-gray-300 font-medium text-xs md:text-base max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Baso Yen merupakan perusahaan mie, baso, & sosis yang didirikan sejak tahun 1980-an. Sejak berdiri, perusahaan Mie, Baso & Sosis Yen mengusung idealisme untuk memberikan kualitas yang terbaik. Pengolahan mie baso & sosis Yen ini pun mudah, sehingga setiap orang dapat memasak mie baso & sosis selezat di resto. Sejak berdiri perusahaan Yen telah dipercaya sebagai pemasok di restoran-restoran, hotel-hotel, cafe, dan foodcourt.
        </p>

      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-13 bg-gradient-to-t from-trey to-transparent z-20"></div>
    </section>
  );
};

export default HeroTentang;