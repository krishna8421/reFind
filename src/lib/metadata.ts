import type { Metadata } from "next/types";
import { SITE_URL } from "./constant";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: SITE_URL,
      images: `${SITE_URL}/og.png`,
      siteName: "reFind",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@krishnaaa8421",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: `${SITE_URL}/og.png`,
      ...override.twitter,
    },
  };
}