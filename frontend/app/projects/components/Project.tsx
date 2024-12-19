import LabelWithIcon from "./LabelWithIcon";
import StrapiImage from "@/frontend/components/StrapiImage";

interface ProjectProps {
  title: string;
  year: string | number;
  location: string;
  images: string[];
}

export default function Project({
  title,
  year,
  location,
  images,
}: ProjectProps) {
  return (
    <div>
      <div className="relative h-56 w-full transform transition-transform hover:scale-105 hover:opacity-70">
        <StrapiImage
          src={images[0]}
          alt="project image"
          fill
          className="object-cover"
        />

        <div className="absolute bottom-1 right-1 gap-1">
          <div className="flex gap-1">
            <LabelWithIcon
              text={location}
              icon="/location.png"
              alt="location"
            />
            <LabelWithIcon text={year} icon="/calendar.png" alt="calendar" />
          </div>
        </div>
      </div>

      <p className="mt-2 text-xl font-semibold">{title}</p>
    </div>
  );
}
