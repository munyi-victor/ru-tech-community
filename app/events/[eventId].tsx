"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchEventById } from "@/firebase/firebase";
import { EventProps } from "@/types";

const EventDetails = () => {
  const router = useSearchParams();
  const eventId = router.get("");
  const [event, setEvent] = useState<EventProps | null>(null);

  useEffect(() => {
    const fetchEventData = async () => {
      if (eventId) {
        const fetchedEvent = await fetchEventById(eventId);
        setEvent(fetchedEvent);
      }
    };

    fetchEventData();
  }, [eventId]);

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p>{event.detailedDescription}</p>
      {/* Display other event details here */}
    </div>
  );
};

export default EventDetails;
