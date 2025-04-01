"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ChevronRight } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "./DataTableColumnHeader"

// Define the data type for our table
export type Draft = {
    id: string
    date: Date
    time: string
    subject: string
    hasSubject: boolean
}

export const Columns: ColumnDef<Draft>[] = [
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
        header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
        cell: ({ row }) => {
            const date = row.original.date
            const formattedDate = `Dec ${date.getDate()}, ${row.original.time}`
            return <div className="font-medium">{formattedDate}</div>
        },
        enableSorting: true,
    },
    {
        accessorKey: "subject",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Events" />,
        cell: ({ row }) => {
            const subject = row.getValue("subject") as string
            return <div>{subject}</div>
        },
    },
    {
        id: "actions",
        cell: () => <ChevronRight className="h-5 w-5 text-muted-foreground" />,
        enableSorting: false,
        enableHiding: false,
    },
]

