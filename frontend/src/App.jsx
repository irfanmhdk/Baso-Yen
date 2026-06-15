import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Halaman Utama (Konsumen)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./components/page/Beranda";
import Produk from "./components/page/Produk";
import Layanan from "./components/page/Layanan";
import Kontak from "./components/page/Kontak";
import Resep from "./components/Resep";
import Tentang from "./components/page/Tentang";

// Halaman Login & Proteksi
import Login from "./components/Login"; 
import ProtectedRoute from "./components/ProtectedRoute"; 

// Halaman Admin
import Admin from "./components/page/Admin";
import Dashboard from "./components/Admin/Dashboard";
import AdminProduct from "./components/Admin/AdminProduct";
import AdminResep from "./components/Admin/AdminResep";
import AdminUsers from "./components/Admin/AdminUsers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* ================= RUTE UTAMA (KONSUMEN) ================= */}
        <Route path="/" element={<><Navbar /><Beranda /><Footer /></>} />
        <Route path="/produk" element={<><Navbar /><Produk /><Footer /></>} />
        <Route path="/layanan" element={<><Navbar /><Layanan /><Footer /></>} />
        <Route path="/kontak" element={<><Navbar /><Kontak /><Footer /></>} />
        <Route path="/resep" element={<><Navbar /><Resep /><Footer /></>} />
        <Route path="/tentang" element={<><Navbar /><Tentang /><Footer /></>} />

        {/* ================= RUTE LOGIN ================= */}
        <Route path="/login" element={<Login />} />

        {/* ================= RUTE DASHBOARD ADMIN (DIPROTEKSI) ================= */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        >
          {/* Jalur default ketika akses /admin (Rute Dashboard) */}
          <Route index element={<Dashboard />} />
          <Route path="produk" element={<AdminProduct />} />
          <Route path="resep" element={<AdminResep />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>

        {/* ================= PERBAIKAN DI SINI (Menggunakan Route, bukan path) ================= */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;