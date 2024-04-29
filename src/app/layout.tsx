import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat
({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: "Marcus",
  description: "Marcus's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
