import { SectionHeading } from "@/components/headings/section-heading"
import { FooterLink } from "@/components/footer/footer-links"
import { links } from "@/lib/constants"
import { NewsletterForm } from "@/components/newsletter/create-form"

export function Footer() {
  return (
    <footer className="px-4 sm:px-10 md:px-20 w-full py-5 lg:pb-20">
      <h2 className="text-center my-20 text-sectionHeading
      text-3xl font-bold">¡Hasta luego teriyaki!</h2>
      <section className="sm:mx-auto max-w-[1500px] w-fit px-6
      grid gap-6 sm:gap-16 lg:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <SectionHeading title="Recibe las mejores promociones" />
          <NewsletterForm />
        </div>
        {
          links.map(link => (
            <ul key={link.title}>
              <SectionHeading title={link.title} />
              {
                link.items.map(item => (
                  <li key={item.href}>
                    <FooterLink name={item.name} href={item.href} />
                  </li>
                ))
              }
            </ul>
          ))
        }
      </section>
    </footer>
  )
}