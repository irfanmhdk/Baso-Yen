import React from 'react'

const Bisnis = () => {
    return (
        <>
            < section id="bisnis" className="bg-trey flex items-center px-6 md:px-16 pt-16 md:pt-24 relative overflow-hidden border-t border-gray-100" >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full relative z-10">
                    <div className="space-y-6 text-center order-2 md:order-1">
                        <span className="text-xs md:text-xl font-bold tracking-widest text-gold uppercase bg-gold/10 px-4 py-1.5 rounded-full inline-block">
                            BUSINESS TO CUSTOMER
                        </span>
                        <p className='text-left'>
                            Baso Yen merintis usaha dengan menjual produk berkualitas, bergizi dan higienis untuk sajian bagi keluarga di rumah. Soal kehalalan tidak perlu diragukan lagi karena produk dari Baso Yen sudah memiliki sertifikat Halal MUI.
                        </p>
                    </div>
                    <div className="items-center text-center relative space-y-6 h-auto order-1 md:order-2">
                        <span className="text-xs md:text-xl font-bold tracking-widest text-primary uppercase bg-primary/10 px-4 py-1.5 rounded-full inline-block">
                            BUSINESS TO BUSINESS
                        </span>
                        <p className='text-left'>
                            Baso Yen dipercaya menjadi supplier bakso, mie basah, sosis dan kulit pangsit. Mulai dari kedai, resto, cafe hingga hotel di pulau Jawa. Pabrik Baso Yen siap untuk memenuhi kebutuhan usaha Anda mulai dari usaha kecil hingga partai besar.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bisnis