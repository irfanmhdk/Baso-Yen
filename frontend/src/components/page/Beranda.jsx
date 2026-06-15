import Hero from "../Beranda/Hero"
import Tentang from "../Beranda/Tentang"
import HeroProduct from "../HeroProduk"
import Klien from "../Klien"
import Sertifikat from "../Sertifikat"
import Testimoni from "../Testimoni"

const Beranda = () => {
  return (
    <>
        <Hero />
        <Tentang />
        <Sertifikat />
        <HeroProduct />
        <Testimoni />
        <Klien />
    </>
  )
}

export default Beranda