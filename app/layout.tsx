import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drycool Systems - Industrial Chiller Manufacturer",
  description:
    "Buy industrial chillers including screw chiller, scroll chiller, air-cooled, water-cooled, and inverter chillers. Leading manufacturer in India and worldwide.",
  keywords:
    "industrial chillers, screw chiller, scroll chiller, air-cooled chiller, water-cooled chiller, inverter chiller",
  authors: [{ name: "Drycool Systems" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.drycoolchillers.com",
    siteName: "Drycool Systems",
    title: "Drycool Systems - Industrial Chiller Manufacturer",
    description:
      "Buy industrial chillers including screw chiller, scroll chiller, air-cooled, water-cooled, and inverter chillers.",
    images: [
      {
        url: "https://www.drycoolchillers.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-10-21-at-5.32.49-PM.jpeg",
        width: 640,
        height: 640,
        alt: "Drycool Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@drycoolchiller",
    title: "Drycool Systems - Industrial Chiller Manufacturer",
    description:
      "Buy industrial chillers including screw chiller, scroll chiller, air-cooled, water-cooled, and inverter chillers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
