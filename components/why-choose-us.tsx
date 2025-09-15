import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star, Phone, FileText, Users, Award } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Star,
      title: "Personalized Service",
      description:
        "Every client receives individual attention and customized insurance solutions tailored to their specific needs and budget.",
    },
    {
      icon: Phone,
      title: "Local Expertise",
      description:
        "As a local agency, we understand your community's unique needs and provide face-to-face service you can trust.",
    },
    {
      icon: FileText,
      title: "Simplified Process",
      description:
        "We handle all the paperwork and complex details, making insurance enrollment easy and stress-free for you.",
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description:
        "Our relationship doesn't end at enrollment. We provide continuous support and annual reviews to ensure your coverage stays optimal.",
    },
    {
      icon: Award,
      title: "Top-Rated Carriers",
      description:
        "We partner only with A-rated insurance companies to ensure you receive reliable coverage and excellent customer service.",
    },
    {
      icon: CheckCircle,
      title: "No-Cost Consultation",
      description:
        "Our expert advice and consultation services are completely free. You pay nothing for our guidance and expertise.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Why Choose Octave Insurance?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            With so many insurance options available, here's what sets us apart and makes us the right choice for your
            insurance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm text-pretty">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
