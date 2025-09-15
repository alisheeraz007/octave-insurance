import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Shield, Clock } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function WhoWeAre() {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We understand that insurance decisions affect real lives. Our approach is always caring and patient.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our licensed professionals have decades of combined experience in Medicare and insurance planning.",
    },
    {
      icon: Shield,
      title: "Trusted Protection",
      description: "We work with top-rated insurance carriers to ensure you get reliable coverage you can count on.",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Questions don't wait for business hours. We're here when you need us most.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Who We Are</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Octave Insurance Agency is your dedicated partner in navigating the complex world of Medicare and
              insurance. We're committed to providing personalized solutions that fit your unique needs and budget.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
