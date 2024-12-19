import Image from "next/image";

interface LabelWithIconProps {
  text: string | number;
  alt: string;
  icon: string;
}

export default function LabelWithIcon({ text, alt, icon }: LabelWithIconProps) {
  return (
    <div className="flex items-center gap-2 p-2 bg-white">
      <Image src={icon} alt={alt} width={24} height={24} />

      <p className="text-sm">{text}</p>
    </div>
  );
}
