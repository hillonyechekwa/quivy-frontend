
import ScheduledEventTemplatePage from './event-page'


type Props = {
  params: {
    id: string
  }
}

const Page = async ({params}: Props) => {
  const {id} = await params
  return (
    <div>
      <ScheduledEventTemplatePage id={id} />
    </div>
  )
}

export default Page