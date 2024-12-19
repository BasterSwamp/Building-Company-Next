import Image from "next/image";

import starIcon from "@/public/star.png";

export default function Badge() {
  return (
    <div className="flex gap-2">
      <div className="flex item-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Image
            key={`star${i}`}
            src={starIcon}
            alt="star"
            width={16}
            height={16}
          />
        ))}
      </div>
      <p className="text-sm text-white font-bold">25+ successful projects</p>
    </div>
  );
}
