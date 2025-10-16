import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BlogIA | Noticias y articulos",
    template: "%s | BlogIA",
  },
  description:
    "Blog de noticias y artículos sobre Tecnologia, ciencia, deporte y salud. Diseñado por @juandizl.",
  keywords: [
    "inteligencia artificial",
    "noticias de IA",
    "neurociencia",
    "biomarcadores cerebrales",
    "IA médica",
    "tecnología",
    "BlogIA",
    "artículos de ciencia",
  ],
  authors: [{ name: "@juandizl" }],
  creator: "@juandizl",
  openGraph: {
    title: "BlogIA | Noticias y articulos",
    description:
      "Explora los avances más recientes de la inteligencia artificial, tecnologia, ciencia  y salud.",
    url: "https://news-juandizl.vercel.app/",
    siteName: "BlogIA",
    images: [
      {
        url: "/images/PortadaBlogIA.png",
        width: 1200,
        height: 630,
        alt: "BlogIA portada",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta
          name="google-site-verification"
          content="53Hnodfn-u4-7b6_FvgaTxJOIHFwVaCo3tHp1WvIhVo"
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5114315414587083" crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
