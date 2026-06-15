import React from 'react';
import { FaCheckCircle, FaAward, FaShieldAlt, FaFileContract } from 'react-icons/fa';
import assets from '../assets/assets-produk';

const Sertifikat = () => {
  const dataSertifikat = [
    {
      id: 1,
      nama: 'Sertifikat Halal MUI',
      noRegistrasi: 'ID32110001333131122',
      deskripsi: 'Diterbitkan oleh Majelis Ulama Indonesia (MUI) Jawa Barat di Bandung.',
      img: assets.photo.mui,
      icon: <FaAward className="text-gold text-lg" />,
    },
    {
      id: 2,
      nama: 'Sertifikat HACCP',
      noRegistrasi: 'HACCP-02012',
      deskripsi: 'Hazard Analysis and Critical Control Points. Jaminan keamanan pangan standar internasional.',
      img: assets.photo.haccp,
      icon: <FaAward className="text-gold text-lg" />,
    },
    {
      id: 3,
      nama: 'Izin P-IRT',
      noRegistrasi: '2013 273011620',
      deskripsi: 'Sertifikasi Produksi Pangan Industri Rumah Tangga resmi terdaftar.',
      img: assets.photo.pirt,
      icon: <FaAward className="text-gold text-lg" />,
    },
    {
      id: 4,
      nama: 'Penyuluhan Keamanan Pangan',
      noRegistrasi: '442/3121-Dinkes',
      deskripsi: 'Dinyatakan lulus dan mematuhi standar keamanan pangan oleh Dinas Kesehatan di Bandung.',
      img: assets.photo.bpom,
      icon: <FaAward className="text-gold text-lg" />,
    },
  ];

  return (
    <section id="sertifikat" className="bg-trey py-10 px-4 md:px-16 text-black relative font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* ================= HEADER SEKSI ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-choco uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Jaminan Mutu & Kualitas
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary uppercase">
            Sertifikasi Kami
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
            Komitmen kami untuk selalu menyajikan produk yang tidak hanya lezat, tetapi juga higienis, 
            aman dikonsumsi, serta 100% memenuhi standar kelayakan regulasi nasional.
          </p>
        </div>

        {/* ================= GRID KARTU SERTIFIKAT ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {dataSertifikat.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Dekorasi Garis Atas Kartu */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-gold opacity-80"></div>

              {/* Bagian Atas: Gambar/Logo Asset */}
              <div className="space-y-4">
                <div className="h-24 w-full flex items-center justify-center bg-gray-50/60 rounded-xl p-3 border border-gray-100/50 group-hover:bg-white transition-colors">
                  <img 
                    src={item.img} 
                    alt={item.nama} 
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Judul & Icon Penanda */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <h3 className="font-extrabold text-sm text-black tracking-tight group-hover:text-primary transition-colors">
                      {item.nama}
                    </h3>
                  </div>
                  
                  {/* Nomor Registrasi / No Sertifikat */}
                  <div className="bg-red-50/50 border border-red-100/60 px-2 py-1 rounded-md w-fit">
                    <p className="text-[11px] font-mono font-bold text-choco">
                      {item.noRegistrasi}
                    </p>
                  </div>
                </div>

                {/* Keterangan / Deskripsi */}
                <p className="text-xs text-gray-500 leading-relaxed font-medium pt-1">
                  {item.deskripsi}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sertifikat;