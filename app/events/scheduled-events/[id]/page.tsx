
import ScheduledEventTemplatePage from './event-page'


type Props = {
  params: Promise<{id: string}>
}

export default async function Page ({params}: Props){
  const {id} = await params
  return (
    <div>
      <ScheduledEventTemplatePage id={id} />
    </div>
  )
}
