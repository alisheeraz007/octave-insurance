import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plus, Users, DollarSign } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ServicesVerticals() {
  const services = [
    {
      icon: Plus,
      title: "Medicare Supplement",
      description:
        "Fill the gaps in Original Medicare with comprehensive Medigap coverage that helps pay for costs Medicare doesn't cover.",
      features: ["Covers deductibles & copays", "Nationwide coverage", "Choice of doctors", "Guaranteed renewable"],
      image: "/senior-couple-reviewing-medicare-supplement-insura.jpg",
    },
    {
      icon: Users,
      title: "Medicare Advantage",
      description:
        "All-in-one alternative to Original Medicare that often includes prescription drug coverage and extra benefits.",
      features: ["Prescription drug coverage", "Extra benefits included", "Lower monthly premiums", "Coordinated care"],
      image: "/healthcare-professional-explaining-medicare-advant.jpg",
    },
    {
      icon: DollarSign,
      title: "Final Expense Insurance",
      description:
        "Affordable life insurance designed to cover funeral costs and final expenses, providing peace of mind for your family.",
      features: ["No medical exam required", "Guaranteed acceptance", "Affordable premiums", "Quick approval process"],
      image: "/family-meeting-with-insurance-agent-about-final-ex.jpg",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Insurance Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We specialize in three key areas of insurance to provide comprehensive protection for you and your loved
              ones.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} animation="fade-in-up" delay={index * 150}>
              <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
