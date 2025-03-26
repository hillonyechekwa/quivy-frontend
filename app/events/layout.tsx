

interface EventsLayoutProps {
    children: React.ReactNode
}

const EventsLayout = ({children}: EventsLayoutProps) => {
  return (
      <main className="w-full h-full flex justify-center items-center">{children}</main>
  )
}

export default EventsLayout