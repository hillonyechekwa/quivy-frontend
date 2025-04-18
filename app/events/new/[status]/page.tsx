"use client"
import EventsForm from "./form";
import { useParams } from "next/navigation";


const NewEventPage = () => {
    const params = useParams()
    const status = params.status

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <EventsForm eventStatus={status} />
        </div>
    );
}


export default NewEventPage