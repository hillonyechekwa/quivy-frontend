import NotificationsFeed from "./NotificationPage"
import { AsyncBoundary } from "@/components/AsyncBoundary"
import Loader from "@/components/Loader"
import ErrorPage from "@/components/ErrorPage"
import AppLayout from "../providers"




const Page = () => {

  return(
    <AppLayout>
      <AsyncBoundary loadingFallback={<Loader />} errorFallback={<ErrorPage content="Couldn&apos;t load notifications page" />}>
        <NotificationsFeed />
      </AsyncBoundary>
    </AppLayout>
    )
}


export default Page