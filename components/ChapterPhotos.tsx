import Image from "next/image";
import { photos } from "@/lib/photos";
import Link from "next/link";

const ChapterPhotos = () => {
  return (
    <div className="container mx-auto px-10 py-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Chaper Photos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <Image
              src={photo.url}
              alt={photo.title}
              width={100}
              height={100}
              className="h-[250px] w-[450px] rounded"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-6">
        <Link
          href="/contact"
          className="bg-blue-500 text-white font-semibold py-4 px-10 rounded-md hover:bg-blue-600"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ChapterPhotos;
