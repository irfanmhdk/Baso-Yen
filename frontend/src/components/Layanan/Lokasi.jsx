import React from 'react';

const Lokasi = () => {
    return (
        <section id='lokasi' className="bg-trey px-6 md:px-16 py-16 md:py-24 relative overflow-hidden border-t border-gray-100 text-black">
            <div className="max-w-6xl mx-auto space-y-12">

                <h1 className="text-center text-3xl md:text-4xl font-black tracking-tight uppercase">
                    LOKASI STORE
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* ================= STORE 1: BASO YEN BKR ================= */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                            <div className="p-2 bg-red-50 text-[#8B0000] rounded-xl shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-extrabold text-lg md:text-xl tracking-tight text-black">Baso Yen BKR</h3>
                                <p className="text-xs text-gray-500 font-medium">Outlet & Pusat Distribusi Utama</p>
                            </div>
                        </div>

                        <div className="w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.380663941945!2d107.59436715541993!3d-6.938890799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8858732dbd7%3A0xc8bfb84042df3b8e!2sBaso%20Yen%20BKR!5e0!3m2!1sid!2sid!4v1781175638445!5m2!1sid!2sid"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Baso Yen BKR"
                            ></iframe>
                        </div>
                    </div>

                    {/* ================= STORE 2: BASO YEN MEATBALL FACTORY ================= */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                            <div className="p-2 bg-red-50 text-[#8B0000] rounded-xl shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-extrabold text-lg md:text-xl tracking-tight text-black">Baso Yen Meatball Factory</h3>
                                <p className="text-xs text-gray-500 font-medium">Pusat Produksi & Penjualan Resmi</p>
                            </div>
                        </div>

                        <div className="w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.402903376433!2d107.58001715541988!3d-6.9084465000000055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e615562b643b%3A0xd3dd8dfb0a2f5cf2!2sBaso%20YEN%20Meatball%20Factory!5e0!3m2!1sid!2sid!4v1781175659988!5m2!1sid!2sid"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Baso Yen Meatball Factory"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Lokasi;