import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(''); // State untuk menampilkan error di UI
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // URL Express Server Backend kamu
  const BASE_URL = 'http://localhost:4000';

  const handleLoginDatabase = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setErrorMsg('');
    setLoading(true);

    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: cleanEmail,
          password: cleanPassword
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login Database Sukses:", data);
        localStorage.setItem('isLoggedIn', 'true');
        // Opsional: kamu bisa simpan data admin jika diperlukan
        localStorage.setItem('adminData', JSON.stringify(data.user)); 
        
        navigate('/admin'); 
      } else {
        // Mengambil pesan error dari backend (contoh: "Password salah!" atau "Email tidak terdaftar!")
        setErrorMsg(data.msg || 'Terjadi kesalahan saat login.');
      }
    } catch (error) {
      console.error("Error Login:", error);
      setErrorMsg('Gagal terhubung ke server backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md w-full max-w-md relative z-10">
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold uppercase text-red-700 tracking-wide">Login Admin</h2>
          <p className="text-xs text-gray-500 font-medium mt-1">Silahkan masuk menggunakan akun database Anda.</p>
        </div>

        {/* Notifikasi Pesan Error jika login gagal */}
        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-center">
            <p className="text-xs font-bold text-red-600">{errorMsg}</p>
          </div>
        )}

        {/* Menggunakan form onSubmit asli agar lebih standar dan mendukung tombol 'Enter' */}
        <form onSubmit={handleLoginDatabase} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-red-700 bg-gray-50"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-red-700 bg-gray-50"
            />
          </div>

          <button
            type="submit" 
            disabled={loading}
            className={`w-full bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl hover:bg-red-800 transition-all shadow-sm cursor-pointer mt-2 block relative z-20 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Memverifikasi...' : 'Masuk'}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;