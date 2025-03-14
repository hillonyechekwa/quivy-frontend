import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { StaticImageData } from "next/image"

interface AppBenefitsProps {
  img: StaticImageData
  title: string
  description: string
  color: string
}

export default function AppBenefits({ img, title, description, color }: AppBenefitsProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-full", color)}>
            <Image
              src={img || "/placeholder.svg?height=24&width=24"}
              alt={title}
              width={24}
              height={24}
              className="h-6 w-6 object-contain brightness-0 invert"
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}