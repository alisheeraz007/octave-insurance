import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VerticalsHero } from "@/components/verticals-hero"
import { MedicareSupplementSection } from "@/components/medicare-supplement-section"
import { MedicareAdvantageSection } from "@/components/medicare-advantage-section"
import { FinalExpenseSection } from "@/components/final-expense-section"
import { ComparisonSection } from "@/components/comparison-section"
import { CallToAction } from "@/components/call-to-action"

export const metadata = {
  title: "Insurance Services - Medicare Supplement, Advantage & Final Expense | Octave Insurance",
  description:
    "Explore our comprehensive insurance services including Medicare supplement, Medicare advantage, and final expense insurance. Expert guidance for all your coverage needs.",
}

export default function VerticalsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <VerticalsHero />
        <MedicareSupplementSection />
        <MedicareAdvantageSection />
        <FinalExpenseSection />
        <ComparisonSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
