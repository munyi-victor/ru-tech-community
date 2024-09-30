"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { useAuth } from "@/lib/context/AuthContext";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Rongo University Tech Community"
                className="h-10 w-10 rounded-2xl"
                height={10}
                width={10}
              />
            </Link>
            <h1 className="text-xl font-bold ml-2">
              Rongo University Tech Community
            </h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/events" className="text-gray-700 hover:text-blue-500">
              Upcoming Events
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">
              About us
            </Link>
            {isLoggedIn ? (
              ""
            ) : (
              <Link
                href="/auth/login"
                className="text-gray-700 hover:text-blue-500"
              >
                Login
              </Link>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 text-3xl hover:text-blue-500"
            >
              &#9776;
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {isLoggedIn ? (
              ""
            ) : (
              <Link
                href="/auth/login"
                className="block text-gray-700 hover:text-blue-500 mb-2"
              >
                Login
              </Link>
            )}
            <Link
              href="/events"
              className="block text-gray-700 hover:text-blue-500"
            >
              Upcoming Events
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">
              About us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
