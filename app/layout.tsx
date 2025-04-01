import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import CustomTrigger from "@/components/CustomTrigger";
import { AppSidebar } from "@/components/AppSidebar";
import "./globals.css";
import { verifySession } from "@/utils/dal";
import Footer from "@/components/Footer";
import { AuthContextProvider } from "@/context/AuthContext";
import AuthNav from "@/components/AuthNav";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isAuth = await verifySession()


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inriaSans.variable} antialiased `}
      >{isAuth ? (
        <AuthContextProvider>
          <SidebarProvider className="overflow-x-hidden">
            <AppSidebar />
            <main className="font-[family-name:var(--font-inria-sans)] relative w-full bg-[#FAFAFA]">
              <div className="flex justify-end items-center w-full relative p-5">
                <AuthNav />
                {/* <CustomTrigger /> */}
              </div>
              {children}
            </main>
          </SidebarProvider>
        </AuthContextProvider>
      ) : (
        <span>
          <main className="font-[family-name:var(--font-inria-sans)] flex-1 min-h-[100vh]">
            {children}
          </main>
          <Footer />
        </span>
      )}
      </body>
    </html>
  );
}
