import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay";

export function usePlugin() {
  const plugin = useRef(Autoplay({
    delay: 2000,
    stopOnInteraction: true
  }))
  return plugin
}