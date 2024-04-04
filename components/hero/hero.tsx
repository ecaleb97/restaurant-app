import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="mt-20">
      <div>
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
        />
      </div>
      
      <div className="my-5">
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
          className="text-button text-xl font-extralight"
        >
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
      
    </section>
  )
}