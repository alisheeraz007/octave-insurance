import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { OfficeHours } from "@/components/office-hours"

export const metadata = {
  title: "Contact Us - Octave Insurance Agency",
  description:
    "Get in touch with Octave Insurance Agency for Medicare supplement, Medicare advantage, and final expense insurance. Free consultations available.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactHero />
        <div className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <div className="space-y-8">
                <ContactInfo />
                <OfficeHours />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
