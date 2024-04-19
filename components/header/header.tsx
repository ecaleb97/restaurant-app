"use client"

import { CloseIcon } from "@/components/icons/close"
import { Logo } from "@/components/icons/logo"
import { MenuIcon } from "@/components/icons/menu"
import { ShoppingBagIcon } from "@/components/icons/shopping-bag"
import { NavLinksMobile } from "@/components/nav/nav-links-mobile"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { useState } from "react"


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
      className={cn(`bg-lightGray px-4
      fixed top-0 left-0 right-0 z-50`, {
        "bg-[#2e2925] text-white": isMenuOpen,
      })}
    >
      <div className="flex justify-between items-center
      max-w-[1500px] mx-auto">
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
      </div>
      
      {isMenuOpen && (
        <nav className="fixed left-0 right-0 top-16 bottom-0 bg-[#2e2925]
        py-6 px-4 transition-all snap-y snap-mandatory z-50 overflow-scroll">
          <NavLinksMobile onClick={() => setIsMenuOpen(false)} />
          {children}
        </nav>
      )}
    </header>
  )
}