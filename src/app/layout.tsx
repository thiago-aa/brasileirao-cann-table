import type { Metadata } from "next";
import { Space_Grotesk, Chakra_Petch } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const spaceGrotesk = Space_Grotesk({
  variable: "--font-primary",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "700"]  
});

export const metadata: Metadata = {
  title: "Brasileirão Cann table",
  description: "Brasileirão Cann table - Por escala de pontos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${chakraPetch.variable} h-full antialiased`}
    >
    <body className="min-h-full flex flex-col">
      {children}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-8737Z3D89Y`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8737Z3D89Y');
        `}
      </Script>  
    </body>
    </html>
  );
}
