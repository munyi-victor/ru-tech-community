import Link from "next/link";

import { LuFacebook } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row gap-2 mt-3">
      <Link
        href={"https://www.facebook.com/profile.php?id=61566066592368"}
        title="facebook"
        className="text-black"
      >
        <LuFacebook />
      </Link>

      <Link href={"https://x.com/DscRongo"} title="x" className="text-black">
        <FaXTwitter />
      </Link>
    </div>
  );
};

export default SocialMediaLinks;
