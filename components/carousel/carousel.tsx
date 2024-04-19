"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { ArrowRightIcon } from "@/components/icons/arrow-right"
import { MinusIcon } from "@/components/icons/minus"
import { Restaurant } from "@/lib/types.d"
import { usePlugin } from "@/hooks/usePlugin"

import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

import Link from "next/link"


interface RestaurantsCarouselProps {
  restaurants: Restaurant[]
}

export function RestaurantsCarousel({ restaurants }: RestaurantsCarouselProps) {
  const plugin = usePlugin()

  return (
    <Carousel 
      className="my-10 w-full mx-auto"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {restaurants.map(restaurant => (
          <CarouselItem key={restaurant.id}>
            <div className="flex flex-col items-start gap-y-5">
              <h2 className="text-2xl mt-2 font-bold">{restaurant.name}</h2>
              <ul className="flex flex-col gap-y-3">
                <li className="flex items-center gap-x-2 font-extralight text-button">
                  <MinusIcon />
                  <a>
                    {restaurant.address}
                  </a>
                </li>
                <li className="flex items-center gap-x-2 font-extralight text-button">
                  <MinusIcon />
                  <a 
                    className="tracking-widest" 
                    href={`tel:${restaurant.address}`}
                  >
                    {restaurant.phone}
                  </a>
                </li>
              </ul>
              <Link 
                href={""} 
                className="flex gap-x-2 items-center text-button
                text-xl font-extralight"
              >
                <ArrowRightIcon />
                Reservar
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}