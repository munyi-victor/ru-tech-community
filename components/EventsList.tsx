"use client";

import React, { useEffect, useState } from "react";
import { fetchEvents } from "@/firebase/firebase";

import { EventProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

import { CiShare2 } from "react-icons/ci";

const EventsList = () => {
  const [events, setEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const fetchedEvents = await fetchEvents();
        setEvents(fetchedEvents as EventProps[]);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEventsData();
  }, []);

  if (!events) {
    return (
      <div className="container mx-auto px-10 py-6">
        <h1 className="text-lg md:text-xl font-semibold">
          There are not events currently.
        </h1>
      </div>
    );
  }

  return (
    <div className="events-list">
      {events.map((event) => (
        <div
          key={event.title || event.title}
          className="flex flex-col md:flex-row items-center justify-center gap-4 rounded border p-2"
        >
          {" "}
          <Image
            src={event.eventPhoto}
            alt={event.title}
            height={100}
            width={100}
            className="w-[150px] h-[150px] rounded-full border"
          />
          <div className="flex flex-col">
            <p className="font-semibold border-b">
              {new Date(event.date).toLocaleDateString() || event.date} |{" "}
              {event.location}
            </p>
            <h2 className="text-lg md:text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-700">{event.shortDescription}</p>

            <div className="flex flexx-row gap-8">
              <Link href={"#"} className="font-bold text-blue-500">
                View details
              </Link>
              <button type="button" title="share this event" onClick={() => {}}>
                <CiShare2 size={24} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
