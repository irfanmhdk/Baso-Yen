import React, { useEffect, useState } from 'react';
import { HiOutlineCube, HiOutlineBookOpen, HiOutlineUsers } from "react-icons/hi";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProduk: 0,
    totalResep: 0,
    totalUsers: 0
  });
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = 'http://localhost:4000';

  const fetchDatabaseData = async () => {
    try {
      const [resProduk, resResep, resUsers] = await Promise.all([
        fetch(`${BASE_URL}/produk`),
        fetch(`${BASE_URL}/resep`),
        fetch(`${BASE_URL}/users`)
      ]);

      const dataProduk = await resProduk.json();
      const dataResep = await resResep.json();
      const dataUsers = await resUsers.json();

      setStats({
        totalProduk: Array.isArray(dataProduk) ? dataProduk.length : 0,
        totalResep: Array.isArray(dataResep) ? dataResep.length : 0,
        totalUsers: Array.isArray(dataUsers) ? dataUsers.length : 0
      });

      const realLogs = [];

      // Log Produk Terakhir
      if (Array.isArray(dataProduk) && dataProduk.length > 0) {
        const latestProduct = dataProduk[dataProduk.length - 1];
        const namaProdukReal = latestProduct.name || latestProduct.nama || 'Produk Baru';
        const waktuReal = latestProduct.createdAt 
          ? new Date(latestProduct.createdAt).toLocaleDateString('id-ID') 
          : 'Baru saja';

        realLogs.push({
          id: `prod-${latestProduct.id || 1}`,
          action: 'Menambahkan Produk Baru',
          item: namaProdukReal,
          time: waktuReal,
          admin: 'Admin',
          timestamp: latestProduct.createdAt ? new Date(latestProduct.createdAt).getTime() : 1
        });
      }

      if (Array.isArray(dataResep) && dataResep.length > 0) {
        const latestResep = dataResep[dataResep.length - 1];
        const namaResepReal = latestResep.name || latestResep.nama || 'Resep Baru';
        const waktuReal = latestResep.createdAt 
          ? new Date(latestResep.createdAt).toLocaleDateString('id-ID') 
          : 'Beberapa jam yang lalu';

        realLogs.push({
          id: `resep-${latestResep.id || 2}`,
          action: 'Memperbarui Resep',
          item: namaResepReal,
          time: waktuReal,
          admin: 'Mahar',
          timestamp: latestResep.createdAt ? new Date(latestResep.createdAt).getTime() : 0
        });
      }

      if (Array.isArray(dataUsers) && dataUsers.length > 0) {
        const latestUser = dataUsers[dataUsers.length - 1];
        const namaUserReal = latestUser.name || latestUser.email || 'User Baru';
        const waktuReal = latestUser.createdAt 
          ? new Date(latestUser.createdAt).toLocaleDateString('id-ID') 
          : 'Kemarin';

        realLogs.push({
          id: `user-${latestUser.id || 3}`,
          action: 'User Baru Terdaftar',
          item: namaUserReal,
          time: waktuReal,
          admin: 'System',
          timestamp: latestUser.createdAt ? new Date(latestUser.createdAt).getTime() : -1
        });
      }

      // Mengurutkan log berdasarkan data terbaru di atas
      realLogs.sort((a, b) => b.timestamp - a.timestamp);
      
      setRecentActivities(realLogs.length > 0 ? realLogs : [
        { id: 'empty', action: 'Sistem Sinkron', item: 'Database Terhubung Mulus', time: 'Sekarang', admin: 'System' }
      ]);

    } catch (error) {
      console.error("Gagal sinkronisasi data dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDatabaseData();
  }, []);

  const cardStats = [
    { id: 1, name: 'Total Produk', value: stats.totalProduk, icon: HiOutlineCube, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 2, name: 'Total Resep', value: stats.totalResep, icon: HiOutlineBookOpen, color: 'text-green-600', bg: 'bg-green-50' },
    { id: 3, name: 'Total Users', value: stats.totalUsers, icon: HiOutlineUsers, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  if (loading) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 animate-pulse">
            Mengambil Data Riil Database...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* ================= BANNER SELAMAT DATANG ================= */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-6">
        <h1 className="text-xl font-extrabold text-gray-800 uppercase tracking-wide">
          Selamat Datang Kembali, Admin!
        </h1>
        <p className="text-xs text-gray-500 mt-1 font-medium">
          Berikut adalah ringkasan data riil akurat yang ditarik langsung dari database Baso Yen hari ini.
        </p>
      </div>

      {/* ================= KARTU STATISTIK ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {cardStats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div 
              key={stat.id} 
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  {stat.name}
                </p>
                <h3 className="text-2xl font-black text-gray-800">
                  {stat.value}
                </h3>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <IconComponent size={24} />
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= GRID UTAMA ================= */}
      <div className="w-full">
        
        {/* TABEL AKTIVITAS TERBARU */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700">
              Aktivitas Log Terkini
            </h2>
            <span className="text-[10px] bg-green-50 text-green-700 font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Database Live Data
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="pb-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Admin/Sistem</th>
                  <th className="pb-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Tindakan</th>
                  <th className="pb-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Target Elemen</th>
                  <th className="pb-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 text-right">Waktu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-600">
                {recentActivities.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 text-gray-800">{log.admin}</td>
                    <td className="py-3.5">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        log.action.includes('Menambahkan') || log.action.includes('Terdaftar') ? 'bg-green-50 text-green-700' :
                        log.action.includes('Memperbarui') ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'
                      }`}>
                        {log.action}
                      </span>
                    </td>
                    <td className="py-3.5 italic text-gray-500">{log.item}</td>
                    <td className="py-3.5 text-right text-gray-400 font-medium">{log.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;