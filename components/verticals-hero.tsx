import { Card, CardContent } from "@/components/ui/card"
import { Plus, Users, DollarSign } from "lucide-react"

export function VerticalsHero() {
  const services = [
    {
      icon: Plus,
      title: "Medicare Supplement",
      description: "Fill the gaps in Original Medicare coverage",
    },
    {
      icon: Users,
      title: "Medicare Advantage",
      description: "All-in-one alternative to Original Medicare",
    },
    {
      icon: DollarSign,
      title: "Final Expense",
      description: "Affordable life insurance for final costs",
    },
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our <span className="text-primary">Insurance Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We specialize in three essential areas of insurance coverage to provide comprehensive protection for you and
            your family. Each service is designed to meet specific needs and life stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-pretty">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
