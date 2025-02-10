// import { BACKEND_URL } from "@/utils/constants";
import { Separator } from "@/components/ui/separator";
import { CardContent, CardHeader, Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SigninForm } from "./form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image";
import Logo from "@/public/assets/Logo.png"
import Frame from "@/public/assets/illustrations/illustration-frame.png"
import formIllustration from "@/public/assets/illustrations/form-illustration.png"




const SignInPage = () => {


    return (
        <main>
            <section>
                <Image src={Logo} alt="quivy logo" className="" />
                <Card>
                    <CardHeader>
                        <section>
                            <h3>Sign In</h3>
                            <small>Don&apos;t have an account? <Link href="">Sign up</Link></small>
                        </section>
                        <section>
                            <button type="button" className={`${buttonVariants({ variant: "secondary" })}`}> <FontAwesomeIcon icon={faGoogle} size="xs" /> Continue With Google</button>
                            <button type="button" className={`${buttonVariants({ variant: "secondary" })}`}> <FontAwesomeIcon icon={faApple} size="xs" />Continue With Apple</button>
                        </section>
                    </CardHeader>
                    <span> <Separator className="" /> <p>or</p> <Separator className="" /></span>
                    <CardContent>
                        <SigninForm />
                    </CardContent>
                </Card>
            </section>
            <section>
                {/* page image */}
                <Image src={Frame} alt="" className="" />
                <Image src={formIllustration} alt="" className="" />
            </section>
        </main>
    )
}




export default SignInPage