"use clinet";

import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@/lib/context/AuthContext";

import { getMemberCount } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import SocialMediaLinks from "./SocialMediaLinks";

const LandingPage = () => {
  const { isLoggedIn } = useAuth();

  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    const fetchMemberCount = async () => {
      const count = await getMemberCount();
      setMemberCount(count);
    };

    fetchMemberCount();
  }, []);
  return (
    <div className="container mx-auto px-10 py-2 pb-2">
      <div className="flex flex-col justify-between gap-2">
        <div className="w-full flex justify-center">
          <Image
            src="/gdsc-photo.jpg"
            alt="Rongo University Tech Community"
            className="w-full md:h-[320px] h-[280px] rounded-lg object-cover"
            width={1200}
            height={0}
          />
        </div>
        <div className="md:w-3/4">
          <h1 className="text-3xl md:text-4xl font-bold mb-0">
            Welcome to the Rongo University Tech Community!
          </h1>
          <p className="text-md md:text-lg mb-2">
            Join our vibrant community of passionate developers and connect with
            like-minded individuals.
          </p>
          <div className="mb-2">
            <p>{memberCount} members</p>
          </div>
          {isLoggedIn ? (
            ""
          ) : (
            <Link
              href="/auth/register"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Join Us
            </Link>
          )}
        </div>
        <div>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
