"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import Link from "next/link"

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

import { newsletterFormSchema } from "@/schemas"

export function NewsletterForm() {
  const form = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      name: "",
      email: "",
    }
  })

  function onSubmit(values: z.infer<typeof newsletterFormSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="Nombre"
                  type="text"
                  className="border-t-0 border-x-0 border-b-button focus:border-x-[1px]
                  focus:border-t-[1px] focus:border-button rounded-none 
                  focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="Email"
                  type="email"
                  className="border-t-0 border-x-0 border-b-button focus:border-x-[1px]
                  focus:border-t-[1px] focus:border-button rounded-none 
                  focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-x-2">
          <Input type="checkbox" className="w-fit h-4 px-0" required />
          <FormLabel htmlFor="terms">
            <Link 
              href={"/politica-privacidad"}
              className="font-light"
            >
              Acepto los términos y condiciones
            </Link>
          </FormLabel>
        </div>        
        <Button 
          type="submit"
          className="bg-button tracking-widest w-full rounded-none hover:bg-button/80"
        >
          Enviar
        </Button>
      </form>
    </Form>
  )
}