import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/hero";
import {
  CtaSection,
  FeaturesSection,
  FounderSection,
  PlatformSection,
  PrinciplesSection,
  TrustStrip,
} from "@/components/home/home-sections";
import { Shell } from "@/components/site/shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Shell>
      <main>
        <Hero />
        <TrustStrip />
        <PlatformSection />
        <FeaturesSection />
        <PrinciplesSection />
        <FounderSection />
        <CtaSection />
      </main>
    </Shell>
  );
}
