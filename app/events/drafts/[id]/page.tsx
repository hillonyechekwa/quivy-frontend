
import DraftsEventTemplatePage from './event-page'
import { AsyncBoundary } from '@/components/AsyncBoundary'
import Loader from '@/components/Loader'
import ErrorPage from '@/components/ErrorPage'


type Props = {
  params: {
    id: string
  }
}

const Page = async ({params}: Props) => {
  const {id} = await params
  return (
    <div>
    <AsyncBoundary loadingFallback={<Loader />} errorFallback={<ErrorPage content="Couldn&apos;t load page" />} >
      <DraftsEventTemplatePage id={id} />
    </AsyncBoundary>
    </div>
  )
}

export default Page