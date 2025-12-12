import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Alma Libre | Tu cuerpo se relaja, tu alma se libera",
  description: "Spa de bienestar en Quito - Masajes, tratamientos y relajación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body className={`${lato.className} min-h-screen font-sans text-gray-800 bg-white selection:bg-brand-gold selection:text-white antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": "Alma Libre - Spa & Wellness",
              "image": "https://picsum.photos/id/65/800/600",
              "@id": "https://almalibrespa.com",
              "url": "https://almalibrespa.com",
              "telephone": "+593962721748",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "La Josefina, calle Principal Ambar y Pasaje Jade",
                "addressLocality": "Carcelén, Quito",
                "addressRegion": "Pichincha",
                "postalCode": "170303",
                "addressCountry": "EC"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -0.1025,
                "longitude": -78.4800
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "19:00"
                }
              ],
              "priceRange": "$$",
              "servesCuisine": "Masajes Terapéuticos, Relax"
            })
          }}
        />
        {children}
      </body>
    </html >
  );
}
