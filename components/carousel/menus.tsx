"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { usePlugin } from "@/hooks/usePlugin";

import Image from "next/image";


export function MenusCarousel() {
  const plugin = usePlugin()

  return (
    <Carousel 
      className="my-6"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {
          Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Image
                src={"https://sumorestaurante.com/wp-content/uploads/2020/05/Nigiri_GyuFoie-768x768.jpg"}
                alt="Nigiri GyuFoie"
                width={500}
                height={500}
                className="object-cover"
              />
              <h3 
                className="font-semibold text-2xl text-button py-4 px-2"
              >
                  Nigiri Gyu Foie
              </h3>
              <span 
                className="text-button text-2xlxl font-extralight px-2"
              >
                Nigiri
              </span>
            </CarouselItem>
          
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}