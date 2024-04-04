"use server"

import { z } from "zod"
import { db } from "@/lib/db"
import { getRestaurantByName } from "@/lib/data"
import { createRestaurantFormSchema } from "@/schemas"

export async function createRestaurant(values: z.infer<typeof createRestaurantFormSchema>) {
  const validateFields = createRestaurantFormSchema.safeParse(values)

  if (!validateFields.success) {
    throw new Error("Invalid fields")
  }

  const { name, address, phone, zip, city, website } = validateFields.data

  const restaurantName = await getRestaurantByName(name)

  if (restaurantName) {
    throw new Error("Restaurant already exists")
  }

  try {
    const restaurant = await db.restaurant.create({
      data: {
        name,
        address,
        phone,
        zip,
        city,
        website,
      }
    })

    return restaurant
  } catch (error) {
    console.error(error)
    throw new Error("Failed to create restaurant")
  }
}