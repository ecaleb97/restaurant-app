import { RestaurantsCarousel } from "@/components/carousel/carousel"
import { RESTAURANT_NAME } from "@/lib/constants"
import { getRestaurants } from "@/lib/data"
import Image from "next/image"

export async function Restaurants() {
  const restaurants = await getRestaurants()
  const numberOfRestaurants = restaurants.length

  return (
    <main className="mt-24">
      <div className="px-5">
        <h1 className="text-5xl text-balance font-bold">
        ¿Dónde está mi {`${RESTAURANT_NAME}`}? ¡Que yo lo vea!
        </h1>
        <p className="my-5 text-balance text-xl leading-8 xl:text-2xl
        xl:leading-10">
        Localiza tu {`${RESTAURANT_NAME}`} más cercano, 
        ¡hay {`${numberOfRestaurants}`} en Madrid!
        </p>
        <Image 
          src={"https://sumorestaurante.com/wp-content/uploads/2020/05/gif400b.gif"}
          alt="Sushi"
          width={350}
          height={350}
          quality={80}
        />
      </div>
      <div className="px-5">
        <RestaurantsCarousel restaurants={restaurants} />
      </div>
    </main>
  )
}