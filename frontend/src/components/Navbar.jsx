import { useState } from "react";
import { Link } from 'react-router-dom';
import assets from "../assets/assets-produk.js";

const MENU_KIRI = [
    { name: "Home", to: "/" },        // Diubah menjadi 'to' menuju root
    { name: "Produk", to: "/produk" }, // Diubah menjadi 'to' menuju halaman produk
    { name: "Layanan", to: "/layanan" },
];

const MENU_KANAN = [
    { name: "Kontak", to: "/kontak" },
    { name: "Tentang", to: "/tentang" },
    { name: "Resep", to: "/resep" },
];

// Data Media Sosial beserta SVG Ikonnya
const SOSIAL_MEDIA = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/basososisyen/",
        svg: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/basoyen/",
        svg: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.4a4.238 4.238 0 110-8.476 4.238 4.238 0 010 8.476zm4.945-10.928a1.116 1.116 0 112.233 0 1.116 1.116 0 01-2.233 0z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/channel/UCQLcnQA2X6I8kZGCGzVN5Fg",
        svg: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logoyen } = assets;

    return (
        <nav className="bg-trey/50 backdrop-blur-md text-black shadow-sm sticky top-0 z-50 px-6 py-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center gap-8 relative">

                {/* ================= DESKTOP VERSION ================= */}
                {/* Menu Kiri */}
                <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide">
                    {MENU_KIRI.map((menu) => (
                        <Link key={menu.name} to={menu.to} className="hover:text-primary transition-colors duration-200">
                            {menu.name}
                        </Link>
                    ))}
                </div>

                {/* Logo (Tengah) */}
                <div className="flex justify-start md:justify-center shrink-0">
                    <Link to="/" className="flex items-center">
                        <img src={logoyen.logoYen} alt="Baso Yen" className="h-14 w-auto object-contain transition-transform hover:scale-105" />
                    </Link>
                </div>

                {/* Menu Kanan */}
                <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide">
                    {MENU_KANAN.map((menu) => (
                        <Link key={menu.name} to={menu.to} className="hover:text-primary transition-colors duration-200">
                            {menu.name}
                        </Link>
                    ))}
                </div>

                {/* IKON SOSIAL MEDIA */}
                <div className="hidden md:flex items-center gap-4 absolute right-0 text-gray-600">
                    {SOSIAL_MEDIA.map((socmed) => (
                        <a
                            key={socmed.name}
                            href={socmed.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors duration-200 p-1"
                            aria-label={socmed.name}
                        >
                            {socmed.svg}
                        </a>
                    ))}
                </div>

                {/* ================= MOBILE VERSION ================= */}
                <div className="flex md:hidden ml-auto">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-black hover:text-primary transition-colors"
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* ================= MOBILE DRAWER MENU ================= */}
            <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-80 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col gap-3 py-3 border-t border-gray-100 font-medium text-sm">
                    {[...MENU_KIRI, ...MENU_KANAN].map((menu) => (
                        <Link
                            key={menu.name}
                            to={menu.to}
                            className="hover:text-primary py-1 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {menu.name}
                        </Link>
                    ))}

                    {/* Sosial Media Khusus Tampilan Mobile (HP) */}
                    <div className="flex items-center gap-5 pt-3 mt-1 border-t border-gray-100 text-gray-500">
                        {SOSIAL_MEDIA.map((socmed) => (
                            <a
                                key={socmed.name}
                                href={socmed.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {socmed.svg}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;