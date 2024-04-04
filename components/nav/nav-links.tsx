import { navLinks } from "@/lib/constants";
import Link from "next/link";

export function NavLinks() {
  return (
    <ul className="space-y-4 px-4">
      {
        navLinks.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              className="text-4xl hover:text-button hover:underline
              font-semibold"
            >
              {link.name}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}