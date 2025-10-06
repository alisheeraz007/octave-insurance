import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactHero() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our insurance experts",
      value: "(833) 535-0060",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your questions anytime",
      value: "Info@octaveinsuranceagency.com",
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Meet with us in person at our office",
      value: "350 Camino Gardens Blvd., Boca Raton, FL 33423",
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Schedule",
      description: "Book a convenient consultation time",
      value: "Free consultation available",
      action: "Schedule Now",
    },
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Get in <span className="text-primary">Touch</span> With Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Ready to explore your insurance options? We're here to help you find the perfect coverage for your needs.
            Contact us today for a free, no-obligation consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
              <p className="text-sm font-medium text-foreground mb-4">{method.value}</p>
              <button className="text-primary hover:underline text-sm font-medium">{method.action}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
