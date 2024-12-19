import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface FilteringProps {
  page: string | string[];
  perPage: string | string[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
}

export default function PaginationControl({
  page,
  perPage,
  hasNextPage,
  hasPrevPage,
  totalPages,
}: FilteringProps) {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex space-x-2">
        <Link
          href={`/projects?page=${Number(page) - 1}&per_page=${perPage}`}
          className={`flex items-center px-4 py-2 rounded-l-md border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors ${
            !hasPrevPage ? "pointer-events-none opacity-50" : ""
          }`}
        >
          <FaArrowLeft />
        </Link>
        {[...Array(totalPages)].map((_, i) => {
          const currentPage = i + 1;
          return (
            <Link
              key={`page-${i}`}
              href={`/projects?page=${currentPage}&per_page=${perPage}`}
              className={`px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors ${
                Number(page) === currentPage ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {currentPage}
            </Link>
          );
        })}
        <Link
          href={`/projects?page=${Number(page) + 1}&per_page=${perPage}`}
          className={`flex items-center px-4 py-2 rounded-l-md border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors ${
            !hasNextPage ? "pointer-events-none opacity-50" : ""
          }`}
        >
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
