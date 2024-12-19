import { Route } from "@/types/route";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={Route.HOME}>
      <Image src="/logo2.png" alt="logo" width={40} height={40} />
    </Link>
  );
}
