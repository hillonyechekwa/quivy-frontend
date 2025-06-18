
import Loader from "@/components/Loader"
import ErrorPage from "@/components/ErrorPage"
import { AsyncBoundary } from "@/components/AsyncBoundary"
import ActiveEventsPage from "./ActiveEventsPage"
import AppLayout from "@/app/providers"


const Page = () => {

  return (
    <AppLayout>
    <AsyncBoundary loadingFallback={<Loader />} errorFallback={<ErrorPage content="Couldn&apos;t load page"/>}>
      <ActiveEventsPage />
    </AsyncBoundary>
    </AppLayout>
  )
}

export default Page