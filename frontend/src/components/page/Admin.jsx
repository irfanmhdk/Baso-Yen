import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Admin/Sidebar';
import Footer from '../Admin/Footer'; 

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex text-black overflow-x-hidden">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className={`flex-grow flex flex-col min-h-screen transition-all duration-300 ${
        sidebarOpen ? 'md:pl-72' : 'md:pl-12'
      }`}>
        
        <main className="flex-grow p-6 md:p-8">
          <Outlet />
        </main>

        <Footer />

      </div>
    </div>
  );
};

export default Admin;