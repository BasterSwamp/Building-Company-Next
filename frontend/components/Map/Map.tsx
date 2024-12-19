"use client";
import dynamic from "next/dynamic";

const MapNoSSR = dynamic(() => import("./MapLeaflet"), {
  ssr: false,
});

export default function Page() {
  return <MapNoSSR />;
}
