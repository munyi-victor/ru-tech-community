"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginWithEmail } from "@/firebase/firebase";

import { useAuth } from "@/lib/context/AuthContext";

const LoginForm = () => {
  const { login } = useAuth();

  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const loggedIn = await loginWithEmail(email);
      if (loggedIn) {
        login();
        alert("Login successful");
        router.replace("/");
      } else {
        alert("User not found");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error);
    }
    console.log("Email:", email);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg py-2 px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
