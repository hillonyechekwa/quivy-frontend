"use client"



import { usePathname } from "next/navigation"
import { ReactNode, useContext, useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppSidebar } from "@/components/AppSidebar"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
// import CustomTrigger from "@/components/CustomTrigger";
import Footer from "@/components/Footer"
import { AuthContext } from "@/context/AuthContext"
import AuthNav from "@/components/AuthNav"



interface AppLayoutProps {
    children: ReactNode
}

const EXCLUDED_ROUTES = ["/auth/signin", "/auth/signup","/auth/verification",  "/", "/auth/forgotpassword", "/auth/resetpassword", "/results/loss", "/results/win"]

export default function AppLayout({ children }: AppLayoutProps) {
    
    const pathname = usePathname()
    const authContext = useContext(AuthContext)


    if (!authContext) {
        throw new Error("AuthContext is undefined. Ensure that AuthContextProvider is wrapping the component tree.")
    }

    const { isAuthenticated, isLoading } = authContext

    const shouldHideSidebarAndNav = !isAuthenticated || isLoading || EXCLUDED_ROUTES.includes(pathname)

    if (isLoading) return <div>...loading</div>


    return shouldHideSidebarAndNav ? (
        <>
            <main className="font-[family-name:var(--font-inria-sans)] flex-1 min-h-[100vh]">
                {children}
            </main>
            <Footer />
        </>
    ) : (
        <SidebarProvider className="overflow-x-hidden">
            <AppSidebar />

            <main className="font-[family-name:var(--font-inria-sans)] relative w-full bg-[#FAFAFA]">
                <div className="flex justify-end items-center w-full relative p-5">
                    <AuthNav />
                </div>
                {children}
            </main>
        </SidebarProvider>
    )

}



export function Providers({children} : {children: ReactNode}){
    const [queryClient] = useState(() => new QueryClient())

    return(
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}