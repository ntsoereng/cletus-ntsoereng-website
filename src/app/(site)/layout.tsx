import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/global/Navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import Footer from "@/components/global/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://cletusntsoereng.com"),
  title: {
    default: "Cletus Ntsoereng — Web Developer",
    template: "%s — Cletus Ntsoereng",
  },
  description:
    "Web developer designing and building clear, fast, accessible websites for ambitious businesses and people.",
  openGraph: {
    title: "Cletus Ntsoereng — Web Developer",
    description:
      "Strategy, design, and frontend development for websites that move businesses forward.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          enableSystem
        >
          <Navbar />
          {children}
          <Footer />
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
