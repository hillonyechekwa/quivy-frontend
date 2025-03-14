// import { BACKEND_URL } from "@/utils/constants";
import { Separator } from "@/components/ui/separator";
import { CardContent, CardHeader, Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SigninForm } from "./form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from "@/public/assets/Logo.png";
import formIllustration from "@/public/assets/illustrations/form-illustration.png";

const SignInPage = () => {
  return (
    <main className="grid grid-cols-2 grid-rows-1 justify-evenly items-center bg-[#F2F2F2]">
      <section className="w-full flex flex-col justify-start items-center space-y-10">
        <div className="flex flex-col space-y-3 items-start justify-between">
          <Image src={Logo} alt="quivy logo" className="w-24 relative -left-48" />
          <Link href="/" className="flex items-center justify-between relative -left-48 space-x-3 hover:text-quivyPurple">  
            <FontAwesomeIcon icon={faArrowLeft} size="sm" />
            <p>Go Back</p>
          </Link>
        </div>
        <Card className="w-3/4">
          <CardHeader>
            <section className="w-auto flex flex-col items-center justify-between space-y-3">
              <h3 className="font-semibold text-xl">Sign In</h3>
              <small className="text-xs">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/signup"
                  className={`${buttonVariants({ variant: "link" })}  !p-0`}
                >
                  {" "}
                  <span className="text-[#995B00]">Sign up </span>{" "}
                </Link>
              </small>
            </section>
            <section className="w-full flex items-center justify-center space-x-5">
              <button
                type="button"
                className={`${buttonVariants({ variant: "default" })} shadow-md bg-white hover:bg-white`}
              >
                {" "}
                <FontAwesomeIcon icon={faGoogle} size="xs" color="black" />{" "}
                <p className="text-black">Continue With Google </p>
              </button>
              <button
                type="button"
                className={`${buttonVariants({ variant: "default" })} shadow-md bg-white hover:bg-white`}
              >
                {" "}
                <FontAwesomeIcon icon={faApple} size="xs" color="black" />{" "}
                <p className="text-black">Continue With Apple </p>
              </button>
            </section>
          </CardHeader>
          <span className="flex justify-center items-center w-full px-2 space-x-4 text-gray-400">
            {" "}
            <Separator className="w-[30%]" /> <p>or</p>{" "}
            <Separator className="w-[30%]" />
          </span>
          <CardContent className="w-full flex items-center justify-center">
            <SigninForm />
          </CardContent>
        </Card>
      </section>
      <section className="w-auto h-auto p-3 grid place-items-center">
        <div className="w-3/4 px-8 h-[95dvh] bg-quivyPurple rounded-3xl flex flex-col justify-between items-center">
          <article className="text-white space-y-3 relative top-32">
            <h3 className="text-2xl">Welcome!</h3>
            <p className="font-light text-sm">
              Turn Your Events into Unforgettable Moments!
            </p>
          </article>
          <Image
            src={formIllustration}
            alt=""
            className="max-w-[500px] relative left-10"
          />
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
