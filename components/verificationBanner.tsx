import { useContext, useState } from "react"
import { AuthContext } from "@/context/AuthContext"


const VerificationBanner = () => {
    const [resend, setResend] = useState(false)
    const authContext = useContext(AuthContext)
    if (!authContext) {
        throw new Error("AuthContext is undefined. Ensure that AuthContextProvider is wrapping the component tree.")
    }

    const { user } = authContext

    async function resendVerification () {
        setResend(true)
        const response = await fetch("/api/auth/otpverification", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",	
            }
        })

        if(response.ok) {
            setResend(false)
            const data = await response.json()
            console.log("resend otp successful", data) //TODO: add a toaster here
        }else{
            console.error("resending otp failed")
            setResend(false)
        }
    }

    console.log(user, "user in verification banner")

 
    return (
        <div>
            {
                user?.accountStatus === "INACTIVE"
                    ?
                    (
                        <div className="bg-[#F9F9F9] p-4 rounded-lg shadow-md flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="text-sm text-gray-700">Your account is not verified. Please check your email for the verification link.</span>
                            </div>
                            <button onClick={resendVerification} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded">{
                                resend
                                    ?
                                    <span className="animate-pulse">Resending...</span>
                                    :
                                    <span>Resend Verification</span>
                                }</button>
                        </div>
                    )
                    :
                    null
            }

        </div>
    )
}

export default VerificationBanner