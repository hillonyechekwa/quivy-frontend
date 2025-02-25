import type { Metadata } from "next";
import { Inria_Sans} from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import "./globals.css";
import { verifySession } from "@/utils/dal";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isAuth = await verifySession()


  return (
    <html lang="en">
      <body
        className={`${inriaSans.variable} antialiased flex flex-col`}
      >{isAuth && (
        <SidebarProvider>
          <AppSidebar />
            <main className="font-[family-name:var(--font-inria-sans)]">
            {children}
          </main>
        </SidebarProvider>
      )
        }
        <main className="font-[family-name:var(--font-inria-sans)] flex-1 min-h-[100vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
