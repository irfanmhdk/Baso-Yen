import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiPlus, HiPencil, HiTrash, HiSearch, HiX, HiUpload } from 'react-icons/hi';

const API_URL = "http://localhost:4000/resep";
const BASE_URL_IMG = "http://localhost:4000/images";

const AdminResep = () => {
    const [resep, setResep] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // State Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("add");
    const [selectedId, setSelectedId] = useState(null);

    // State Form Input (Sesuai dengan Model DB)
    const [formData, setFormData] = useState({
        nama: "",
        kategori: "",
        desc: "",
        bahan: "",
        cara: ""
    });
    const [fileFoto, setFileFoto] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const PILIHAN_KATEGORI = ["BAKSO", "MIE", "SOSIS", "KULIT PANGSIT", "PELENGKAP"];

    useEffect(() => {
        fetchResep();
    }, []);

    const fetchResep = async () => {
        try {
            const response = await axios.get(API_URL);
            setResep(response.data);
        } catch (error) {
            console.error("Gagal mengambil data resep:", error);
            alert("Koneksi gagal! Pastikan server backend berjalan di port 4000.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        if (previewUrl && !previewUrl.startsWith('http')) {
            URL.revokeObjectURL(previewUrl);
        }
        
        setFileFoto(file);
        setPreviewUrl(URL.createObjectURL(file));
    }
};

const openAddModal = () => {
    setModalType("add");
    setFormData({ nama: "", kategori: "", desc: "", bahan: "", cara: "" });
    
    if (previewUrl && !previewUrl.startsWith('http')) {
        URL.revokeObjectURL(previewUrl);
    }
    
    setFileFoto(null);
    setPreviewUrl("");
    setIsModalOpen(true);
};

const handleSubmit = async (e) => {
    e.preventDefault();
    
    const dataToSend = new FormData();
    dataToSend.append("nama", formData.nama);
    dataToSend.append("kategori", formData.kategori);
    dataToSend.append("desc", formData.desc); 
    dataToSend.append("bahan", formData.bahan);
    dataToSend.append("cara", formData.cara);
    
    if (fileFoto) {
        dataToSend.append("foto", fileFoto); 
    }

    try {
        if (modalType === "add") {
            await axios.post(API_URL, dataToSend);
        } else {
            await axios.patch(`${API_URL}/${selectedId}`, dataToSend);
        }
        
        if (previewUrl && !previewUrl.startsWith('http')) {
            URL.revokeObjectURL(previewUrl);
        }

        setIsModalOpen(false);
        fetchResep();
    } catch (error) {
        console.error("Gagal menyimpan data:", error);
        alert(error.response?.data?.message || "Proses gagal. Periksa kembali kelengkapan data.");
    }
};

    const handleDelete = async (id, nama) => {
        if (window.confirm(`Apakah Anda yakin ingin menghapus resep kulinari "${nama}"?`)) {
            try {
                await axios.delete(`${API_URL}/${id}`);
                fetchResep();
            } catch (error) {
                console.error("Gagal menghapus resep:", error);
            }
        }
    };

    const filteredResep = resep.filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
            item.nama?.toLowerCase().includes(query) ||
            item.kategori?.toLowerCase().includes(query)
        );
    });

    return (
        <div className="w-full space-y-6 text-slate-800">
            {/* ================= HEADER & FITUR PENCARIAN ================= */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div>
                    <h1 className="text-xl font-extrabold uppercase text-red-700 tracking-wide">Kelola Kreasi Resep</h1>
                    <p className="text-xs text-gray-500 font-medium mt-1">Sajikan panduan resep masakan berbasis produk Baso Yen.</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Cari resep atau kategori..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 pr-4 py-2 w-full md:w-64 rounded-xl border border-gray-200 text-xs font-semibold focus:outline-none focus:border-red-700 transition-colors bg-gray-50"
                        />
                    </div>

                    <button
                        onClick={openAddModal}
                        className="flex items-center gap-2 bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl hover:bg-red-800 transition-all shadow-sm cursor-pointer"
                    >
                        <HiPlus size={16} />
                        Tambah Resep
                    </button>
                </div>
            </div>

            {/* ================= TABEL DATA KREASI RESEP ================= */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                <th className="py-4 px-6 text-center w-16">No</th>
                                <th className="py-4 px-6 w-24 text-center">Foto</th>
                                <th className="py-4 px-6">Nama Resep</th>
                                <th className="py-4 px-6 w-40">Kategori</th>
                                <th className="py-4 px-6">Deskripsi Singkat</th>
                                <th className="py-4 px-6 text-center w-28">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs font-medium text-gray-600">
                            {filteredResep.length > 0 ? (
                                filteredResep.map((item, index) => (
                                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6 text-center font-bold text-gray-400">{index + 1}</td>
                                        <td className="py-4 px-6 text-center">
                                            {item.foto ? (
                                                <img 
                                                    src={`${BASE_URL_IMG}/${item.foto}`} 
                                                    alt={item.nama} 
                                                    className="w-12 h-12 rounded-xl object-cover border border-gray-200 shadow-sm mx-auto"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-[9px] text-gray-400 font-bold uppercase tracking-tighter mx-auto border border-dashed border-gray-300">
                                                    No Pic
                                                </div>
                                            )}
                                        </td>
                                        <td className="py-4 px-6 font-bold text-gray-900">{item.nama}</td>
                                        <td className="py-4 px-6">
                                            <span className="bg-red-50 text-red-700 border border-red-100 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase">
                                                {item.kategori || "UMUM"}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 max-w-xs truncate">{item.desc || "-"}</td>
                                        <td className="py-4 px-6 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => openEditModal(item.id)}
                                                    className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg border border-blue-100 transition-colors cursor-pointer"
                                                    title="Edit Resep"
                                                >
                                                    <HiPencil size={14} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(item.id, item.nama)}
                                                    className="p-2 text-red-600 bg-red-50 hover:bg-red-600 hover:text-white rounded-lg border border-red-100 transition-colors cursor-pointer"
                                                    title="Hapus Resep"
                                                >
                                                    <HiTrash size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-12 text-gray-400 font-medium">
                                        Tidak ada resep masakan ditemukan.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ================= MODAL DIALOG POPUP (INPUT & EDIT) ================= */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden border border-gray-200 max-h-[90vh] flex flex-col">
                        <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                            <h3 className="font-extrabold text-xs uppercase tracking-wider text-red-700">
                                {modalType === "add" ? "Tambah Koleksi Resep Baru" : "Edit Panduan Resep"}
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-400 transition-colors cursor-pointer">
                                <HiX size={16} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-5 space-y-4 overflow-y-auto flex-1">
                            {/* Upload Image Section */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">Foto Banner Masakan</label>
                                <div className="flex items-center gap-4">
                                    {previewUrl && (
                                        <img src={previewUrl} alt="Preview" className="w-20 h-20 rounded-xl object-cover border border-gray-200" />
                                    )}
                                    <label className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-red-700 bg-gray-50 p-4 rounded-xl cursor-pointer group transition-colors min-h-[80px]">
                                        <HiUpload size={20} className="text-gray-400 group-hover:text-red-700 transition-colors" />
                                        <span className="text-[10px] font-bold text-gray-500 group-hover:text-red-700 mt-1 max-w-[220px] truncate text-center">
                                            {fileFoto ? fileFoto.name : "Unggah Sampul Resep"}
                                        </span>
                                        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                                    </label>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Nama Olahan Menu</label>
                                    <input
                                        type="text"
                                        name="nama"
                                        required
                                        value={formData.nama}
                                        onChange={handleInputChange}
                                        placeholder="Contoh: Seblak Bakso Komplit"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-red-700 bg-gray-50"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Kategori Bahan Dasar</label>
                                    <select
                                        name="kategori"
                                        required
                                        value={formData.kategori}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-red-700 bg-gray-50 cursor-pointer"
                                    >
                                        <option value="">-- Pilih Kategori --</option>
                                        {PILIHAN_KATEGORI.map((kat) => (
                                            <option key={kat} value={kat}>{kat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Deskripsi Singkat / Pengantar</label>
                                <input
                                    type="text"
                                    name="desc"
                                    value={formData.desc}
                                    onChange={handleInputChange}
                                    placeholder="Kuliner hangat khas Bandung dengan bumbu kencur gurih..."
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-red-700 bg-gray-50"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Bahan - Bahan (Gunakan koma atau baris baru)</label>
                                <textarea
                                    name="bahan"
                                    rows={3}
                                    required
                                    value={formData.bahan}
                                    onChange={handleInputChange}
                                    placeholder="5 Butir Bakso Yen, 2 Siung Bawang Putih, Cabai Rawit secukupnya..."
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-red-700 bg-gray-50 resize-none"
                                ></textarea>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Langkah / Cara Pembuatan</label>
                                <textarea
                                    name="cara"
                                    rows={4}
                                    required
                                    value={formData.cara}
                                    onChange={handleInputChange}
                                    placeholder="1. Haluskan bumbu kencur dan bawang.&#10;2. Tumis hingga harum lalu masukkan air mentah..."
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-red-700 bg-gray-50 resize-none"
                                ></textarea>
                            </div>

                            <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer">
                                    Batal
                                </button>
                                <button type="submit" className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-red-700 hover:bg-red-800 transition-colors cursor-pointer shadow-sm">
                                    {modalType === "add" ? "Simpan Data" : "Perbarui"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminResep;