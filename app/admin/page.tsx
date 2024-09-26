"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import { useState } from "react";

import { addEvent, storage } from "@/firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Admin = () => {
  const { isAdmin } = useAuth();
  const router = useRouter();

  const [eventData, setEventData] = useState({
    eventPhoto: "",
    title: "",
    shortDescription: "",
    detailedDescription: "",
    keyTheme: "",
    date: "",
    location: "",
  });

  if (!isAdmin) {
    router.replace("/admin/login");
  }

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoUpload = (e: any) => {
    console.log(e.target.files[0]);

    const images = ref(storage, `images/${v4()}`);
    uploadBytes(images, e.target.files[0]).then((data) => {
      console.log(data, "images");
      getDownloadURL(data.ref).then((val) => {
        setEventData({ ...eventData, eventPhoto: val });
        console.log(val);
      });
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const eventAdded = await addEvent(eventData);

      if (eventAdded) {
        alert("Event added successfully.");
        router.replace("/");
      } else {
        alert("Failed to add event.");
      }
    } catch (error) {
      console.error("Error during event adding.", error);
    }
    console.log(eventData);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Event</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Event photo
          </label>
          <input
            type="file"
            className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
            name="event"
            onChange={(e) => handlePhotoUpload(e)}
            required
            placeholder="Title of the event"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Event title
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
            placeholder="Title of the event"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Key theme
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
            name="keyTheme"
            value={eventData.keyTheme}
            onChange={handleChange}
            required
            placeholder="e.g. AI, Android, Web development"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Short description
          </label>
          <textarea
            cols={10}
            className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
            name="shortDescription"
            value={eventData.shortDescription}
            onChange={handleChange}
            required
            placeholder="A brief description of the event"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Detailed description
          </label>
          <textarea
            cols={10}
            className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
            name="detailedDescription"
            value={eventData.detailedDescription}
            onChange={handleChange}
            required
            placeholder="A more detailed description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Location</label>
          <input
            type="text"
            className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
            placeholder="Location of the event"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
            placeholder="Date of the event"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default Admin;
