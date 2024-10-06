import Image from "next/image";
import Link from "next/link";

interface OrganizerCardProps {
  imageSource: string;
  fullName: string;
  position: string;
  id: string;
}

const OrganizerCard = ({
  imageSource,
  fullName,
  position,
  id,
}: OrganizerCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={imageSource}
        alt="profile image"
        height={100}
        width={100}
        className="h-[200px] w-[200px] rounded-full"
      />
      <h1 className="font-bold text-xl">{fullName}</h1>
      <h2 className="font-semibold text-gray-600 text-lg">{position}</h2>
      <Link
        href={`/organizers/${id}`}
        className="font-bold text-blue-500 font-semibold"
      >
        View Profile
      </Link>
    </div>
  );
};

export default OrganizerCard;
