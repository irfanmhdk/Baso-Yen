import React from 'react';
import { HiStar } from 'react-icons/hi';

const DUMMY_TESTIMONI = [
    {
        id: 1,
        nama: "Rian Kurnia",
        status: "Pemilik Bakso Malang, Bandung",
        produk: "BAKSO & KULIT PANGSIT",
        ulasan: "Sudah jalan 2 tahun pakai Baso Yen untuk suplai warung. Tekstur baksonya garing, dagingnya sangat berasa, dan tidak dominan tepung. Kulit pangsitnya juga renyah banget pas digoreng, gak gampang robek pas dilipat.",
        rating: 5,
        inisial: "RK"
    },
    {
        id: 2,
        nama: "Siti Rahmawati",
        status: "Ibu Rumah Tangga",
        produk: "MIE",
        ulasan: "Anak-anak suka banget sama Mie Baso Yen. Teksturnya kenyal pas, gak lembek kalau direbus agak lama. Yang paling penting rasa mie-nya fresh, gak ada bau obat atau pengawet menyengat. Jaminan higienis buat keluarga.",
        rating: 5,
        inisial: "SR"
    },
    {
        id: 3,
        nama: "Chef Haryo",
        status: "Culinary Consultant",
        produk: "SOSIS",
        ulasan: "Sosis Yen punya standar kualitas premium. *Casing* sosisnya menggunakan bahan aman yang tidak perlu dikupas, dan saat dibakar aromanya keluar sekali. Sangat cocok untuk menu *western* maupun bakaran lokal.",
        rating: 5,
        inisial: "CH"
    },
    {
        id: 4,
        nama: "Rossa",
        status: "Pengusaha Catering",
        produk: "PELENGKAP & BAKSO",
        ulasan: "Sangat terbantu kalau ada pesanan prasmanan besar. Baso Yen selalu konsisten ukurannya, rasanya gurih alami dari kaldu daging asli, bukan sekadar MSG. *Customer* catering saya selalu puas dan tanya belinya di mana.",
        rating: 4,
        inisial: "R"
    },
    {
        id: 5,
        nama: "Dedi Setiadi",
        status: "Pecinta Kuliner",
        produk: "BAKSO",
        ulasan: "Awalnya iseng beli buat stok *frozen food* di rumah, turns out rasanya premium banget mirip bakso restauran mahal. Kuah kaldunya jadi ikut gurih karena minyak alami dari baksonya keluar pas direbus.",
        rating: 5,
        inisial: "DS"
    },
    {
        id: 6,
        nama: "Linda Wijaya",
        status: "Pemilik Kedai Mie Ayam",
        produk: "MIE & KULIT PANGSIT",
        ulasan: "Variasi mi dari Yen benar-benar membantu bisnis mi ayam saya naik kelas. Bentuk mi-nya konsisten, porsinya pas, dan daya simpannya bagus meskipun tanpa pengawet ekstrem. Pengiriman selalu tepat waktu.",
        rating: 5,
        inisial: "LW"
    }
];

const Testimoni = () => {
    return (
        <div className="bg-trey py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* ================= HEADER SEKSI ================= */}
                <div className="text-center space-y-3 mb-12">
                    <span className="text-xs font-bold tracking-widest text-choco uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100">
                        Kisah Sukses & Ulasan
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Apa Kata Mereka Tentang <span className="text-red-700">Baso Yen</span>?
                    </h3>
                    <p className="text-xs text-gray-500 max-w-xl mx-auto font-medium">
                        Dengarkan pengalaman langsung dari para pelaku usaha kuliner, chef, dan keluarga yang telah mempercayakan kelezatan hidangannya pada produk kami.
                    </p>
                </div>

                {/* ================= GRID KARTU TESTIMONI ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DUMMY_TESTIMONI.map((testi) => (
                        <div
                            key={testi.id}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                {/* Baris Atas: Badge Kategori & Rating Bintang */}
                                <div className="flex items-center justify-between">
                                    <span className="bg-red-50 text-red-700 border border-red-100 px-2.5 py-1 rounded-md text-[9px] font-bold tracking-wider uppercase">
                                        {testi.produk}
                                    </span>
                                    <div className="flex items-center gap-0.5 text-amber-400">
                                        {[...Array(testi.rating)].map((_, i) => (
                                            <HiStar key={i} size={16} />
                                        ))}
                                    </div>
                                </div>

                                {/* Isi Ulasan */}
                                <p className="text-xs text-gray-600 leading-relaxed font-medium italic">
                                    "{testi.ulasan}"
                                </p>
                            </div>

                            {/* Informasi Profil Pengulas */}
                            <div className="flex items-center gap-3 pt-4 mt-6 border-t border-gray-100">
                                {/* Placeholder Avatar Bulat */}
                                <div className="w-10 h-10 bg-slate-100 text-slate-700 border border-slate-200 rounded-full flex items-center justify-center font-bold text-xs shadow-inner">
                                    {testi.inisial}
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-900">{testi.nama}</h4>
                                    <p className="text-[10px] font-medium text-gray-400 mt-0.5">{testi.status}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimoni;