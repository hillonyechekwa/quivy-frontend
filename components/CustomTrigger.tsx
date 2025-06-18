"use client"
import { useSidebar } from "./ui/sidebar"



const CustomTrigger = () => {

    const {toggleSidebar} = useSidebar()


    return (
        <div onClick={toggleSidebar} className="flex flex-col space-y-1 cursor-pointer p-1 absolute top-10 left-5">
            <div className="w-[24px] h-[3px] bg-black rounded-md"></div>
            <div className="w-[24px] h-[3px] bg-black rounded-md"></div>
            <div className="w-[24px] h-[3px] bg-black rounded-md"></div>
        </div>
    )
}

export default CustomTrigger