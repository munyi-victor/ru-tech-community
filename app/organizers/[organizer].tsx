import Image from "next/image";

import { useRouter } from "next/router";
import { organizersData } from "@/lib/organizersData";

const OrganizerDetails = () => {
  const router = useRouter();
  const { details } = router.query;

  const organizer = organizersData.find((org) => org.details === details);

  if (!organizer) {
    return <p>Organizer not found</p>;
  }

  console.log(organizer);

  return (
    <div>
      <Image
        src={organizer.imageSource}
        alt=""
        height={100}
        width={100}
        className="h-[200px] w-[200px] rounded-full"
      />
      <p>{organizer.fullName}</p>
      <p>{organizer.position}</p>
      <section>
        <h2>About me</h2>
        <p>{organizer.about}</p>
      </section>
    </div>
  );
};

export default OrganizerDetails;
