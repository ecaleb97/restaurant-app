import { RestaurantsDelivery } from "@/components/accordion/restaurants-delivery";
import { RESTAURANT_NAME } from "@/lib/constants";

import Image from "next/image";

export function Reservas() {
  return (
    <main className="mt-20 max-w-[1300px] mx-auto xl:mt-32">
      <div className="px-5 sm:px-10 md:px-20 mb-10">
        <h1 className="font-bold text-pretty text-5xl leading-tight xl:text-8xl">
          No te lo pienses más y reserva porque... ¡Ya toca {`${RESTAURANT_NAME}`}!
        </h1>
        <p className="text-balance text-xl leading-8 py-5 xl:py-10
        xl:text-2xl xl:leading-10">
          Reserva ahora porque te aseguramos que las mesas estarán mas llenas
          que en la foto.
        </p>
        <Image
          src={"https://sumorestaurante.com/wp-content/uploads/2020/05/3cuzco-768x512.jpg"}
          alt="Sushi"
          width={400}
          height={400}
          quality={80}
          className="w-full"
        />
      </div>

      <RestaurantsDelivery>
        <div className="text-black">Hola</div>
      </RestaurantsDelivery>
    </main>
  )
}