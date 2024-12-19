import { Route } from "@/types/route";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="px-16 py-4 bg-primary text-white text-xl w-full md:w-auto font-semibold"
      {...rest}
    >
      {children ? children : <Link href={Route.CONTACT}>Contact Us</Link>}
    </button>
  );
}
