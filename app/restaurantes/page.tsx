import { Restaurants } from "@/components/restaurant/restaurant"
import { currentUser } from "@/lib/auth"

export default async function RestaurantPage() {
  const user = await currentUser()
  if (user) {
    console.log("User is logged in")
  }

  return (
    <main className="max-w-[1500px] mx-auto">
      <Restaurants />
    </main>
  )
}