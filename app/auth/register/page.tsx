"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addRegistrationData } from "@/firebase/firebase";

const RegistrationForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    admissionNumber: "",
    phoneNumber: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const isRegistered = await addRegistrationData(formData);

      if (isRegistered) {
        alert("Registration successful");
        router.replace("/");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration", error);
    }
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            First Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Admission Number
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
            name="admissionNumber"
            value={formData.admissionNumber}
            onChange={handleChange}
            required
            autoCapitalize="on"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 px-4"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
