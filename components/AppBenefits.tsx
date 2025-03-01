import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Image, {StaticImageData} from 'next/image'



interface AppBenefitsProps {
  img: StaticImageData;
  title: string;
  description: string;
  color: string,
  classname?: string
}

const AppBenefits = ({ img, title, description, color, classname }: AppBenefitsProps) => {
  return (
    <Card className={`${classname} w-[350px] p-8`}>
          <CardHeader className="">
              <div className={`w-[40px] rounded-full p-2 ${color} flex justify-center items-center`}>
                <Image src={img.src} width={30} height={30}  alt="" className="" />  
              </div>
              <CardTitle className="">{title}</CardTitle>
          </CardHeader>      
          <CardContent>
              <p className="max-w-[200px] text-xs">{description}</p>
          </CardContent>
    </Card>
  )
}

export default AppBenefits