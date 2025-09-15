import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Lightbulb } from "lucide-react"

export function OurStory() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Octave Insurance Agency was founded with a simple mission: to make insurance accessible, understandable,
              and affordable for everyone. Our founder, after witnessing family members struggle with Medicare
              decisions, realized there was a need for an agency that truly puts clients first.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              What started as a small local practice has grown into a trusted agency serving hundreds of families across
              the region. Despite our growth, we've never lost sight of our core values: integrity, compassion, and
              excellence in service.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              Today, we continue to evolve and adapt to meet the changing needs of our clients while maintaining the
              personal touch that has always defined our approach to insurance.
            </p>
          </div>
          <div>
            <img
              src="/professional-insurance-agent-on-phone-helping-clie.jpg"
              alt="Insurance professional helping clients"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-pretty">
                To provide personalized insurance solutions that protect our clients' health, financial security, and
                peace of mind through expert guidance and exceptional service.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-pretty">
                To be the most trusted insurance agency in our community, known for our integrity, expertise, and
                unwavering commitment to our clients' best interests.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Approach</h3>
              <p className="text-muted-foreground text-pretty">
                We believe in education over sales pressure. Our approach is to inform, guide, and support our clients
                in making the best insurance decisions for their unique situations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
