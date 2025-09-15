import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Calendar, ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Don't wait until it's too late. Get the Medicare coverage you deserve with expert guidance from Octave
                  Insurance Agency. Your peace of mind is just a phone call away.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    <span>Free consultation - no obligation</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-5 h-5 mr-3 text-primary" />
                    <span>Flexible scheduling to fit your needs</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="w-5 h-5 mr-3 text-primary" />
                    <span>Expert guidance every step of the way</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Call (555) 123-4567
                    <Phone className="ml-2 w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Schedule Online
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src="/professional-insurance-agent-on-phone-helping-clie.jpg"
                  alt="Insurance consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
