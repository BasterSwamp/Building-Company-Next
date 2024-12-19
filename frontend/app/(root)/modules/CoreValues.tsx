import Image from "next/image";
import { data } from "@/utils/data.js";

export default function CoreValues() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.map((item, i) => {
          const isSecondItem = i === 1;

          return (
            <div
              key={item.title}
              className={`flex flex-col items-center p-8 ${
                isSecondItem && "bg-primary text-black"
              }`}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div
                  className={`w-20 h-20 border-2 ${
                    isSecondItem ? "border-black" : "border-white"
                  } rounded-full flex items-center justify-center`}
                >
                  <Image src={item.img} alt="icon" width={34} height={34} />
                </div>
                <h3>{item.title}</h3>
                <p className="max-w-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
