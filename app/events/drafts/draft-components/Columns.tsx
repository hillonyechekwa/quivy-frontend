"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ChevronRight } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "./DataTableColumnHeader"
import { format } from "date-fns"
import { EventType } from "../../types"

// Updated Draft data type (still keeping all fields for compatibility)
// export type Draft = {
//   id: string
//   date: Date
//   eventStartTime: Date
//   eventEndTime: Date
//   name: string
//   status: string
//   uniqueCode: string
//   qrCodeValidityDuration: number
//   clicks: number
//   scans: number
//   prizes: []
//   createdAt: string
// }

export const columns: ColumnDef<EventType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date & Time" />,
    cell: ({ row }) => {
      const date = row.original.date
      const startTime = row.original.eventStartTime
      const endTime = row.original.eventEndTime

      const formattedDate = format(date, "MMM d")
      const formattedStartTime = format(startTime, "hh:mm a")
      const formattedEndTime = format(endTime, "hh:mm a")

      return (
        <div className="font-medium">
          {formattedDate}, {formattedStartTime} - {formattedEndTime}
        </div>
      )
    },
    enableSorting: true,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Events" />,
    cell: ({ row }) => {
      const name = row.getValue("name") as string
      return <div>{name || "(no subject)"}</div>
    },
  },
  {
    id: "actions",
    cell: () => <ChevronRight className="h-5 w-5 text-muted-foreground" />,
    enableSorting: false,
    enableHiding: false,
  },
]
