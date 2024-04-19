import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { RestaurantList } from "@/components/restaurant/restaurants-list";
import { raleway } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <Header>
          <RestaurantList />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}