import authConfig from "@/auth.config"
import { db } from "@/lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/auth/login",
  },
  session: { strategy: "jwt" },
  ...authConfig
})
