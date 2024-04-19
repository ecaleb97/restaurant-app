import { RestaurantsDelivery } from "@/components/accordion/restaurants-delivery"
import { RESTAURANT_NAME } from "@/lib/constants"

import Image from "next/image"
import Link from "next/link"

export default function PedidoDomicilioPage() {
  return (
    <main className="mt-24 max-w-[1300px] mx-auto">
      <div className="px-5">
        <h1 className="text-5xl font-bold text-pretty leading-tight
        xl:text-7xl">
          Selecciona tu restaurante y disfruta
          de {`${RESTAURANT_NAME}`} desde casa
        </h1>
        <p className="text-2xl pt-4 leading-10">
          Tambien puedes venir a recogerlo, como prefieras!
        </p>
      </div>
      <Image 
        src={"https://sumorestaurante.com/wp-content/uploads/2020/05/cuzco2018_117-768x512.jpg"}
        alt="Sushi"
        width={300}
        height={300}
        className="w-full mt-4 lg:hidden"
      />
      <section className="mt-10">
        <RestaurantsDelivery>
          <div className="bg-[#00A183] py-2 text-center mt-4 cursor-pointer">
            <Link href={""}>Glovo</Link>
          </div>
          <div className="bg-[#0AC267] py-2 text-center mb-4 cursor-pointer">
            <Link href={""}>Uber Eats</Link>
          </div>
        </RestaurantsDelivery>
      </section>
    </main>
  )
}