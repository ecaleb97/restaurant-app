import { db } from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";

export async function getRestaurantByName(name: string) {
  noStore();

  try {
    const restaurant = await db.restaurant.findFirst({
      where: {
        name: name
      }
    });

    return restaurant;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to find restaurant");
  }
}

export async function getRestaurants() {
  noStore();

  try {
    const restaurants = await db.restaurant.findMany();
    return restaurants;
  } catch(error) {
    console.error(error);
    throw new Error("Failed to fetch restaurants");
  }
}