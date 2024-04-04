"use client"

import { Logo } from "@/components/icons/logo"
import { CloseIcon } from "@/components/icons/close"
import { ShoppingBagIcon } from "@/components/icons/shopping-bag"
import { MenuIcon } from "@/components/icons/menu"
import Link from "next/link"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { NavLinks } from "@/components/nav/nav-links"

interface RestaurantProps {
  children: React.ReactNode;
}


export function Header({ children }: RestaurantProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <header 
      className={cn(`bg-gray-300/85 flex justify-between items-center px-4
      fixed top-0 left-0 right-0 z-50 h-16`, {
        "bg-[#2e2925] text-white": isMenuOpen,
      })}
    >
      <div className="w-fit">
        <Link href={"/"}><Logo /></Link>
      </div>
      <div className="flex gap-x-6">
        <Link href={"/menu"}>
          <ShoppingBagIcon />
        </Link>
        <button onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="fixed left-0 right-0 top-16 bottom-0 bg-[#2e2925]
        py-6 px-4 transition-all snap-y snap-mandatory z-50 overflow-scroll">
          <NavLinks />
          {children}
        </nav>
      )}
    </header>
  )
}