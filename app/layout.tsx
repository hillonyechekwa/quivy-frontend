import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const inriaSans = Inria_Sans({
  weight: ["300", "400", "700"],
  variable: "--font-inria-sans",
  subsets: ["latin"],
  display: "swap"
})

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Quivy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inriaSans.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
