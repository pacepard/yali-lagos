import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/_data/site-config";
import { useFredoka, useNunitoSans } from "@/_data/fonts";
import FooterSection from "@/components/custom/footer";
import { HeroHeader } from "@/components/custom/header";
import ConnectWithUs from "@/components/blocks/connect-with-us";


export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      suppressHydrationWarning
         className={`${useNunitoSans.className}   ${useFredoka.variable} ${useNunitoSans.variable} antialiased`}
      >
    
        <HeroHeader/>
        
        {children}

        <ConnectWithUs/>



  <FooterSection/>


        
      </body>
    </html>
  );
}
