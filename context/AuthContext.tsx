"use client"

import {createContext, useState, useEffect, ReactNode}  from "react"


import { verifySession } from "@/utils/dal"

type User = {
    id: string
    email: string
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean
    isLoading: boolean
    refreshAuth: () => Promise<void>
}


export const AuthContext = createContext<AuthContextType | undefined>(undefined) 


interface AuthProviderProps{
    children: ReactNode
}


export function AuthContextProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)


    const refreshAuth = async () => {
        setIsLoading(true)
        try {
            const sessionData = await verifySession()
            if (sessionData) {
                setIsAuthenticated(sessionData.isAuth)
                setUser({ id: sessionData.user.userId, email: sessionData.user.email })
            } else {
                setIsAuthenticated(false)
                setUser(null)
            }
        } catch (error) {
            console.error('Failed to verify authentication:', error)
            setIsAuthenticated(false)
            setUser(null)
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        refreshAuth()
    }, [])

    const value = {
        user,
        isAuthenticated,
        isLoading,
        refreshAuth
    }


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}