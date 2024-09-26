import OrganizerCard from "./cards/OrganizerCard";

import { organizersData } from "@/lib/organizersData";

const Organizers = () => {
  return (
    <div className="container mx-auto px-10 py-6 border-b">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Organizers</h1>
      <div className="flex flex-col md:flex-row gap-20 items-center justify-center">
        {organizersData.map((organizer, index) => (
          <OrganizerCard key={index} {...organizer} />
        ))}
      </div>
    </div>
  );
};

export default Organizers;
