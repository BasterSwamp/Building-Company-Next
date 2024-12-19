import Image from "next/image";

interface CardProps {
  image: string;
  name: string;
  position: string;
}

export default function Card({ image, name, position }: CardProps) {
  return (
    <>
      <div className="relative h-96 md:h-52">
        <Image src={image} alt="manager" fill className="object-cover" />
      </div>

      <h5 className="mt-1">{name}</h5>
      <p>{position}</p>
    </>
  );
}
