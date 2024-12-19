import Image, { ImageProps } from "next/image";

function getStrapiURL() {
  return process.env.STRAPI_URL ?? "http://localhost:1337";
}

function getStrapiMedia(url: any) {
  if (typeof url !== "string" || !url) {
    console.warn("Invalid URL passed to getStrapiMedia:", url);
  }

  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}

interface StrapiImageProps extends ImageProps {
  src: string;
}

export default function StrapiImage({ src, ...rest }: StrapiImageProps) {
  if (typeof src !== "string" || !src) {
    console.warn("StrapiImage received invalid src:", src);
    return null;
  }

  return <Image src={getStrapiMedia(src)} {...rest} alt="strapi-img" />;
}
