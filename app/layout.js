import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/header.jsx";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'
import React from "react";



const inter = Inter({subsets: ["latin"]})

export const metadata = {
  title: "Carrer-web-ai",
  description: "Made by Patricio avila",
};

export default function RootLayout({ children }) {
  return (
<ClerkProvider
appearance={{
   baseTheme: dark,
}}>

<html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <Header />
          <main className="min-h-screen max-padd-container ">
              {children}
            </main>
            <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center ">
              Made by <a href="https://github.com/Avila-Pato">Avila-Pato</a>
            </div>
            </footer>

          </ThemeProvider>
      </body>
    </html>
            </ClerkProvider>
  );
}
