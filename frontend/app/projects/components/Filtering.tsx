"use client";

import { SearchParams } from "@/types/route";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface FilteringProps {
  years: string[];
  locations: string[];
}

export default function Filtering({ years, locations }: FilteringProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    params.set(SearchParams.PAGE, "1");

    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className="flex gap-4 mb-8">
      <select
        name="year"
        className="border border-gray-300 rounded-md px-4 py-2"
        onChange={handleChange}
        defaultValue={searchParams.get(SearchParams.YEAR) as string}
      >
        <option value="">Filter bt Year</option>
        {years.map((year, i) => (
          <option key={`${i}-${year}`} value={year}>
            {year}
          </option>
        ))}
      </select>
      <select
        name="location"
        className="border border-gray-300 rounded-md px-4 py-2"
        onChange={handleChange}
        defaultValue={searchParams.get(SearchParams.LOCATION) as string}
      >
        <option value="">Filter bt Location</option>
        {locations.map((location, i) => (
          <option key={`${i}-${location}`} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
}
