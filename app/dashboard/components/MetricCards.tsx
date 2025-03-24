import { Card } from "@/components/ui/card"
import { Calendar, MousePointerClick, ScanQrCode, Gift } from "lucide-react"


const MetricCards = () => {

  const cardData = [
    {
      title: "Total Events",
      metric: "0 Events",
      icon: Calendar
    },
    {
      title: "Total Clicks",
      metric: "0 Clicks",
      icon: MousePointerClick
    },
    {
      title: "Total Scans",
      metric: "0 Scans",
      icon: ScanQrCode
    },
    {
      title: "Total Prize Winner",
      metric: "0 winners",
      icon: Gift
    }
  ]

  return (
    <section className="col-start-1 col-end-5 row-start-1 row-end-2 p-2 flex items-center justify-between w-full">
      {cardData.map((data, index) => (
        <Card
          key={`card-data-${index}`}
          className="bg-quivyPurple text-white rounded-lg p-5 flex flex-col items-start justify-between space-y-5 min-w-[300px]"
        >
          <div className="flex justify-between items-center w-full space-x-20">
            <p className="text-sm">{data.title}</p>
            <div className="w-8 h-8 flex justify-center items-center p-1 rounded-full bg-white">
              <data.icon className=" stroke-black"/>
            </div>
          </div>
          <p className="text-lg font-medium">{data.metric}</p>
        </Card>
      ))}
    </section>
  )
}

export default MetricCards