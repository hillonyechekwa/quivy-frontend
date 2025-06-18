
import CodePage from "./CodePage"
import { AsyncBoundary } from "@/components/AsyncBoundary"
import Loader from "@/components/Loader"
import ErrorPage from "@/components/ErrorPage"


type Props = {
  params: {
    id: string
  }
}

const Page = async  ({params}: Props) => {
    const { id } = await params
    return(
        <AsyncBoundary loadingFallback={<Loader />} errorFallback={<ErrorPage content="Couldn&apos;t load Qr Code page" />}>
            <CodePage id={id} />
        </AsyncBoundary>
    )
}

export default Page