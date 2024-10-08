import { getRestaurants } from "@/lib/data"

export async function RestaurantList() {
  const restaurants = await getRestaurants()

  return (
    <>
      <ul className="max-w-[1500px] mx-auto my-12 px-4 space-y-6 xl:px-0">
        {
          restaurants.map(restaurant => (
            <li key={restaurant.id} className="space-y-2">
              <strong className="font-semibold text-sm">{restaurant.name}</strong>
              <p className="font-light text-xs">
                {restaurant.address}: {" "}
                <span className="tracking-[0.1em]">
                  {restaurant.phone}
                </span>
              </p>
            </li>
          ))
        }
      </ul>
    </>
  )
}