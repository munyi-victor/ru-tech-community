"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchEventById } from "@/firebase/firebase";
import { EventProps } from "@/types";
import Footer from "@/components/Footer";
import Image from "next/image";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

import RSVPModal from "@/components/RSVPModal";

import { useAuth } from "@/lib/context/AuthContext";

const EventDetails = ({ params }: { params: { id: string } }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const { id } = params;
  const [event, setEvent] = useState<EventProps | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchEventData = async () => {
      if (id) {
        const fetchedEvent = await fetchEventById(id);
        setEvent(fetchedEvent);
      }
    };

    fetchEventData();
  }, [id]);

  if (!event) {
    return <p>Loading...</p>;
  }

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClick = () => {
    if (isLoggedIn) {
      openModal();
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <>
      <div className="container mx-auto px-10 pb-4 pt-6">
        <div className="flex flex-col md:flex-row gap-8">
          <Image
            src={event.eventPhoto}
            alt="event photo"
            height={200}
            width={200}
            className="rounded w-[400px] h-[250px]"
          />
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-xl md:text-2xl md:mt-4">
              {event.title}
            </h1>
            <p>{event.shortDescription}</p>
            <div className="mt-6 flex flex-col md:flex-row justify-between">
              <SocialMediaLinks />

              <div>
                <div className="flex gap-2 items-center">
                  <IoLocationOutline size={30} />
                  <h2 className="font-semibold text-md">Where</h2>
                </div>
                <h2 className="font-bold text-gray-700">{event.location}</h2>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <MdDateRange size={30} />
                  <h2 className="font-semibold text-md">When</h2>
                </div>
                <h2 className="font-bold text-gray-700">
                  {new Date(event.date).toLocaleDateString() || event.date}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="font-semibold text-xl md:text-2xl">About the event</h1>
          <p>{event.detailedDescription}</p>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            {isLoggedIn ? "RSVP" : "Login to RSVP"}
          </button>
          {modalOpen && <RSVPModal closeModal={closeModal} />}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EventDetails;
