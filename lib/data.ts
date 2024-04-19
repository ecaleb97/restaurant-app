import "server-only";

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

export async function getUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        id: id
      }
    })
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to find user");
  }
}

export async function getAccountByUserId(userId: string) {
  try {
    const account = await db.account.findFirst({
      where: {
        userId: userId
      }
    })
    return account;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to find account");
  }
}