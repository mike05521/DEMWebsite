import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "/",
  "/sheet-laser-cutting",
  "/tube-laser-cutting",
  "/cnc-machining",
  "/forming",
  "/metal-stamping",
  "/welding",
  "/finishing-services",
  "/additional-services",
  "/quality",
  "/quote",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/quote" ? 0.9 : 0.7,
  }));
}
