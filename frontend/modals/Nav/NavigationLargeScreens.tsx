"use client";

import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { useEffect, useState } from "react";
import Links from "./Links";

export default function NavigationLargeScreens() {
  const [isAboveThreshold, setIsAboveThreshold] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsAboveThreshold(window.scrollY > 50);
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <nav
      className={`hidden md:block fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isAboveThreshold ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <Logo />

          <Links />
        </div>
      </Container>
    </nav>
  );
}
