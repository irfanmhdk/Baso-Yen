import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiPlus, HiPencil, HiTrash, HiSearch, HiX } from 'react-icons/hi';

const API_URL = "http://localhost:4000/users";

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // State Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("add"); 
    const [selectedId, setSelectedId] = useState(null);

    // State Form Input (Termasuk password kosong bawaan)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: "",
        password: ""
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_URL);
            setUsers(response.data);
        } catch (error) {
            console.error("Gagal mengambil data user:", error);
            alert("Koneksi gagal! Pastikan server backend berjalan.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const openAddModal = () => {
        setModalType("add");
        setFormData({ name: "", email: "", gender: "", password: "" });
        setIsModalOpen(true);
    };

    const openEditModal = async (id) => {
        try {
            setModalType("edit");
            setSelectedId(id);
            const response = await axios.get(`${API_URL}/${id}`);
            setFormData({
                name: response.data.name || "",
                email: response.data.email || "",
                gender: response.data.gender || "",
                password: "" // Dikosongkan saat edit, hanya diisi jika ingin diganti
            });
            setIsModalOpen(true);
        } catch (error) {
            console.error("Gagal mengambil detail user:", error);
            alert("Gagal mengambil data user.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (modalType === "add") {
                await axios.post(API_URL, formData);
            } else {
                await axios.patch(`${API_URL}/${selectedId}`, formData);
            }
            setIsModalOpen(false);
            fetchUsers();
        } catch (error) {
            console.error("Gagal menyimpan data user:", error);
            alert("Proses gagal. Periksa kembali kelengkapan data.");
        }
    };

    const handleDelete = async (id, name) => {
        if (window.confirm(`Apakah Anda yakin ingin menghapus pengguna "${name}"?`)) {
            try {
                await axios.delete(`${API_URL}/${id}`);
                fetchUsers();
            } catch (error) {
                console.error("Gagal menghapus user:", error);
                alert("Gagal menghapus pengguna.");
            }
        }
    };

    const filteredUsers = users.filter((user) => {
        const query = searchQuery.toLowerCase();
        return (
            user.name?.toLowerCase().includes(query) ||
            user.email?.toLowerCase().includes(query)
        );
    });

    return (
        <div className="w-full space-y-6 text-slate-800">
            {/* ================= HEADER & FITUR PENCARIAN ================= */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div>
                    <h1 className="text-xl font-extrabold uppercase text-red-700 tracking-wide">Kelola Data Pengguna</h1>
                    <p className="text-xs text-gray-500 font-medium mt-1">Manajemen akun, hak akses, dan profil pengguna aplikasi.</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Cari nama atau email..."
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
                        Tambah Pengguna
                    </button>
                </div>
            </div>

            {/* ================= TABEL DATA USERS ================= */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                <th className="py-4 px-6 text-center w-16">No</th>
                                <th className="py-4 px-6">Nama Lengkap</th>
                                <th className="py-4 px-6">Email</th>
                                <th className="py-4 px-6 w-44">Jenis Kelamin</th>
                                <th className="py-4 px-6 text-center w-28">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs font-medium text-gray-600">
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((item, index) => (
                                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6 text-center font-bold text-gray-400">{index + 1}</td>
                                        <td className="py-4 px-6 font-bold text-gray-900">{item.name}</td>
                                        <td className="py-4 px-6 font-mono text-gray-500">{item.email}</td>
                                        <td className="py-4 px-6">
                                            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase ${
                                                item.gender?.toLowerCase() === 'male' || item.gender?.toLowerCase() === 'laki-laki'
                                                    ? 'bg-blue-50 text-blue-700 border border-blue-100'
                                                    : 'bg-pink-50 text-pink-700 border border-pink-100'
                                            }`}>
                                                {item.gender || "-"}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => openEditModal(item.id)}
                                                    className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg border border-blue-100 transition-colors cursor-pointer"
                                                    title="Edit Pengguna"
                                                >
                                                    <HiPencil size={14} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(item.id, item.name)}
                                                    className="p-2 text-red-600 bg-red-50 hover:bg-red-600 hover:text-white rounded-lg border border-red-100 transition-colors cursor-pointer"
                                                    title="Hapus Pengguna"
                                                >
                                                    <HiTrash size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-12 text-gray-400 font-medium">
                                        Tidak ada data pengguna ditemukan.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ================= MODAL DIALOG POPUP ================= */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden border border-gray-200 flex flex-col">
                        <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                            <h3 className="font-extrabold text-xs uppercase tracking-wider text-red-700">
                                {modalType === "add" ? "Tambah Pengguna Baru" : "Edit Informasi Pengguna"}
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-400 transition-colors cursor-pointer">
                                <HiX size={16} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-5 space-y-4">
                            {/* Input Nama */}
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">Nama Lengkap</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Contoh: Ahmad Subagja"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-red-700 bg-gray-50"
                                />
                            </div>

                            {/* Input Email */}
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">Alamat Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Contoh: ahmad@gmail.com"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-red-700 bg-gray-50"
                                />
                            </div>

                            {/* Input Password */}
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                                    Password {modalType === "edit" && <span className="text-[9px] text-amber-600 font-medium normal-case">(Kosongkan jika tidak diubah)</span>}
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    required={modalType === "add"} // Wajib diisi hanya saat tambah baru
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder={modalType === "add" ? "Masukkan password baru" : "••••••••"}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-red-700 bg-gray-50"
                                />
                            </div>

                            {/* Input Gender */}
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">Jenis Kelamin</label>
                                <div className="flex gap-4 pt-1">
                                    <label className="flex items-center gap-2 text-xs font-semibold text-gray-600 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Laki-laki"
                                            required
                                            checked={formData.gender === "Laki-laki"}
                                            onChange={handleInputChange}
                                            className="text-red-700 focus:ring-red-700"
                                        />
                                        Laki-laki
                                    </label>
                                    <label className="flex items-center gap-2 text-xs font-semibold text-gray-600 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Perempuan"
                                            required
                                            checked={formData.gender === "Perempuan"}
                                            onChange={handleInputChange}
                                            className="text-red-700 focus:ring-red-700"
                                        />
                                        Perempuan
                                    </label>
                                </div>
                            </div>

                            {/* Tombol Aksi */}
                            <div className="flex justify-end gap-2 pt-4 border-t border-gray-200 mt-2">
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

export default AdminUsers;