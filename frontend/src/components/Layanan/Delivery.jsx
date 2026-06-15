import React from 'react';
import assets from '../../assets/assets-produk';

const Delivery = () => {
    return (
        <section id='delivery' className="bg-primary relative pt-40 md:pt-50 pb-40 md:pb-50 text-black font-sans">

            {/* ==================== LENGKUNGAN ATAS ==================== */}
            <div className="absolute top-0 left-0 w-full leading-[0] z-0">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[60px] md:h-[140px]"
                    fill="#FDFBF7"
                >
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1095,2.09,1200,43.71V0Z"></path>
                </svg>
            </div>

            {/* KONTEN UTAMA */}
            <div className="mx-auto w-full relative z-10 px-4 max-w-6xl">

                {/* JUDUL */}
                <div className="text-center space-y-2 mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white drop-shadow-sm md:drop-shadow-none">
                        DELIVERY
                    </h2>
                    <p className="text-xs md:text-sm font-medium text-red-100 md:text-gray-200 max-w-md mx-auto">
                        Pesan langsung menu favoritmu melalui layanan pengiriman online resmi kami.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 items-start justify-center">

                    {/* ================= 1. GO FOOD ================= */}
                    <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center space-y-4 bg-white p-5 rounded-2xl shadow-md max-w-sm mx-auto w-full">
                        <div className="h-16 md:h-20 flex items-center justify-center">
                            <img src={assets.photo.gfood} alt="GoFood" className="max-h-full w-auto object-contain" />
                        </div>

                        <div className="w-full flex flex-col gap-2 pt-2">
                            <a href="https://gofood.co.id/en/bandung/restaurant/mie-baso-sosis-yen-bkr-f2c1dd60-280e-44e4-907e-d5182b660fac"
                                target="_blank" rel="noopener noreferrer"
                                className="w-full bg-primary hover:scale-105 text-white text-xs md:text-sm font-bold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md text-center">
                                BKR Delivery
                            </a>
                            <a href="https://gofood.co.id/en/bandung/restaurant/meatball-factory-by-baso-yen-pasirkaliki-20046216-f86b-44e4-8866-0b20eee99493"
                                target="_blank" rel="noopener noreferrer"
                                className="w-full border-2 border-primary text-primary hover:scale-105 text-xs md:text-sm font-bold py-2 px-4 rounded-xl transition-all duration-200 text-center">
                                Paskal Delivery
                            </a>
                        </div>
                    </div>

                    {/* ================= 2. SHOPEE FOOD ================= */}
                    <div className="col-span-1 flex flex-col items-center text-center space-y-4 bg-white p-5 rounded-2xl shadow-md w-full">
                        <div className="h-16 md:h-20 flex items-center justify-center">
                            <img src={assets.photo.sfood} alt="ShopeeFood" className="max-h-full w-auto object-contain" />
                        </div>

                        <div className="w-full flex flex-col gap-2 pt-2">
                            <a href="" className="w-full bg-gray-500 text-trey text-xs md:text-sm font-bold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md text-center">
                                BKR Delivery
                            </a>
                            <a href="" className="w-full bg-gray-500 text-trey text-xs md:text-sm font-bold py-2 px-4 rounded-xl transition-all duration-200 text-center">
                                Paskal Delivery
                            </a>
                        </div>
                    </div>

                    {/* ================= 3. GRAB FOOD ================= */}
                    <div className="col-span-1 flex flex-col items-center text-center space-y-4 bg-white p-5 rounded-2xl shadow-md w-full">
                        <div className="h-16 md:h-20 flex items-center justify-center">
                            <img src={assets.photo.grfood} alt="GrabFood" className="max-h-full w-auto object-contain" />
                        </div>

                        <div className="w-full flex flex-col gap-2 pt-2">
                            <a href="" className="w-full bg-gray-500 text-trey text-xs md:text-sm font-bold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md text-center">
                                BKR Delivery
                            </a>
                            <a href="" className="w-full bg-gray-500 text-trey text-xs md:text-sm font-bold py-2 px-4 rounded-xl transition-all duration-200 text-center">
                                Paskal Delivery
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full leading-[0] z-0 scale-y-[-1]">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[60px] md:h-[140px]"
                    fill="#FDFBF7"
                >
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1095,2.09,1200,43.71V0Z"></path>
                </svg>
            </div>

        </section>
    );
};

export default Delivery;