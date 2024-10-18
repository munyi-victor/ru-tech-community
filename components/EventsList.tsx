"use client";

import React, { useEffect, useState } from "react";
import { db, fetchPastEvents, fetchUpcomingEvents } from "@/firebase/firebase";

import { EventProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/lib/context/AuthContext";

import { CiShare2 } from "react-icons/ci";

const EventsList = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<EventProps[]>([]);
  const [pastEvents, setPastEvents] = useState<EventProps[]>([]);

  const { pastEvent } = useAuth();

  useEffect(() => {
    const fetchUpcomingEventsData = async () => {
      try {
        const fetchedUpcomingEvents = await fetchUpcomingEvents(db);
        setUpcomingEvents(fetchedUpcomingEvents as EventProps[]);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    const fetchPastEventsData = async () => {
      try {
        const fetchedPastEvents = await fetchPastEvents(db);
        setPastEvents(fetchedPastEvents as EventProps[]);
        console.log(fetchedPastEvents);
        pastEvent();
      } catch (error) {
        console.error(error);
      }
    };

    fetchUpcomingEventsData();
    fetchPastEventsData();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Upcoming Events</h1>
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row items-center justify-center gap-4 rounded border p-2"
          >
            {" "}
            <Image
              src={event.eventPhoto}
              alt={event.title}
              height={100}
              width={100}
              className="w-3/4 md:w-[150px] h-[150px] rounded-md md:rounded-full border"
            />
            <div className="flex flex-col">
              <p className="font-semibold border-b">
                {new Date(event.date.toDate()).toLocaleDateString()} |{" "}
                {event.location}
              </p>
              <h2 className="text-lg md:text-xl font-semibold">
                {event.title}
              </h2>
              <p className="text-gray-700">{event.shortDescription}</p>

              <div className="flex flexx-row gap-8">
                <Link
                  href={`/events/${event.id}`}
                  className="font-bold text-blue-500"
                >
                  View details
                </Link>
                <button
                  type="button"
                  title="share this event"
                  onClick={() => {}}
                >
                  <CiShare2 size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Past Events</h1>
        {pastEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row items-center justify-center gap-4 rounded border p-2"
          >
            {" "}
            <Image
              src={event.eventPhoto}
              alt={event.title}
              height={100}
              width={100}
              className="w-3/4 md:w-[150px] h-[150px] rounded-md md:rounded-full border"
            />
            <div className="flex flex-col">
              <p className="font-semibold border-b">
                {new Date(event.date.toDate()).toLocaleDateString()} |{" "}
                {event.location}
              </p>
              <h2 className="text-lg md:text-xl font-semibold">
                {event.title}
              </h2>
              <p className="text-gray-700">{event.shortDescription}</p>

              <div className="flex flexx-row gap-8">
                <Link
                  href={`/events/${event.id}`}
                  className="font-bold text-blue-500"
                >
                  View details
                </Link>
                <button
                  type="button"
                  title="share this event"
                  onClick={() => {}}
                >
                  <CiShare2 size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventsList;
