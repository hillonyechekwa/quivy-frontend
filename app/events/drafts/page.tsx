"use client"

import { DataTable } from "./draft-components/DataTable"
import { Columns, type Draft } from "./draft-components/Columns"

// Sample data
const drafts: Draft[] = [
  {
    id: "1",
    date: new Date(2023, 11, 25),
    time: "08:23 PM",
    subject: "(no subject)",
    hasSubject: false,
  },
  {
    id: "2",
    date: new Date(2023, 11, 23),
    time: "10:29 AM",
    subject: "Soundcity concert",
    hasSubject: true,
  },
  {
    id: "3",
    date: new Date(2023, 11, 20),
    time: "06:14 PM",
    subject: "(no subject)",
    hasSubject: false,
  },
  {
    id: "4",
    date: new Date(2023, 11, 18),
    time: "04:42 PM",
    subject: "Future foundation",
    hasSubject: true,
  },
  {
    id: "5",
    date: new Date(2023, 11, 16),
    time: "09:09 PM",
    subject: "(no subject)",
    hasSubject: false,
  },
  {
    id: "6",
    date: new Date(2023, 11, 15),
    time: "11:30 AM",
    subject: "Team meeting notes",
    hasSubject: true,
  },
  {
    id: "7",
    date: new Date(2023, 11, 14),
    time: "03:45 PM",
    subject: "Project timeline",
    hasSubject: true,
  },
  {
    id: "8",
    date: new Date(2023, 11, 12),
    time: "02:15 PM",
    subject: "(no subject)",
    hasSubject: false,
  },
  {
    id: "9",
    date: new Date(2023, 11, 10),
    time: "09:20 AM",
    subject: "Quarterly review",
    hasSubject: true,
  },
  {
    id: "10",
    date: new Date(2023, 11, 8),
    time: "05:30 PM",
    subject: "Budget proposal",
    hasSubject: true,
  },
]

const DraftsPage = () => {
  return (
    <section className="w-full h-auto justify-center items-center p-5">
      <DataTable columns={Columns} data={drafts} title="Drafts" />
    </section>
  )
}

export default DraftsPage