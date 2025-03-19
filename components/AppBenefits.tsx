import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { StaticImageData } from "next/image"
import { useResponsive } from "@/hooks/use-responsive"



interface AppBenefitsProps {
  img: StaticImageData
  title: string
  description: string
  color: string
}

export default function AppBenefits({ img, title, description, color }: AppBenefitsProps) {

  const isMobile = useResponsive("(max-width: 455px)")

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-3 md:p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-full", color)}>
            <Image
              src={img || "/placeholder.svg?height=24&width=24"}
              alt={title}
              width={`${isMobile ? `10` : `24`}`}
              height={`${isMobile ? `10` : `24`}`}
              className="h-6 w-6 object-contain brightness-0 invert"
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-[12px] md:text-sm">{title}</h3>
            <p className="text-[10px] md:text-sm md:w-[300px] text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}