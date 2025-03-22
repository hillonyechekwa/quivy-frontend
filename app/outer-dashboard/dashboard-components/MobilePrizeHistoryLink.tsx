"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

const MobilePrizeHistoryLink = () => {
  return (
    <div className="flex justify-end mb-2">
      <Link href="/prize-history" className="flex items-center text-foreground font-medium">
        Prize history
        <ChevronRight className="h-5 w-5 ml-1" />
      </Link>
    </div>
  )
}

export default MobilePrizeHistoryLink