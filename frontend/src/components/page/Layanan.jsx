import HeroLayanan from "../Layanan/HeroLayanan"
import Bisnis from "../Layanan/Bisnis"
import Lokasi from "../Layanan/Lokasi"
import Delivery from "../Layanan/Delivery"
import Marketplace from "../Marketplace"

const Layanan = () => {
  return (
    <>
        <HeroLayanan />
        <Bisnis />
        <Lokasi />
        <Delivery />
        <Marketplace />
    </>
  )
}

export default Layanan