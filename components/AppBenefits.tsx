import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Image, {StaticImageData} from 'next/image'
import useResponsive from "@/hooks/use-responsive"


interface AppBenefitsProps {
  img: StaticImageData;
  title: string;
  description: string;
  color: string,
  classname?: string
}

const AppBenefits = ({ img, title, description, color, classname }: AppBenefitsProps) => {

  const isMobile = useResponsive('(max-width: 450px)')


  return (
    <Card className={`${classname} w-[120px] md:w-[350px] p-2 md:p-8`}>
          <CardHeader className="">
              <div className={`w-[30px] md:w-[40px] rounded-full p-2 ${color} flex justify-center items-center`}>
                <Image src={img.src} width={`${isMobile ? 15 : 30}`} height={`${isMobile ? 15 : 30}`} alt="" className="" />  
              </div>
              <CardTitle className="text-xs md:text-md">{title}</CardTitle>
          </CardHeader>      
          <CardContent className="p-0 md:p-6">
              <p className="max-w-[200px] text-[8px] md:text-xs">{description}</p>
          </CardContent>
    </Card>
  )
}

export default AppBenefits
