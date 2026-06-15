import { useState, useEffect } from "react";
import { HERO_PRODUCTS } from "./BestSellerData.jsx";

const HeroProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fitur Autoplay
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === HERO_PRODUCTS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_PRODUCTS.length - 1 : prev - 1));
  };

  const currentProduct = HERO_PRODUCTS[currentIndex];

  return (
    <section className={`min-h-[calc(100vh-76px)] flex items-center transition-all duration-1000 ease-in-out ${currentProduct.bgClass} px-6 md:px-16 py-12 md:py-0 relative overflow-hidden`}>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full z-10">

        {/* SISI KIRI: TEKS INFORMASI */}
        <div className={`space-y-5 ${currentProduct.textColor} text-center md:text-left`}>
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block border border-white/5 shadow-inner">
            BEST SELLER | ⭐⭐⭐⭐⭐
          </span>
          <h1 className="text-3xl md:text-6xl font-black tracking-tight leading-none uppercase drop-shadow-md">
            {currentProduct.nama}
          </h1>
          <p className="text-sm md:text-base opacity-80 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed">
            {currentProduct.deskripsi}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#produk"
              className="bg-sulfur text-primary font-extrabold text-xs tracking-wider uppercase px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all text-center"
            >
              Beli Sekarang
            </a>
          </div>
        </div>

        {/* SISI KANAN: VISUAL GAMBAR */}
        <div className="flex justify-center items-center relative h-64 md:h-[480px]">
          {/* Efek Spotlight Lingkaran Belakang */}
          <div className="absolute w-56 h-56 md:w-96 md:h-96 bg-sulfur/15 rounded-full blur-3xl animate-pulse"></div>

          {/* Render Gambar Produk */}
          {currentProduct.gambar && (
            <img
              src={currentProduct.gambar}
              alt={currentProduct.nama}
              className="h-full w-auto object-contain z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.65)] transform hover:scale-105 hover:rotate-2 transition-all duration-700 select-none"
            />
          )}
        </div>

      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all z-20 border border-white/10"
        aria-label="Previous Slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all z-20 border border-white/10"
        aria-label="Next Slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {HERO_PRODUCTS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-sulfur" : "w-2 bg-white/30 hover:bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroProduct;