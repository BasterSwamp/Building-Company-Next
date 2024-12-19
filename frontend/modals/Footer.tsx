import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { BsLinkedin, BsTelegram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-4 border-t-1 border-neutral-700">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-4">
          <Logo />
          <p className="text-xs text-neutral-400 font-semibold">
            &copy; {new Date().getFullYear()}. Made by{" "}
            <a
              href="https://www.linkedin.com/in/valerii-mikulin/"
              target="_blank"
            >
              BasterDev
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/valerii-mikulin/"
              target="_blank"
            >
              <BsLinkedin size="24" />
            </a>
            <a href="https://t.me/ValeriiMikulin" target="_blank">
              <BsTelegram size="24" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
