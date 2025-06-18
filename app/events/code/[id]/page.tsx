
import CodePage from "./CodePage"
import { AsyncBoundary } from "@/components/AsyncBoundary"
import Loader from "@/components/Loader"
import ErrorPage from "@/components/ErrorPage"


type Props = {
  params: Promise<{id: string}>
}

export default async function Page ({params}: Props) {
    const { id } = await params
    return(
        <AsyncBoundary loadingFallback={<Loader />} errorFallback={<ErrorPage content="Couldn&apos;t load Qr Code page" />}>
            <CodePage id={id} />
        </AsyncBoundary>
    )
}
