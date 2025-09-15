import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Plus, ArrowRight } from "lucide-react"

export function MedicareSupplementSection() {
  const benefits = [
    "Covers Medicare Part A and B deductibles",
    "Pays coinsurance and copayments",
    "Nationwide coverage - use any Medicare provider",
    "Guaranteed renewable for life",
    "No network restrictions",
    "Predictable monthly premiums",
    "Coverage for emergency travel abroad",
    "No prior authorization required",
  ]

  const plans = [
    {
      name: "Plan F",
      description: "Most comprehensive coverage available for those eligible",
      coverage: "100%",
      popular: false,
    },
    {
      name: "Plan G",
      description: "Excellent coverage with lower premiums than Plan F",
      coverage: "95%",
      popular: true,
    },
    {
      name: "Plan N",
      description: "Good coverage with the lowest premiums",
      coverage: "85%",
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Plus className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Medicare Supplement Insurance</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Medicare Supplement Insurance (Medigap) helps fill the "gaps" in Original Medicare coverage. These
              standardized plans help pay for costs that Medicare doesn't cover, such as copayments, coinsurance, and
              deductibles.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              With a Medicare Supplement plan, you can see any doctor or specialist who accepts Medicare, anywhere in
              the United States, without referrals or network restrictions.
            </p>
            <Button size="lg">
              Get Medicare Supplement Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <div>
            <img
              src="/senior-couple-reviewing-medicare-supplement-insura.jpg"
              alt="Senior couple reviewing Medicare supplement insurance"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Medicare Supplement Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Plans */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Popular Medicare Supplement Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${plan.popular ? "ring-2 ring-primary" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Medigap {plan.name}</CardTitle>
                    {plan.popular && (
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{plan.description}</p>
                  <div className="text-2xl font-bold text-primary mb-4">{plan.coverage} Coverage</div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More About Plan {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
