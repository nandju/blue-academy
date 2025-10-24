import type { Metadata } from "next";
import { Geist, Geist_Mono, Permanent_Marker, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/landing/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const permanentMaker = Permanent_Marker({
  variable: "--permanent-maker",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  
});

export const metadata: Metadata = {
  title: "BLUE - Lutte contre la pollution plastique",
  description: "Rejoignez BLUE dans notre mission de lutte contre la pollution plastique par l'action, l'éducation et l'innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${permanentMaker.variable} antialiased`}
      >
        <div className="font-permanentMaker max-w-screen-2xl mx-auto ">
            <Navbar />
             {children}
             
        </div>
      </body>
    </html>
  );
}
