import Container from "@/components/Container";
import SectionName from "@/components/SectionName";
import { Route } from "@/types/route";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const data = [
  {
    title: "GENERAL CONTRACTING",
    href: Route.GENERAL_CONTRACTING,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quidem ipsum repellat asperiores. Eligendi labore expedita suscipit neque asperiores, deleniti doloribus ducimus inventore itaque aliquid ipsum vero officia amet obcaecati?",
  },
  {
    title: "RENOVATION AND RESTORATION",
    href: Route.RENOVATION_AND_RESTORATION,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quidem ipsum repellat asperiores. Eligendi labore expedita suscipit neque asperiores, deleniti doloribus ducimus inventore itaque aliquid ipsum vero officia amet obcaecati?",
  },
  {
    title: "MONOLITHIC CONSTRUCTION",
    href: Route.MONOLITHIC_CONSTRUCTION,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quidem ipsum repellat asperiores. Eligendi labore expedita suscipit neque asperiores, deleniti doloribus ducimus inventore itaque aliquid ipsum vero officia amet obcaecati?",
  },
];

export default function Services() {
  return (
    <section>
      <Container>
        <SectionName name="Services" />
        <div className="grid grid-cols-1 md:grid-cols-3 text-white">
          {data.map((item, i) => {
            const isSecondItem = i === 1;

            return (
              <div
                key={item.title}
                className={`flex flex-col justify-between px-4 md:px-8 py-8 md:py-4 space-y-12 ${
                  isSecondItem ? "bg-white text-black" : "bg-primary"
                }`}
              >
                <h3>0{i + 1}</h3>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="flex justify-between">
                  <Link href={item.href}>
                    <button
                      className={`border-2 ${
                        isSecondItem ? "border-black" : "border-white"
                      } p-4 inline-block`}
                    >
                      <FaArrowRight size="24" />
                    </button>
                  </Link>

                  <div
                    className={`relative rounded-lg w-16 h-full border-2 ${
                      isSecondItem
                        ? "bg-primary border-primary"
                        : "bg-white border-white"
                    }`}
                  >
                    <div
                      className={`absolute w-full h-full right-2 bottom-2 ${
                        isSecondItem ? "bg-white" : "bg-primary"
                      } rounded-lg`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
