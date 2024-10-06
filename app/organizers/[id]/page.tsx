import { organizersData } from "@/lib/organizersData";
import Image from "next/image";
import Footer from "@/components/Footer";

const Organizer = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const organizerData = organizersData.filter((orgId) => orgId.id === id);
  return (
    <>
      <div className="flex flex-col items-center justify-center py-6">
        {organizerData.map((organizer) => (
          <div
            key={organizer.id}
            className="flex flex-col items-center justify-center gap-2"
          >
            <Image
              src={organizer.imageSource}
              alt="organizer photo"
              className="h-[200px] w-[200px] rounded-full"
              height={200}
              width={200}
            />
            <h1 className="text-lg font-semibold -mb-2">
              {organizer.fullName}
            </h1>
            <h2>{organizer.position}</h2>
            <p className="text-gray-700">{organizer.about}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Organizer;
