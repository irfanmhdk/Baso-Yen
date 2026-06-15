import React from 'react';
import assets from "../assets/assets-produk.js";

const Klien = () => {
  // Mencegah error jika file assets atau properti logoklien di dalamnya belum siap
  if (!assets || !assets.logoklien) return null;

  // Destrukturisasi semua logo dari berkas eksternal
  const {
    altimagroup,
    asto,
    baksoboejangan,
    crownePlazaHotelsResortsLogo,
    destinycatering,
    gaiahotel,
    grandMercureHotelsAndResortsVectorLogo,
    ismaya,
    jabrano,
    jabranoMerah,
    TransMedia,
    logomiegacoan,
    melindahospita,
    padma,
    sheratonhotels,
    suki,
    thepapandayan
  } = assets.logoklien;

  // Menggabungkan semua logo ke dalam satu array tunggal
  const SEMUA_LOGO = [
    { src: crownePlazaHotelsResortsLogo, alt: "Crowne Plaza Hotels" },
    { src: gaiahotel, alt: "The Gaia Hotel" },
    { src: grandMercureHotelsAndResortsVectorLogo, alt: "Grand Mercure" },
    { src: padma, alt: "Padma Hotel" },
    { src: sheratonhotels, alt: "Sheraton Hotels" },
    { src: thepapandayan, alt: "The Papandayan" },
    { src: logomiegacoan, alt: "Mie Gacoan" },
    { src: baksoboejangan, alt: "Bakso Boejangan" },
    { src: ismaya, alt: "Ismaya Group" },
    { src: altimagroup, alt: "Altima Group" },
    { src: destinycatering, alt: "Destiny Catering" },
    { src: TransMedia, alt: "Trans Media" },
    { src: jabranoMerah || jabrano, alt: "Jabrano Coffee" },
    { src: asto, alt: "Asto" },
    { src: suki, alt: "Suki" },
    { src: melindahospita, alt: "Melinda Hospital" }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* ================= HEADER TEKS (DI TENGAH) ================= */}
        <div className="text-center">
          <span className="text-xs font-bold tracking-widest text-choco uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Kemitraan & Kepercayaan
          </span>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight mt-1">
            Telah Dipercaya oleh Jaringan Bisnis Terkemuka
          </h3>
        </div>

        {/* ================= GRID LOGO ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
          {SEMUA_LOGO.map((logo, index) => {
            // Mencegah patah layout jika ada properti asset yang kosong
            if (!logo.src) return null;

            return (
              <div
                key={index}
                className="bg-gray-50/60 p-6 rounded-xl border border-gray-100/70 h-24 flex items-center justify-center hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 max-w-full object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Klien;