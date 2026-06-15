import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiPlus, HiPencil, HiTrash, HiSearch, HiX, HiUpload } from 'react-icons/hi';

const API_URL = "http://localhost:4000/produk";
const BASE_URL_IMG = "http://localhost:4000/images";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("add"); 
  const [selectedId, setSelectedId] = useState(null);

  const [formData, setFormData] = useState({
    nama: "",
    kategori: "",
    deskripsi: ""
  });
  const [fileFoto, setFileFoto] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const PILIHAN_KATEGORI = ["BAKSO", "MIE", "SOSIS", "KULIT PANGSIT", "PELENGKAP"];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Gagal mengambil data produk:", error);
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
      setFileFoto(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const openAddModal = () => {
    setModalType("add");
    setFormData({ nama: "", kategori: "", deskripsi: "" });
    setFileFoto(null);
    setPreviewUrl("");
    setIsModalOpen(true);
  };

  const openEditModal = async (id) => {
    try {
      setModalType("edit");
      setSelectedId(id);
      const response = await axios.get(`${API_URL}/${id}`);
      setFormData({
        nama: response.data.nama,
        kategori: response.data.kategori,
        deskripsi: response.data.deskripsi
      });
      setFileFoto(null);
      setPreviewUrl(response.data.foto ? `${BASE_URL_IMG}/${response.data.foto}` : "");
      setIsModalOpen(true);
    } catch (error) {
      console.error("Gagal mengambil detail produk:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = new FormData();
    dataToSend.append("nama", formData.nama);
    dataToSend.append("kategori", formData.kategori);
    dataToSend.append("deskripsi", formData.deskripsi);
    if (fileFoto) {
      dataToSend.append("foto", fileFoto);
    }

    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      if (modalType === "add") {
        await axios.post(API_URL, dataToSend, config);
      } else {
        await axios.patch(`${API_URL}/${selectedId}`, dataToSend, config);
      }
      setIsModalOpen(false);
      fetchProducts();
    } catch (error) {
      console.error("Gagal menyimpan data:", error);
      alert("Gagal memproses produk. Periksa ukuran file gambar.");
    }
  };

  const handleDelete = async (id, nama) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus produk "${nama}"?`)) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchProducts();
      } catch (error) {
        console.error("Gagal menghapus produk:", error);
      }
    }
  };

  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.nama?.toLowerCase().includes(query) ||
      product.kategori?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="w-full space-y-6 p-1 text-slate-800">
      
      {/* ================= HEADER & FITUR PENCARIAN ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-xl font-extrabold uppercase text-red-700 tracking-wide">Kelola Data Produk</h1>
          <p className="text-xs text-gray-500 font-medium mt-1">Tambah, edit, dan hapus seluruh katalog produk Baso Yen.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Cari nama atau kategori..."
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
            Tambah Produk
          </button>
        </div>
      </div>

      {/* ================= TABEL DATA PRODUK LENGKAP ================= */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                <th className="py-4 px-6 text-center w-16">No</th>
                <th className="py-4 px-6 w-24 text-center">Foto</th>
                <th className="py-4 px-6">Nama Produk</th>
                <th className="py-4 px-6 w-40">Kategori</th>
                <th className="py-4 px-6">Deskripsi</th>
                <th className="py-4 px-6 text-center w-28">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-xs font-medium text-gray-600">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 text-center font-bold text-gray-400">{index + 1}</td>
                    
                    <td className="py-4 px-6 text-center">
                      {product.foto ? (
                        <img 
                          src={`${BASE_URL_IMG}/${product.foto}`} 
                          alt={product.nama} 
                          className="w-12 h-12 rounded-xl object-cover border border-gray-200 shadow-sm mx-auto"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-[9px] text-gray-400 font-bold uppercase tracking-tighter mx-auto border border-dashed border-gray-300">
                          No Pic
                        </div>
                      )}
                    </td>

                    <td className="py-4 px-6 font-bold text-gray-900">{product.nama}</td>
                    <td className="py-4 px-6">
                      <span className="bg-red-50 text-red-700 border border-red-100 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase">
                        {product.kategori}
                      </span>
                    </td>
                    <td className="py-4 px-6 max-w-xs truncate">{product.deskripsi || "-"}</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => openEditModal(product.id)}
                          className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg border border-blue-100 transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <HiPencil size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id, product.nama)}
                          className="p-2 text-red-600 bg-red-50 hover:bg-red-600 hover:text-white rounded-lg border border-red-100 transition-colors cursor-pointer"
                          title="Hapus"
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
                    Tidak ada data produk yang ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MODAL DIALOG POPUP ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden border border-gray-200">
            <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-gray-50">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-red-700">
                {modalType === "add" ? "Tambah Produk Baru" : "Edit Data Produk"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-400 transition-colors cursor-pointer">
                <HiX size={16} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">Foto Produk</label>
                <div className="flex items-center gap-4">
                  {previewUrl && (
                    <img 
                      src={previewUrl} 
                      alt="Pratinjau" 
                      className="w-20 h-20 rounded-xl object-cover border border-gray-200"
                    />
                  )}
                  <label className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-red-700 bg-gray-50 p-4 rounded-xl cursor-pointer group transition-colors min-h-[80px]">
                    <HiUpload size={20} className="text-gray-400 group-hover:text-red-700 transition-colors" />
                    <span className="text-[10px] font-bold text-gray-500 group-hover:text-red-700 mt-1 max-w-[180px] truncate text-center">
                      {fileFoto ? fileFoto.name : "Pilih File Gambar"}
                    </span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileChange} 
                      className="hidden" 
                    />
                  </label>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Nama Produk</label>
                <input
                  type="text"
                  name="nama"
                  required
                  value={formData.nama}
                  onChange={handleInputChange}
                  placeholder="Contoh: Bakso Sapi Super Ekonomis"
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-red-700 bg-gray-50"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Kategori</label>
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

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Deskripsi / Detail Produk</label>
                <textarea
                  name="deskripsi"
                  rows={3}
                  value={formData.deskripsi}
                  onChange={handleInputChange}
                  placeholder="Tulis spesifikasi kemasan atau deskripsi produk disini..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-red-700 bg-gray-50 resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-gray-200">
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

export default AdminProduct;