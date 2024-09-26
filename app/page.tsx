"use client";

import LandingPage from "@/components/LandingPage";
import AboutUs from "@/components/AboutUs";
import Organizers from "@/components/Organizers";
import ChapterPhotos from "@/components/ChapterPhotos";
import Footer from "@/components/Footer";
import UpcomingEvents from "@/components/UpcomingEvents";

import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";

export default function Home() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  if (isLoggedIn) {
    router.replace("/");
  }

  return (
    <div className="text-black">
      <LandingPage />
      <AboutUs />
      <UpcomingEvents />
      <Organizers />
      <ChapterPhotos />
      <Footer />
    </div>
  );
}
