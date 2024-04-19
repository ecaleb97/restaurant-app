import { navLinks } from "@/lib/constants";
import Link from "next/link";

interface NavLinksMobileProps {
  onClick: () => void;
}

export function NavLinksMobile({ onClick }: NavLinksMobileProps) {
  return (
    <ul className="max-w-[1500px] mx-auto space-y-4 px-4 xl:px-0">
      {
        navLinks.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              onClick={onClick}
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