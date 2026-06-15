import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Tambahkan useNavigate di sini
import assets from '../../assets/assets-produk';
import { HiMenuAlt3, HiX, HiOutlineLogout } from "react-icons/hi";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const [user, setUser] = useState(null);
    const { pathname, hash } = useLocation();
    const navigate = useNavigate(); // Inisialisasi hook navigasi

    // Data menu navigasi utama admin
    const MENU_ITEMS = [
        { nama: "Dashboard", path: "/admin" },
        { nama: "Produk", path: "/admin/produk" },
        { nama: "Resep", path: "/admin/resep" },
        { nama: "Users", path: "/admin/users" },
    ];

    useEffect(() => {
        // Ubah kunci pencarian menjadi 'isLoggedIn' atau sesuaikan dengan App.jsx kamu
        const storedUser = localStorage.getItem('isLoggedIn');
        if (storedUser) {
            setUser(storedUser);
        }
    }, [pathname]);

    // ================= PERBAIKAN FUNGSI LOGOUT =================
    const handleLogout = () => {
        if (window.confirm("Apakah Anda yakin ingin keluar dari panel admin?")) {
            localStorage.removeItem('isLoggedIn'); // Hapus session login
            localStorage.removeItem('user');       // Hapus data user jika ada
            setUser(null);
            
            // Redirect langsung ke halaman login secara halus tanpa reload penuh
            navigate('/login', { replace: true });
        }
    };

    useEffect(() => {
        if (hash) {
            const timeout = setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 50);
            return () => clearTimeout(timeout);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return (
        <>
            {/* ================= TOMBOL TRIGGER SIDEBAR ================= */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed top-5 z-50 p-2.5 cursor-pointer bg-primary rounded-xl border border-sulfur/10 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isOpen ? 'left-56' : 'left-5'
                }`}
            >
                {isOpen ? <HiX size={20}/> : <HiMenuAlt3 size={20}/>}
            </button>

            {/* ================= PANEL SIDEBAR UTAMA ================= */}
            <aside className={`bg-trey flex flex-col fixed left-0 top-0 h-full transition-all duration-300 z-40 overflow-hidden shadow-2xl ${
                isOpen ? 'w-64' : 'w-0'
            }`}>
                
                {/* AREA LOGO */}
                <div className='p-6 flex flex-col items-center justify-center border-b border-primary/30 min-w-[256px]'>
                    <img 
                        src={assets.logoyen.logoYen} 
                        className='h-15 w-auto object-contain drop-shadow-md' 
                        alt="Logo Yen"
                    />
                </div>

                {/* LINK NAVIGASI DINAMIS */}
                <nav className='flex-1 p-4 space-y-1.5 mt-4 overflow-y-auto min-w-[256px]'>
                    {MENU_ITEMS.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                                    isActive
                                        ? "bg-primary shadow-md translate-x-1 text-gold"
                                        : "hover:shadow-md hover:bg-white-600 hover:translate-x-1 hover:scale-105"
                                }`}
                            >
                                {item.nama}
                            </Link>
                        );
                    })}
                </nav>

                {/* AREA PANEL BAWAH (LOGOUT) */}
                <div className='p-4 border-t border-primary/30 min-w-[256px] bg-primary-dark/30'>
                    <button 
                        onClick={handleLogout}
                        className='w-full flex items-center justify-center gap-2 px-4 py-3 font-bold text-xs uppercase tracking-wider bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white rounded-xl transition-all duration-200 cursor-pointer border border-red-500/20'
                    >
                        <HiOutlineLogout size={16} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* ================= BACKGROUND BLUR OVERLAY (MOBILE) ================= */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 sm:hidden transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Sidebar;