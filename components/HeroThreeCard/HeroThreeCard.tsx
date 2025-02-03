import { APP_ROUTES } from "@/constants/routes";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type HeroThreeCardProps = {
  image: StaticImageData;
  title: string;
  text: string;
};

const HeroThreeCard = ({ image, title, text }: HeroThreeCardProps) => {
  return (
    <div className="mx-8 flex-1">
      <Image
        src={image}
        alt={title}
        className="mb-8 aspect-square w-full rounded-2xl object-cover shadow-md shadow-black"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-bebas text-2xl leading-none text-purple-light lg:pb-4">
            {title}
          </h2>
          <p className="text-sm">{text}</p>
        </div>
        <Link
          href={APP_ROUTES.CONTACT}
          title="Quiero saber mas"
          className="mt-8 text-purple-light"
        >
          Mas Info
        </Link>
      </div>
    </div>
  );
};

export default HeroThreeCard;
