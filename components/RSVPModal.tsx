"use client";

import { useState } from "react";

interface ModalProps {
  closeModal: () => void;
}

const RSVPModal = ({ closeModal }: ModalProps) => {
  const [formData, setFormData] = useState({
    learningAboutEvent: "",
    developerExperience: "",
    whatToLearn: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-75 flex items-center justify-center px-4"
        aria-hidden="true"
        aria-labelledby="modal-title"
        role="dialog"
      >
        <div className="relative w-full max-w-2xl md:max-w-xl mx-auto shadow rounded-xl bg-white p-4 pt-0 h-fit">
          <span
            onClick={closeModal}
            className="flex justify-end text-4xl cursor-pointer font-light hover:font-bold"
          >
            &times;
          </span>

          <form className="flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold mb-4">
              Attendee information
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                How did you learn about this event?
              </label>
              <select
                id="learning-about-event"
                className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
                value={formData.learningAboutEvent}
                onChange={handleChange}
              >
                <option value="">Select experience</option>
                <option value="social">Social meadia</option>
                <option value="community">Notified by this community</option>
                <option value="friend">Recommended by a friend or peer</option>
              </select>
              <input
                type="text"
                className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
                name="firstName"
                value={""}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RSVPModal;
