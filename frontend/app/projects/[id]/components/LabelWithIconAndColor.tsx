import Image from "next/image";

interface LabelWithIconAndColorProps {
  icon: string;
  alt: string;
  text: string | number;
}

export default function LabelWithIconAndColor({
  icon,
  alt,
  text,
}: LabelWithIconAndColorProps) {
  return (
    <div className="flex items-center gap-2 p-2 bg-primary">
      <Image src={icon} alt={alt} width={24} height={24} />

      <p className="text-sm">{text}</p>
    </div>
  );
}
