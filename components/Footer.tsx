import Link from "next/link";
import Image from "next/image";
import SocialMediaLinks from "./SocialMediaLinks";
import { SlArrowRight } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="container mx-auto px-10 py-4 pt-10 border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
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
            <h1 className="text-xl font-bold ml-2 text-gray-700">
              Rongo University Tech Community
            </h1>
          </div>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <li className="flex flex-row items-center gap-0">
              <SlArrowRight size={10} />
              <Link href={"/"} className="text-sm text-gray-700">
                Home
              </Link>
            </li>
            <li className="flex flex-row items-center gap-0">
              <SlArrowRight size={10} />
              <Link href={"/about"} className="text-sm text-gray-700">
                About RUTC
              </Link>
            </li>
            <li className="flex flex-row items-center gap-0">
              <SlArrowRight size={10} />
              <Link href={"/events"} className="text-sm text-gray-700">
                Uppcoming events
              </Link>
            </li>
            <li className="flex flex-row items-center gap-0">
              <SlArrowRight size={10} />
              <Link href={"/contact"} className="text-sm text-gray-700">
                Contact
              </Link>
            </li>
            <li className="flex flex-row items-center gap-0">
              <SlArrowRight size={10} />
              <Link href={"/auth/register"} className="text-sm text-gray-700">
                Join us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Social</h2>
          <SocialMediaLinks />
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row mt-4">
        <h2 className="text-sm">&copy; 2024, RU Tech Community.</h2>
        <h2 className="text-sm">
          Made by{" "}
          <Link
            href={"https://x.com/munyi_victor"}
            target="_blank"
            className="text-blue-500"
          >
            Munyi Victor
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
