import user from "../models/user-model.mjs";
import bcrypt from "bcrypt";

// All User
export const getUser = async (req, res) => {
    try {
        // Mengeluarkan password dari response JSON demi keamanan
        const response = await user.findAll({
            attributes: ['id', 'name', 'email', 'gender', 'createdAt', 'updatedAt']
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}

// User By Id
export const getUserById = async (req, res) => {
    try {
        const response = await user.findOne({
            attributes: ['id', 'name', 'email', 'gender'],
            where: { id: req.params.id }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}

// Create User
export const createUser = async (req, res) => {
    const { name, email, gender, password } = req.body;
    
    if (!password) {
        return res.status(400).json({ msg: "Password wajib diisi" });
    }

    try {
        // Enkripsi password dengan salt rounds = 10
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await user.create({
            name,
            email,
            gender,
            password: hashedPassword
        });

        res.status(201).json({ msg: "User Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}

// Update User
export const updUser = async (req, res) => {
    const { name, email, gender, password } = req.body;
    
    try {
        let updatedData = { name, email, gender };

        // Jika password diisi/diubah oleh admin, enkripsi password baru tersebut
        if (password && password !== "") {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            updatedData.password = hashedPassword;
        }

        await user.update(updatedData, {
            where: { id: req.params.id }
        });

        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}

// Delete User
export const delUser = async (req, res) => {
    try {
        await user.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({ msg: "User Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}

// Login User / Admin dari Database
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Cari user berdasarkan email
        const foundUser = await user.findOne({
            where: { email: email }
        });

        if (!foundUser) {
            return res.status(404).json({ msg: "Akun email tidak terdaftar!" });
        }

        // 2. Cocokkan password input dengan password terenkripsi di database
        const match = await bcrypt.compare(password, foundUser.password);
        if (!match) {
            return res.status(400).json({ msg: "Password yang Anda masukkan salah!" });
        }

        // 3. Jika berhasil, kirim response sukses (kamu bisa kembangkan jadi JWT nanti)
        res.status(200).json({ 
            msg: "Login Berhasil", 
            user: {
                id: foundUser.id,
                name: foundUser.name,
                email: foundUser.email
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}