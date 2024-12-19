import SectionName from "@/components/SectionName";
import Card from "../components/Card";
import { managers } from "@/utils/data.js";

export default function OurManagement() {
  return (
    <div>
      <SectionName name="our management" id="our-management" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {managers.map((manager) => (
          <div key={manager.name}>
            <Card {...manager} />
          </div>
        ))}
      </div>
    </div>
  );
}
