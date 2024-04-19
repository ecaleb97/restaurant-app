import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { getRestaurants } from "@/lib/data";

interface RestaurantProps {
  children: React.ReactNode;
}

export async function RestaurantsDelivery({ children }: RestaurantProps) {
  const restaurants = await getRestaurants()

  return (
    <Accordion type="single" collapsible className="w-full mx-auto">
      {
        restaurants.map((restaurant, index) => (
          <AccordionItem value={`item-${index}`} key={restaurant.id}>
            <AccordionTrigger className="hover:text-button pb-6 text-xl font-light">
              {restaurant.name}
            </AccordionTrigger>
            <AccordionContent className="text-white flex flex-col gap-y-6">
              {children}
            </AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}