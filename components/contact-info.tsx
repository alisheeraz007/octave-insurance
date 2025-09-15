import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Globe } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: "(555) 123-4567",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@octaveinsurance.com",
      description: "Send us your questions anytime",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Insurance Way, Suite 100\nYour City, ST 12345",
      description: "Visit us for in-person consultations",
    },
    {
      icon: Globe,
      label: "Service Area",
      value: "Statewide Coverage",
      description: "We serve clients throughout the state",
    },
  ]

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
        <p className="text-muted-foreground">Multiple ways to reach our insurance experts</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <detail.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">{detail.label}</h4>
              <p className="text-foreground mb-1 whitespace-pre-line">{detail.value}</p>
              <p className="text-sm text-muted-foreground">{detail.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
