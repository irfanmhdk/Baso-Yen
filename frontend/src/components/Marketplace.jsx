import React from 'react'
import assets from '../assets/assets-produk'

const Marketplace = () => {
    return (
        <>
            <section id='market' className="bg-trey shadow-xl px-6 md:px-16 py-10 text-black">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Sebelah Kiri: Teks */}
                        <div className="text-center md:text-left space-y-1">
                            <h1 className='text-2xl'>MARKETPLACE</h1>
                            <h4 className="font-extrabold text-base text-black">Lebih Mudah Belanja via Marketplace</h4>
                            <p className="text-xs text-gray-500 font-medium">Semua produk premium di atas juga tersedia resmi di toko online kesayangan Anda.</p>
                        </div>

                        {/* Sebelah Kanan: Logo Marketplace */}
                        <div className="flex items-center gap-4 shrink-0">
                            <a
                                href="https://shopee.co.id/miebasososisyen?smtt=9&uls_trackid=9f0ab64e3c70&utm_campaign=s149466168_ss_id_ig00_lpbasoyen&utm_content=lpbasoyen&utm_medium=seller&utm_source=instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 border border-gray-100 rounded-xl bg-orange-50/30 hover:bg-orange-50 hover:border-orange-200 transition-all font-bold text-xs text-[#EE4D2D] tracking-wide flex items-center gap-2 shadow-sm"
                            >
                                <img src={assets.photo.shopee} className="w-50 h-auto" alt="" />
                            </a>
                            <a
                                href="https://www.tokopedia.com/baso-yen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 border border-gray-100 rounded-xl bg-green-50/30 hover:bg-green-50 hover:border-green-200 transition-all font-bold text-xs text-[#03AC0E] tracking-wide flex items-center gap-2 shadow-sm"
                            >
                                <img src={assets.photo.tokopedia} className="w-50 h-auto" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Marketplace