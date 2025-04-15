import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Minus, Upload, AlertCircle } from "lucide-react"
import Image from "next/image"
import { Prize } from "../types"

interface PrizePanelProps {
    prize: Prize
    onPrizeChange: (prize: Prize) => void
    onSave: () => void
    selectedImage: string | null
    error: string | null
    onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function PrizePanel({
    prize,
    onPrizeChange,
    onSave,
    selectedImage,
    error,
    onImageUpload
}: PrizePanelProps) {
    const triggerFileInput = () => {
        document.getElementById('file-upload')?.click()
    }

    return (
        <div className="space-y-6">
            <h2 className="text-lg font-medium">Prize listing</h2>
            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Prize name</label>
                    <Input
                        value={prize.name}
                        onChange={(e) => onPrizeChange({ ...prize, name: e.target.value })}
                        placeholder="Enter prize name"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Prize Description</label>
                    <Textarea
                        value={prize.description}
                        onChange={(e) => onPrizeChange({ ...prize, description: e.target.value })}
                        placeholder="Enter prize description"
                        className="min-h-[100px]"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Quantity</label>
                    <div className="flex items-center">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                            onClick={() => onPrizeChange({ ...prize, quantity: Math.max(1, prize.quantity - 1) })}
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <div className="w-12 text-center">{prize.quantity}</div>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                            onClick={() => onPrizeChange({ ...prize, quantity: prize.quantity + 1 })}
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Upload image</label>
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
                        <div className="flex items-center justify-center bg-gray-100 rounded-full p-2">
                            <Upload className="h-6 w-6 text-gray-500" />
                        </div>
                        <Input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={onImageUpload}
                        />
                        {error && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
                                <AlertCircle className="mr-2" />
                                <p>{error}</p>
                            </div>
                        )}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={triggerFileInput}
                            className="mt-4 bg-black text-white rounded-md hover:bg-black/90"
                        >
                            Upload image
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center items-center p-3">
                    {(selectedImage || prize.imageUrl) && (
                        <div className="rounded-lg shadow-md max-h-64 overflow-hidden">
                            <Image
                                width={150}
                                height={150}
                                src={selectedImage || prize.imageUrl}
                                alt="product-image"
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>

            <Button
                className="w-full bg-[#7340fd] text-white hover:bg-[#7340fd]/90"
                onClick={onSave}
                disabled={!prize.name}
            >
                Save
            </Button>
        </div>
    )
}