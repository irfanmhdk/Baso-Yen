import React from 'react';

const VisiMisi = () => {
  return (
    <section className="bg-trey py-20 px-6 md:px-16 text-black font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Layout Grid Utama: Membagi Filosofi & Misi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= KOLOM KIRI: FILOSOFI (Proporsi Lebar: 7/12) ================= */}
          <div className="lg:col-span-7 space-y-6 bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-primary"></div>
            
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-gold uppercase">
                Sejarah & Komitmen
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight">
                Filosofi Perusahaan
              </h2>
            </div>
            
            <div className="text-gray-600 text-xs md:text-sm leading-relaxed space-y-4 font-medium">
              <p>
                Perusahaan Mie & Baso Yen adalah sebuah perusahaan mie, baso, & sosis yang didirikan sejak tahun 1988. 
                Sejak berdiri, perusahaan Mie, Baso & Sosis Yen mengusung idealisme untuk memberikan kualitas yang terbaik. 
                Perusahaan Mie, Baso, & Sosis Yen yang berlokasi di Jln. BKR Komp. Puri. Kav 61 ini kini telah berkembang 
                menjadi tempat produksi yang higienis dan modern berpadu dengan counter penjualan yang nyaman, hal ini 
                sangatlah sesuai dengan moto perusahaan mie baso & sosis Yen yaitu <span className="text-primary font-bold italic">“Paduan Kualitas dan Layanan Sempurna“</span>.
              </p>
              <p>
                Keunggulan dari produk mie baso & sosis Yen ini tidak lain adalah karena produk Yen terbuat dari bahan-bahan 
                pilihan yang berkualitas. Pengolahan mie baso & sosis Yen ini pun mudah, sehingga setiap orang dapat memasak 
                mie baso & sosis selezat di resto. 
              </p>
              <p>
                Sejak berdiri perusahaan Yen telah dipercaya sebagai pemasok di restoran-restoran, hotel-hotel, cafe, dan foodcourt. 
                Dengan terus berkreasi dan tetap mempertahankan idealisme awal dari perusahaan mie baso & sosis Yen yaitu memberikan 
                dan menghasilkan kualitas produk yang prima, kami yakin produk-produk yang dihasilkan tetap terpercaya di mata masyarakat.
              </p>
            </div>
          </div>

          {/* ================= KOLOM KANAN: MISI (Proporsi Lebar: 5/12) ================= */}
          <div className="lg:col-span-5 space-y-6 bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gold"></div>

            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-choco uppercase">
                Tujuan Kami
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight">
                Misi Kami
              </h2>
            </div>

            <div className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium space-y-6">
              <p>
                Menyediakan pelayanan yang terbaik bagi konsumen-konsumen kami. Inti dari layanan kami adalah mengerti 
                apa yang diinginkan konsumen, kebutuhan mereka dan apa yang didapat konsumen dari kami.
              </p>
              
              {/* Highlight Point Pedoman Perusahaan */}
              <div className="bg-red-50/50 border border-red-100 p-4 rounded-xl space-y-2">
                <span className="text-[10px] font-bold text-choco uppercase tracking-wider block">
                  Pedoman Utama
                </span>
                <p className="text-sm md:text-base font-extrabold text-primary leading-snug">
                  "Kualitas dan kepuasan konsumen adalah pedoman bagi kami."
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisiMisi;