import AppLayout from '@/app/providers'
import ScheduledEventsPage from './ScheduledEventsPage'
import { AsyncBoundary } from '@/components/AsyncBoundary'
import ErrorPage from '@/components/ErrorPage'
import Loader from '@/components/Loader'


const Page = () => {

  return (
    <AppLayout>
      <AsyncBoundary loadingFallback={<Loader />} errorFallback={<ErrorPage content="couldn&apos;t load events" />}>
        <ScheduledEventsPage />
      </AsyncBoundary>
    </AppLayout>
  )
}

export default Page