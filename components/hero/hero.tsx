import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@/components/icons/arrow-right"
import { ImagesCarousel } from "@/components/carousel/carousel"

export function HeroSection() {
  return (
    <section className="mt-20">
      <div className="px-5 sm:px-10 md:px-20">
        <h1 className="font-bold text-pretty text-5xl leading-tight">
        Un concepto diferente de Menu Buffet {" "}
        </h1>
        <h1 className="text-5xl font-extralight py-2 leading-tight">
        o tus platos favoritos a la carta
        </h1>
        <Image
          src="https://sumorestaurante.com/wp-content/uploads/2020/05/sumored2.jpg"
          alt="Sushi"
          width={350}
          height={350}
          quality={80}
          className="w-full"
        />
      </div>
      
      <div className="my-5 px-5 sm:px-10 md:px-20">
        <h2 className="text-3xl font-semibold text-pretty leading-10">
        Ponte hasta el ramen! Mas de 100 platos sin limites.
        </h2>
        <p className="text-balance text-xl leading-8 py-5">
          Disfruta de toda nuestra carta con una forma original
          y diferente de pedir tus platos. En nuestros restaurantes,
          a traves de las tablets instaladas en las mesas, podrás pedir
          los mas de 100 platos de nuestra carta sin mas limites que el 
          tuyo propio.
        </p>
        <Link 
          href={"/menu"} 
          className="text-button text-xl font-extralight flex items-center gap-x-4"
        >
          <ArrowRightIcon />
          Nuestra carta
        </Link>
        <Image
          src={"https://sumorestaurante.com/wp-content/uploads/2020/05/gif400b.gif"}
          alt="Ramen"
          width={320}
          height={320}
          quality={80}
        />
      </div>
      <div className="bg-lightGray my-14 p-10 sm:px-10 md:px-20">
        <h2 className="text-4xl font-bold text-pretty pb-6 tracking-wide">
          Nuevo SUMO Hero Diversia
        </h2>
        <p className="pb-4 text-balance text-xl leading-8">
          SUMO Restaurante llega a Heron Diversia. Descubre el mejor Buffet
          asiatico de nuestro pais, y en el que podras pedir los mas de 100
          platos de nuestra carta sin mas limite que el tuyo propio.
        </p>
        <p className="pb-6 text-balance text-xl leading-8">
          Nigiris, makis, rolls, ensaladas, sopas, arroces, entrantes y calientes
          o los pokes componen nuestra carta, que se completa por supuesto, con 
          nuestros postres caseros.
        </p>
        <Link 
          href={"/reservas"} 
          className="flex items-center gap-x-4 text-button text-xl font-light"
        >
          <ArrowRightIcon />
          Reservar
        </Link>
      </div>

      <div className="px-5 sm:px-10 md:px-20">
        <h2 className="text-4xl font-bold text-pretty pb-6 tracking-wide">
          ¡Que vienen! ¡Que vienen!
        </h2>
        <p className="text-balance text-xl leading-8">
          El verano mas extrano de nuestra vida empieza con platos nuevos para
          hacernoslo un poco mas facil. Descubrelos ahora y disfruta de ellos en 
          tu SUMO mas cercano!
        </p>
        <ImagesCarousel />
      </div>
      
    </section>
  )
}