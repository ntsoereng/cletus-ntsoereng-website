import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/global/Navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import Footer from "@/components/global/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cletus Ntsoereng - Web Developer, Software Engineer",
  description: "Web Developer, Software Engineer, and Data Guy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} selection:bg-fuchsia-600 selection:text-white bg-whiteColor dark:bg-darkColor`}
      >
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          enableSystem={false}
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
