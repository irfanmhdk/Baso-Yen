import { useState, useEffect } from "react";

// MENYESUAIKAN DAFTAR KATEGORI SINKRON DENGAN ADMIN
const KATEGORI_LIST = [
    "SEMUA", "BAKSO", "MIE", "SOSIS", "DIMSUM", "SIOMAY", "KULIT PANGSIT", "LAIN-LAIN"
];

const ListProduk = () => {
    // ================= STATE MANAGEMENT =================
    const [semuaProduk, setSemuaProduk] = useState([]); // Menyimpan data asli dari DB
    const [kategoriAktif, setKategoriAktif] = useState("SEMUA");
    const [halamanAktif, setHalamanAktif] = useState(1);
    const [loading, setLoading] = useState(true);

    // URL Express Server Backend (Mengikuti standard konstan admin)
    const BASE_URL = 'http://localhost:4000';
    const BASE_URL_IMG = 'http://localhost:4000/images';

    // ================= AMBIL DATA DARI DATABASE =================
    useEffect(() => {
        const fetchProduk = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${BASE_URL}/produk`);
                const data = await response.json();

                if (Array.isArray(data)) {
                    setSemuaProduk(data);
                } else {
                    console.error("Format data yang diterima bukan Array:", data);
                }
            } catch (error) {
                console.error("Gagal mengambil data produk dari database:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduk();
    }, []);

    // ================= FILTER & PAGINATION LOGIC =================
    const produkTerfilter = semuaProduk.filter((produk) => {
        if (kategoriAktif === "SEMUA") return true;

        // Normalisasi teks kategori database agar cocok dengan filter
        const kategoriProduk = produk.kategori ? produk.kategori.toUpperCase().trim() : "";

        // Mengantisipasi jika di database lama masih ada teks "BASO"
        if (kategoriAktif === "BAKSO" && kategoriProduk === "BASO") return true;

        return kategoriProduk === kategoriAktif;
    });

    const produkPerHalaman = 6;
    const indeksTerakhir = halamanAktif * produkPerHalaman;
    const indeksPertama = indeksTerakhir - produkPerHalaman;
    const produkTampil = produkTerfilter.slice(indeksPertama, indeksTerakhir);

    const totalHalaman = Math.ceil(produkTerfilter.length / produkPerHalaman);

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
                    Memuat Katalog Produk Baso Yen...
                </p>
            </div>
        );
    }

    return (
        <section className="bg-gray-50 min-h-screen py-16 px-6 md:px-16 text-black">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* ================= HEADER HALAMAN ================= */}
                <div className="text-center space-y-3">
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Katalog Produk</h1>
                    <p className="text-gray-500 font-medium text-sm md:text-base">Varian menu lezat, sehat, dan higienis dari Baso Yen Bandung</p>
                </div>

                {/* ================= KATEGORI ================= */}
                <div className="flex flex-wrap justify-center gap-2 border-b border-gray-200 pb-6">
                    {KATEGORI_LIST.map((kategori) => (
                        <button
                            key={kategori}
                            onClick={() => gantiKategori(kategori)}
                            className={`px-4 py-2 rounded-full font-bold text-xs tracking-wider transition-all uppercase cursor-pointer ${kategoriAktif === kategori
                                    ? "bg-[#8B0000] text-white shadow-md scale-105"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                }`}
                        >
                            {kategori}
                        </button>
                    ))}
                </div>

                {/* ================= GRID PRODUK ================= */}
                {produkTampil.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {produkTampil.map((produk) => {
                            const namaReal = produk.nama || produk.name || "Produk Tanpa Nama";
                            const descReal = produk.deskripsi || produk.desc || "Tidak ada deskripsi.";

                            const kategoriTampil = produk.kategori && produk.kategori.toUpperCase() === "BASO"
                                ? "BAKSO"
                                : produk.kategori || "UMUM";

                            const urlGambar = produk.foto
                                ? `${BASE_URL_IMG}/${produk.foto}`
                                : 'https://placehold.co/400x300?text=No+Image';

                            return (
                                <div key={produk.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                                    {/* FOTO PRODUK (SEKARANG FULL MEMENUHI CARD) */}
                                    <div className="w-full h-50 bg-gray-100 relative overflow-hidden select-none">
                                        <img
                                            src={urlGambar}
                                            alt={namaReal}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://placehold.co/400x300?text=Foto+Tidak+Ditemukan';
                                            }}
                                            // PERUBAHAN DI SINI: w-full h-full object-cover untuk memenuhi container
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* BADGE KATEGORI */}
                                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#8B0000] font-bold text-[10px] px-2.5 py-1 rounded-md tracking-wide uppercase border border-red-100 shadow-sm">
                                            {kategoriTampil}
                                        </span>
                                    </div>

                                    {/* DESKRIPSI PRODUK */}
                                    <div className="p-5 flex-grow flex flex-col justify-between bg-white">
                                        <div className="space-y-1">
                                            <h3 className="font-extrabold text-lg tracking-tight leading-tight text-black line-clamp-1">
                                                {namaReal}
                                            </h3>
                                            <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-2">
                                                {descReal}
                                            </p>
                                        </div>

                                        {/* HUBUNGI VIA WHATSAPP */}
                                        <div className="pt-4">
                                            <a
                                                href={`https://wa.me/6281234567890?text=Halo%20Baso%20Yen,%20saya%20tertarik%20dan%20ingin%20tanya%20detail%20mengenai%20produk%20${encodeURIComponent(namaReal)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full text-center bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-[#8B0000] border border-gray-100 font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl transition-colors"
                                            >
                                                Tanya Detail
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-400 font-medium">
                        Belum ada produk di kategori "{kategoriAktif}".
                    </div>
                )}

                {/* ================= NAVIGASI PAGINATION ================= */}
                {totalHalaman > 1 && (
                    <div className="flex justify-center items-center gap-2 pt-4">
                        <button
                            onClick={() => setHalamanAktif((prev) => Math.max(prev - 1, 1))}
                            disabled={halamanAktif === 1}
                            className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                        </button>

                        <div className="flex gap-1">
                            {[...Array(totalHalaman)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setHalamanAktif(i + 1)}
                                    className={`w-9 h-9 rounded-xl font-bold text-xs transition-all ${halamanAktif === i + 1
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
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};

export default ListProduk;