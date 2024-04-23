import { RestaurantsCarousel } from "@/components/carousel/carousel"
import { RESTAURANT_NAME } from "@/lib/constants"
import { getRestaurantByName, getRestaurants } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export async function Restaurants() {
  const restaurants = await getRestaurants()
  const restaurantsInMadrid = restaurants.filter(
    restaurant => restaurant?.state === "Madrid"
  )
  console.log(restaurantsInMadrid)
  const numberOfRestaurantsInMadrid = restaurantsInMadrid.length
  const restaurantByName = await getRestaurantByName("SUMO Heron Diversia")

  return (
    <main className="mt-24">
      <div className="px-5">
        <h1 className="text-5xl text-balance font-bold">
        ¿Dónde está mi {`${RESTAURANT_NAME}`}? ¡Que yo lo vea!
        </h1>
        <p className="my-5 text-balance text-xl leading-8 xl:text-2xl
        xl:leading-10">
        Localiza tu {`${RESTAURANT_NAME}`} más cercano, 
        ¡hay {`${numberOfRestaurantsInMadrid}`} en Madrid!
        </p>
        <Image 
          src={"https://sumorestaurante.com/wp-content/uploads/2020/05/gif400b.gif"}
          alt="Sushi"
          width={350}
          height={350}
          quality={80}
        />
      </div>
      <div className="my-8">
        <Image
          src={"https://sumorestaurante.com/wp-content/uploads/2023/07/357656002_581674144125116_7022014993314425274_n.jpg"}
          alt="Sushi"
          width={350}
          height={350}
          quality={80}
          className="w-full"
        />
        <div className="bg-[#f4f4f4]">
          <h2 className="p-5 text-5xl font-semibold">
            {restaurantByName?.name}
          </h2>
          <p className="px-5 leading-8 text-xl font-light">
            {RESTAURANT_NAME} Restaurante llega Heron Diversia.
            Descubre el mejor buffet asiático de nuestro país,
            y en el que podrás pedir los más de 100 platos de 
            nuestra carta sin más límite que el tuyo propio.
            Nigiris, makis, rolls, ensaladas, sopas, arroces,
            entrantes y calientes o los pokes componen nuestra carta,
            que se completa por supuesto, con nuestros postres caseros.
          </p>
          <ul className="p-5 flex flex-col gap-y-6 text-lg font-extralight">
            <li>
              - {RESTAURANT_NAME}: L a D 13:00 a 16:30 y 20:00 a 00:00
            </li>
            <li className="flex flex-col text-button">
              - {restaurantByName?.address}
              <span className="pl-3">
                {restaurantByName?.city}, {restaurantByName?.state}
              </span>
            </li>
            <li className="text-button">
              - {restaurantByName?.phone}
            </li>
            <li className="text-button">
              <Link href="/reservas">
                - Reservar
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-5">
        <RestaurantsCarousel restaurants={restaurants} />
      </div>
    </main>
  )
}