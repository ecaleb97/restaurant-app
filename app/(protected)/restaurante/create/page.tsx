import { CreateRestaurantForm } from "@/components/restaurant/create-form"
import { currentUser } from "@/lib/auth"

export default async function CreateRestaurantPage() {
  const user = await currentUser()

  if (!user) {
    return <p className="mt-20">Access denied</p>
  }

  return (
    <CreateRestaurantForm />
  )
}