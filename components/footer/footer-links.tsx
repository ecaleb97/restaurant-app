import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FooterLinksProps {
  name: string;
  href: string;
}

export function FooterLink({ name, href }: FooterLinksProps) {
  return (
    <Button asChild variant={"link"} className="p-0">
      <Link 
        href={href} 
        className={cn(`font-extralight text-sectionHeading/70 hover:text-gray-800/70
          h-8`, 
        name.startsWith("T:") && "pt-5",)} 
      >
        {name}
      </Link>
    </Button>
  )
}