import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, FileCheck, Shield } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: Phone,
      title: "Initial Consultation",
      description:
        "Contact us for a free, no-obligation consultation. We'll discuss your current situation, health needs, and budget to understand your requirements.",
    },
    {
      step: "02",
      icon: Calendar,
      title: "Personalized Review",
      description:
        "We'll schedule a convenient time to review your options. Our experts will compare plans from multiple carriers to find the best fit for you.",
    },
    {
      step: "03",
      icon: FileCheck,
      title: "Easy Enrollment",
      description:
        "Once you've chosen your plan, we handle all the paperwork and enrollment process. We make sure everything is completed accurately and on time.",
    },
    {
      step: "04",
      icon: Shield,
      title: "Ongoing Support",
      description:
        "Your coverage is active and we're here for ongoing support. We provide annual reviews and help with any questions or claims that arise.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Getting the right insurance coverage is simple with our streamlined process. Here's how we make it easy for
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
