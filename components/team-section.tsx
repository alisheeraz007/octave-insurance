import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Sarah Johnson",
      title: "Founder & Senior Insurance Advisor",
      experience: "15+ years experience",
      specialties: ["Medicare Supplement", "Medicare Advantage", "Final Expense"],
      bio: "Sarah founded Octave Insurance with a passion for helping seniors navigate Medicare. She holds multiple insurance licenses and is committed to providing honest, personalized guidance.",
      image: "/professional-headshot-of-smiling-senior-woman.jpg",
      email: "sarah@octaveinsurance.com",
      phone: "(555) 123-4567",
    },
    {
      name: "Michael Chen",
      title: "Senior Insurance Specialist",
      experience: "12+ years experience",
      specialties: ["Medicare Plans", "Health Insurance", "Life Insurance"],
      bio: "Michael brings over a decade of insurance expertise to our team. He specializes in helping clients understand complex insurance products and finding the right coverage.",
      image: "/professional-headshot-of-smiling-senior-man.jpg",
      email: "michael@octaveinsurance.com",
      phone: "(555) 123-4568",
    },
    {
      name: "Lisa Rodriguez",
      title: "Client Relations Manager",
      experience: "8+ years experience",
      specialties: ["Customer Service", "Claims Support", "Policy Management"],
      bio: "Lisa ensures our clients receive exceptional ongoing support. She manages client relationships and helps with any questions or concerns that arise after enrollment.",
      image: "/professional-headshot-of-smiling-senior-woman-with.jpg",
      email: "lisa@octaveinsurance.com",
      phone: "(555) 123-4569",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Meet Our Expert Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our experienced professionals are here to guide you through every step of your insurance journey with
            expertise and care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.title}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 text-pretty">{member.bio}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{member.phone}</span>
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
