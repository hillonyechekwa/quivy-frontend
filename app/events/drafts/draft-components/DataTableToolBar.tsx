"use client"

import { Cross2Icon, TrashIcon } from "@radix-ui/react-icons"
import type { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./DataTableViewOptions"

interface DataTableToolbarProps<TData> {
    table: Table<TData>
    title?: string
}

export function DataTableToolbar<TData>({ table, title }: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0
    const hasSelection = table.getState().rowSelection && Object.keys(table.getState().rowSelection).length > 0

    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
            <h1 className="text-2xl font-semibold text-[#7340fd]">{title || "Drafts"}</h1>
            <div className="flex flex-1 items-center space-x-2 justify-end">
                {table.getColumn("subject") && (
                    <Input
                        placeholder="Filter events..."
                        value={(table.getColumn("subject")?.getFilterValue() as string) ?? ""}
                        onChange={(event) => table.getColumn("subject")?.setFilterValue(event.target.value)}
                        className="h-9 w-[150px] lg:w-[250px]"
                    />
                )}
                {hasSelection && (
                    <Button variant="destructive" size="sm" onClick={() => table.resetRowSelection()} className="h-9">
                        <TrashIcon className="mr-2 h-4 w-4" />
                        Delete Selected
                    </Button>
                )}
                <Button variant="destructive" size="sm" className="h-9">
                    <TrashIcon className="mr-2 h-4 w-4" />
                    Delete All
                </Button>
                {isFiltered && (
                    <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-9 px-2 lg:px-3">
                        Reset
                        <Cross2Icon className="ml-2 h-4 w-4" />
                    </Button>
                )}
                <DataTableViewOptions table={table} />
            </div>
        </div>
    )
}

