import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { OurStory } from "@/components/our-story"
import { TeamSection } from "@/components/team-section"
import { ValuesSection } from "@/components/values-section"
import { CallToAction } from "@/components/call-to-action"

export const metadata = {
  title: "About Us - Octave Insurance Agency",
  description:
    "Learn about Octave Insurance Agency's mission, values, and experienced team dedicated to providing exceptional Medicare and insurance services.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero />
        <OurStory />
        <ValuesSection />
        {/* <TeamSection /> */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
