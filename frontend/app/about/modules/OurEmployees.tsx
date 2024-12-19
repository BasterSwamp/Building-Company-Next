import SectionName from "@/components/SectionName";
import Card from "../components/Card";
import { people } from "@/utils/data.js";

export default function OurEmployees() {
  return (
    <div>
      <SectionName name="our employees" id="our-employees" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {people.map((person) => (
          <div key={person.name}>
            <Card {...person} />
          </div>
        ))}
      </div>
    </div>
  );
}
