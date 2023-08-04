import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import Input from "../components/Input.tsx";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  logo?: DecoImage;
  title?: string;
  /** @format textarea */
  headline?: string;
  links?: Array<Link>;
}

export default function Hero({
  title = "deco.cx",
  logo = "/logo.svg",
  headline =
    "The digital experience platform that combines performance and personalization for the ultimate sales results.",
  links = [
    { title: "Official website", "href": "https://deco.cx/" },
    { title: "Linkedin", "href": "https://www.linkedin.com/company/deco-cx/" },
    { title: "Discord", "href": "https://deco.cx/discord" },
  ],
}: Props) {
  return (
    <header class="lg:container mx-8 md:mx-16 lg:mx-auto mt-8 md:mt-12 mb-28 text-xl md:text-base">
      <Input />
    </header>
  );
}
