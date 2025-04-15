import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"
import Image from "next/image"
import { Prize } from "../types"

interface PrizeListProps {
    prizes: Prize[]
    onEdit: (index: number) => void
    onRemove: (index: number) => void
}

export function PrizeList({ prizes, onEdit, onRemove }: PrizeListProps) {
    if (prizes.length === 0) return null

    return (
        <div className="mt-4 space-y-4">
            {prizes.map((prize, index) => (
                <div key={index} className="flex items-start gap-4">
                    <div className="text-sm font-medium w-10">{prize.quantity}</div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                                {prize.imageUrl ? (
                                    <Image
                                        src={prize.imageUrl}
                                        alt={prize.name}
                                        width={32}
                                        height={32}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <span className="text-xs">🎁</span>
                                )}
                            </div>
                            <div>
                                <div className="font-medium">{prize.name}</div>
                                <div className="text-xs text-gray-500">{prize.description}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button type="button" variant="ghost" size="icon" onClick={() => onEdit(index)}>
                            <Edit className="h-4 w-4" />
                        </Button>
                        <Button type="button" variant="ghost" size="icon" onClick={() => onRemove(index)}>
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}