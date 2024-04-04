import { z } from "zod";

export const newsletterFormSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
})

export const createRestaurantFormSchema = z.object({
  name: z.string().min(3).max(50),
  address: z.string().min(3).max(100),
  phone: z.string(),
  zip: z.string().length(5),
  city: z.string().min(3).max(50),
  website: z.optional(z.string().url()),
})