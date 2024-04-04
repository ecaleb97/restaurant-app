export const RESTAURANT_NAME = "SUMO";

const EMAIL = "info@sumorestaurante.com"
const PHONE = "91 494 34 11"

export const links = [
  { 
    title: `Sobre ${RESTAURANT_NAME}`, 
    items: [
      {
        name: "Contacto",
        href: "/contacto"
      },
      {
        name: `Abre tu propio ${RESTAURANT_NAME}`,
        href: "/franquicias"
      },
      {
        name: `Trabaja en ${RESTAURANT_NAME}`,
        href: "/trabaja-con-nosotros"
      },
      {
        name: "T: 91 494 34 11",
        href: `tel:${PHONE}`
      },
      {
        name: `E: ${EMAIL}`,
        href: `mailto:${EMAIL}`
      }
    ],
  },
  { 
    title: `Espacio ${RESTAURANT_NAME}`, 
    items: [
      {
        name: "Reservar espacio",
        href: "/reservar-espacio"
      },
      {
        name: "Eventos",
        href: "/eventos"
      },
    ]
  },
  { 
    title: "Más información", 
    items: [
      {
        name: "Política de privacidad",
        href: "politica-privacidad"
      },
      {
        name: "Política de cookies",
        href: "/politica-cookies"
      },
    ]
  },
]

export const navLinks = [
  {
    name: "Restaurantes",
    href: "/restaurantes"
  },
  {
    name: "Pide a Domicilio",
    href: "/pedido-domicilio"
  },
  {
    name: "Blog",
    href: "/blog"
  },
  {
    name: `Abre tu propio ${RESTAURANT_NAME}`,
    href: "/franquicias"
  },
  {
    name: "Reserva",
    href: "/reserva"
  }
]