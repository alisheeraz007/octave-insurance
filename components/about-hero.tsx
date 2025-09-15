import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Heart } from "lucide-react"

export function AboutHero() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "1,000+" },
    { icon: Clock, label: "Years Experience", value: "15+" },
    { icon: Award, label: "Insurance Carriers", value: "25+" },
    { icon: Heart, label: "Client Satisfaction", value: "98%" },
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              About <span className="text-primary">Octave Insurance</span> Agency
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              For over 15 years, we've been dedicated to helping individuals and families navigate the complex world of
              Medicare and insurance. Our commitment to personalized service and expert guidance has made us a trusted
              partner in the community.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              We believe that everyone deserves access to quality healthcare coverage without the confusion and stress
              that often comes with insurance decisions. That's why we take the time to understand your unique needs and
              provide clear, honest guidance every step of the way.
            </p>
          </div>

          {/* Image */}
          <div className="animate-slide-in-left">
            <img
              src="/professional-insurance-agent-helping-senior-couple.jpg"
              alt="Insurance agent helping senior couple"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
