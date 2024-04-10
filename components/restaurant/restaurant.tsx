import { getRestaurants } from "@/lib/data"

export async function Restaurants() {
  const restaurants = await getRestaurants()

  return (
    <main className="mt-20">
      <h1>Restaurants Page</h1>
      {
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {restaurant.name}
            </li>
          ))}
        </ul>
      }
    </main>
  )
}