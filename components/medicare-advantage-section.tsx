import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, ArrowRight, Heart, Eye, Pill } from "lucide-react"

export function MedicareAdvantageSection() {
  const benefits = [
    "All Medicare Part A and B benefits included",
    "Often includes prescription drug coverage (Part D)",
    "May include dental, vision, and hearing benefits",
    "Wellness programs and preventive care",
    "Lower monthly premiums than Original Medicare + Supplement",
    "Annual out-of-pocket maximum for protection",
    "Coordinated care through provider networks",
    "Additional benefits like transportation or meal delivery",
  ]

  const extraBenefits = [
    {
      icon: Heart,
      title: "Wellness Programs",
      description: "Gym memberships, fitness classes, and health coaching",
    },
    {
      icon: Eye,
      title: "Vision & Dental",
      description: "Coverage for routine eye exams, glasses, and dental care",
    },
    {
      icon: Pill,
      title: "Prescription Drugs",
      description: "Built-in Part D prescription drug coverage",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/healthcare-professional-explaining-medicare-advant.jpg"
              alt="Healthcare professional explaining Medicare Advantage"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Medicare Advantage Plans</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Medicare Advantage (Part C) is an all-in-one alternative to Original Medicare. These plans are offered by
              private insurance companies approved by Medicare and include all Medicare Part A and B benefits.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Most Medicare Advantage plans include prescription drug coverage and offer extra benefits not covered by
              Original Medicare, often at lower monthly costs.
            </p>
            <Button size="lg">
              Compare Medicare Advantage Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Medicare Advantage Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Benefits */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Common Extra Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extraBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
