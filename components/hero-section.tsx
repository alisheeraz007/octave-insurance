import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Award } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted/30 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollAnimation animation="fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Your Trusted Partner for{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Medicare & Insurance
              </span>{" "}
              Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Navigate Medicare with confidence. We specialize in Medicare supplement, Medicare advantage, and final
              expense insurance to protect what matters most to you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8 group hover:shadow-lg transition-all duration-300">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center group">
                <Shield className="w-5 h-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center group">
                <Users className="w-5 h-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
                <span>1000+ Happy Clients</span>
              </div>
              <div className="flex items-center group">
                <Award className="w-5 h-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
                <span>A+ BBB Rating</span>
              </div>
            </div>
          </ScrollAnimation>

          {/* Hero Image */}
          <ScrollAnimation animation="slide-in-left" delay={200}>
            <div className="relative group">
              <img
                src="/professional-insurance-agent-helping-senior-couple.jpg"
                alt="Professional insurance consultation"
                className="rounded-2xl shadow-2xl w-full h-auto group-hover:shadow-3xl transition-shadow duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-border group-hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div
                className="absolute top-1/4 -left-2 w-4 h-4 bg-secondary/30 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
