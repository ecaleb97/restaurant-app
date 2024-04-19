"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useTransition } from "react"

import { CardWrapper } from "@/components/card/card-wrapper"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { createRestaurant } from "@/actions/createRestaurant"
import { createRestaurantFormSchema } from "@/schemas"

export function CreateRestaurantForm() {
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof createRestaurantFormSchema>>({
    resolver: zodResolver(createRestaurantFormSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      zip: "",
      city: "",
      website: "",
    },
  })

  function onSubmit(values: z.infer<typeof createRestaurantFormSchema>) {
    console.log(values)
    startTransition(() => {
      createRestaurant(values)
        .then(() => {
          console.log("Restaurant created")
        })
    })
  }

  return (
    <CardWrapper title="Crear Restaurante">
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder="SUMO Sushi"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Direccion</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder="c/ Paseo de la Castellana, 123"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefono</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder="912345678"
                      type="tel"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Codigo Postal</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder="28003"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cuidad</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder="Madrid"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder="www.sumorestaurante.com"
                      type="url"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isPending}>
          Crear Restaurante
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}