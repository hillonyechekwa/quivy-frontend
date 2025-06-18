
import ActiveEventTemplatePage from './event-page'
import { AsyncBoundary } from '@/components/AsyncBoundary'
import Loader from '@/components/Loader'
import ErrorPage from '@/components/ErrorPage'


type Props = {
  params: Promise<{id: string}>;
}

export default async function Page({ params }: Props) {
  const { id } = await params

  
  return (
    <div className="w-screen">
      <AsyncBoundary loadingFallback={<Loader />} errorFallback={<ErrorPage content="Couldn&apos;t load Page"/>} >
        <ActiveEventTemplatePage id={id} />
      </AsyncBoundary>
    </div >
  )
}

