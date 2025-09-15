import { Card, CardContent } from "@/components/ui/card"
import { Shield, Heart, Users, Award, Clock, CheckCircle } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We operate with complete honesty and transparency in all our dealings, always putting our clients' interests first.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We understand that insurance decisions can be overwhelming, and we approach every client with empathy and patience.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description:
        "Every client receives individual attention and customized solutions tailored to their specific needs and circumstances.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from our product knowledge to our customer service standards.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "Our clients can count on us to be there when they need us most, providing consistent and dependable support.",
    },
    {
      icon: CheckCircle,
      title: "Commitment",
      description:
        "We're committed to building long-term relationships and providing ongoing support throughout our clients' insurance journey.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            These values guide everything we do and shape how we serve our clients every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
