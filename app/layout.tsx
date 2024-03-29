import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import MainHeader from "@/components/main-header"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Tasty Trove",
  description: "Discover, Share, Savor – Your Culinary Adventure Awaits!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
