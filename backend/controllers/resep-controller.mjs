import resep from "../models/resep-model.mjs";
import fs from "fs";
import path from "path";

const deleteImageFile = (filename) => {
    if (!filename) return;
    const filePath = path.join("./public/images", filename);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
};

// ================= AMBIL SEMUA RESEP =================
export const getResep = async (req, res) => {
    try {
        const response = await resep.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.error("Get All Error:", error.message);
        res.status(500).json({ msg: "Terjadi kesalahan server" });
    }
};

// ================= AMBIL RESEP BY ID =================
export const getResepById = async (req, res) => {
    try {
        const response = await resep.findOne({
            where: { id: req.params.id }
        });
        if (!response) return res.status(404).json({ msg: "Data tidak ditemukan" });
        res.status(200).json(response);
    } catch (error) {
        console.error("Get ID Error:", error.message);
        res.status(500).json({ msg: "Terjadi kesalahan server" });
    }
};

// ================= TAMBAH RESEP BARU =================
export const createResep = async (req, res) => {
    try {
        // Eksplisit destrukturisasi req.body untuk menjamin nilai terbaca oleh Sequelize
        const { nama, kategori, desc, bahan, cara } = req.body;
        const foto = req.file ? req.file.filename : null;

        if (!nama || !kategori) {
            if (foto) deleteImageFile(foto); 
            return res.status(400).json({ msg: "Nama dan Kategori wajib diisi!" });
        }

        await resep.create({
            nama,
            kategori,
            desc,
            bahan,
            cara,
            foto
        });

        res.status(201).json({ msg: "Resep Berhasil Dibuat!" });
    } catch (error) {
        console.error("Create Error:", error.message);
        // Amankan file jika DB gagal memproses data
        if (req.file) deleteImageFile(req.file.filename);
        res.status(400).json({ msg: "Gagal menambahkan resep", error: error.message });
    }
};

// ================= PERBARUI DATA RESEP =================
export const updResep = async (req, res) => {
    try {
        const target = await resep.findOne({ where: { id: req.params.id } });
        if (!target) {
            if (req.file) deleteImageFile(req.file.filename);
            return res.status(404).json({ msg: "Data tidak ditemukan" });
        }

        const { nama, kategori, desc, bahan, cara } = req.body;
        
        let namaFoto = target.foto;
        if (req.file) {
            namaFoto = req.file.filename;
            // Hapus foto lama dari storage jika user mengunggah foto baru
            if (target.foto) deleteImageFile(target.foto);
        }

        await resep.update({
            nama: nama || target.nama,
            kategori: kategori || target.kategori,
            desc: desc !== undefined ? desc : target.desc,
            bahan: bahan || target.bahan,
            cara: cara || target.cara,
            foto: namaFoto
        }, {
            where: { id: req.params.id }
        });

        res.status(200).json({ msg: "Resep Berhasil Diperbarui!" });
    } catch (error) {
        console.error("Update Error:", error.message);
        if (req.file) deleteImageFile(req.file.filename);
        res.status(400).json({ msg: "Gagal memperbarui resep", error: error.message });
    }
};

// ================= HAPUS RESEP =================
export const delResep = async (req, res) => {
    try {
        const target = await resep.findOne({ where: { id: req.params.id } });
        if (!target) return res.status(404).json({ msg: "Data tidak ditemukan" });

        if (target.foto) {
            deleteImageFile(target.foto);
        }

        await resep.destroy({
            where: { id: req.params.id }
        });

        res.status(200).json({ msg: "Resep Berhasil Dihapus!" });
    } catch (error) {
        console.error("Delete Error:", error.message);
        res.status(500).json({ msg: "Gagal menghapus resep" });
    }
};