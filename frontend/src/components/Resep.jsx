import { useState, useEffect } from "react";

// ==========================================
// 1. DATA MASTER KATEGORI RESEP
// ==========================================
const KATEGORI_RESEP = [
    "SEMUA", "KUAH & HOTPOT", "GORENG & TUMIS", "CEMILAN", "KREASI MIE"
];

const Resep = () => {
    // ================= STATE MANAGEMENT =================
    const [semuaResep, setSemuaResep] = useState([]); // Menyimpan data asli resep dari DB
    const [kategoriAktif, setKategoriAktif] = useState("SEMUA");
    const [halamanAktif, setHalamanAktif] = useState(1);
    const [loading, setLoading] = useState(true);

    // URL Express Server Backend
    const BASE_URL = 'http://localhost:4000';
    const BASE_URL_IMG = 'http://localhost:4000/images';

    // ================= AMBIL DATA DARI DATABASE =================
    useEffect(() => {
        const fetchResep = async () => {
            try {
                setLoading(true);
                // Menyesuaikan endpoint API resep kamu (misal: /resep atau /recipes)
                const response = await fetch(`${BASE_URL}/resep`);
                const data = await response.json();

                if (Array.isArray(data)) {
                    setSemuaResep(data);
                } else {
                    console.error("Format data resep yang diterima bukan Array:", data);
                }
            } catch (error) {
                console.error("Gagal mengambil data resep dari database:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchResep();
    }, []);

    // ================= FILTER & PAGINATION LOGIC =================
    const resepTerfilter = semuaResep.filter((resep) => {
        if (kategoriAktif === "SEMUA") return true;

        // Normalisasi teks kategori database agar cocok dengan filter komponen
        const kategoriDb = resep.kategori ? resep.kategori.toUpperCase().trim() : "";
        return kategoriDb === kategoriAktif;
    });

    const resepPerHalaman = 6;
    const indeksTerakhir = halamanAktif * resepPerHalaman;
    const indeksPertama = indeksTerakhir - resepPerHalaman;
    const resepTampil = resepTerfilter.slice(indeksPertama, indeksTerakhir);

    const totalHalaman = Math.ceil(resepTerfilter.length / resepPerHalaman);

    const gantiKategori = (kategori) => {
        setKategoriAktif(kategori);
        setHalamanAktif(1); 
    };

    // ================= LOADING STATE UI =================
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
                <div className="w-10 h-10 border-4 border-[#8B0000] border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 animate-pulse">
                    Memuat Inspirasi Resep Dapur Yen...
                </p>
            </div>
        );
    }

    return (
        <section className="bg-gray-50 min-h-screen py-16 px-6 md:px-16 text-black">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* ================= HEADER HALAMAN ================= */}
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <span className="text-xs font-bold tracking-widest text-[#8B0000] uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100">
                        Dapur Kreatif Yen
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black">
                        Inspirasi Resep
                    </h1>
                    <div className="w-16 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                    <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed">
                        Kreasikan produk Baso Yen pilihan Anda menjadi hidangan istimewa keluarga dengan panduan memasak praktis dan lezat berikut.
                    </p>
                </div>

                {/* ================= FILTER KATEGORI ================= */}
                <div className="flex flex-wrap justify-center gap-2 border-b border-gray-200 pb-6">
                    {KATEGORI_RESEP.map((kategori) => (
                        <button
                            key={kategori}
                            onClick={() => gantiKategori(kategori)}
                            className={`px-4 py-2 rounded-full font-bold text-xs tracking-wider transition-all uppercase cursor-pointer ${
                                kategoriAktif === kategori
                                    ? "bg-[#8B0000] text-white shadow-md scale-105"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                            }`}
                        >
                            {kategori}
                        </button>
                    ))}
                </div>

                {/* ================= GRID KARTU RESEP ================= */}
                {resepTampil.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {resepTampil.map((resep) => {
                            // SINKRONISASI PROPERTI DATABASE (Mengantisipasi perbedaan penamaan kolom)
                            const namaReal = resep.nama || resep.title || "Resep Tanpa Nama";
                            const descReal = resep.deskripsi || resep.desc || "Tidak ada deskripsi langkah.";
                            const kategoriTampil = resep.kategori || "UMUM";

                            // HANDLER URL FOTO DARI DATABASE/BACKEND EXPRESS
                            // Menggunakan properti resep.foto atau resep.gambar sesuai respon database
                            const namaFileGambar = resep.foto || resep.gambar;
                            const urlGambar = namaFileGambar 
                                ? `${BASE_URL_IMG}/${namaFileGambar}`
                                : 'https://placehold.co/500x350?text=No+Image';

                            return (
                                <div 
                                    key={resep.id || resep._id} 
                                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                                Dad>
                                    {/* FOTO RESEP (MEMENUHI UTUH BENTUK CARD) */}
                                    <div className="w-full h-52 bg-gray-100 relative overflow-hidden select-none">
                                        <img
                                            src={urlGambar}
                                            alt={namaReal}
                                            onError={(e) => { 
                                                e.target.onerror = null; 
                                                e.target.src = 'https://placehold.co/500x350?text=Foto+Tidak+Ditemukan'; 
                                            }}
                                            // Menggunakan object-cover agar gambar memenuhi area card secara penuh
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Tag Kategori */}
                                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#8B0000] font-bold text-[10px] px-2.5 py-1 rounded-md tracking-wide uppercase border border-red-100 shadow-sm">
                                            {kategoriTampil}
                                        </span>
                                    </div>

                                    {/* DETAIL & DESKRIPSI INSTRUKSI */}
                                    <div className="p-5 flex-grow flex flex-col justify-between bg-white">
                                        <div className="space-y-2">
                                            <h3 className="font-extrabold text-base tracking-tight leading-tight text-black group-hover:text-[#8B0000] transition-colors line-clamp-1">
                                                {namaReal}
                                            </h3>
                                            <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3">
                                                {descReal}
                                            </p>
                                        </div>

                                        {/* Tombol Lihat Detail Cara Masak */}
                                        <div className="pt-5">
                                            <a
                                                href={`#`}
                                                target=""
                                                rel="noopener noreferrer"
                                                className="block w-full text-center bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-[#8B0000] border border-gray-100 font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl transition-colors"
                                            >
                                                Lihat Resep
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-400 font-medium">
                        Belum ada kreasi resep untuk kategori ini.
                    </div>
                )}

                {/* ================= PAGINATION (NAVIGASI HALAMAN) ================= */}
                {totalHalaman > 1 && (
                    <div className="flex justify-center items-center gap-2 pt-4">
                        <button
                            onClick={() => setHalamanAktif((prev) => Math.max(prev - 1, 1))}
                            disabled={halamanAktif === 1}
                            className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex gap-1">
                            {[...Array(totalHalaman)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setHalamanAktif(i + 1)}
                                    className={`w-9 h-9 rounded-xl font-bold text-xs transition-all ${
                                        halamanAktif === i + 1
                                            ? "bg-[#8B0000] text-white shadow-sm"
                                            : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setHalamanAktif((prev) => Math.min(prev + 1, totalHalaman))}
                            disabled={halamanAktif === totalHalaman}
                            className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Resep;