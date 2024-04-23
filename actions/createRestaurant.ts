"use server"

import { currentUser } from "@/lib/auth"
import { getRestaurantByName } from "@/lib/data"
import { db } from "@/lib/db"
import { createRestaurantFormSchema } from "@/schemas"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

export async function createRestaurant(values: z.infer<typeof createRestaurantFormSchema>) {
  const validateFields = createRestaurantFormSchema.safeParse(values)
  const user = await currentUser()

  if (!user) {
    throw new Error("You must be signed in to perform this action")
  }

  if (!validateFields.success) {
    throw new Error("Invalid fields")
  }

  const { 
    name, 
    address, 
    phone, 
    zip, 
    city,
    state,
    website 
  } = validateFields.data

  const restaurantName = await getRestaurantByName(name)

  if (restaurantName) {
    throw new Error("Restaurant already exists")
  }

  try {
    await db.restaurant.create({
      data: {
        name,
        address,
        phone,
        zip,
        city,
        state,
        website,
      }
    })
  } catch (error) {
    console.error(error)
    return {
      message: "Failed to create restaurant"
    }
  }
  revalidatePath("/restaurantes")
  redirect("/restaurantes")
}