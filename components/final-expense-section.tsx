import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, DollarSign, ArrowRight, Clock, Shield, Heart } from "lucide-react"

export function FinalExpenseSection() {
  const benefits = [
    "No medical exam required for most applicants",
    "Guaranteed acceptance for ages 50-85",
    "Affordable monthly premiums starting at $15/month",
    "Coverage amounts from $5,000 to $50,000",
    "Immediate coverage available",
    "Premiums never increase",
    "Cash value builds over time",
    "Beneficiaries receive tax-free death benefit",
  ]

  const features = [
    {
      icon: Clock,
      title: "Quick Approval",
      description: "Most applications approved within 24-48 hours with no waiting period",
    },
    {
      icon: Shield,
      title: "Guaranteed Coverage",
      description: "Cannot be cancelled as long as premiums are paid on time",
    },
    {
      icon: Heart,
      title: "Peace of Mind",
      description: "Ensures your family won't be burdened with funeral and final expenses",
    },
  ]

  const coverageAmounts = [
    { amount: "$5,000", monthly: "$15", description: "Basic coverage for final expenses" },
    { amount: "$10,000", monthly: "$25", description: "Standard coverage for most needs", popular: true },
    { amount: "$25,000", monthly: "$45", description: "Comprehensive coverage and debt relief" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Final Expense Insurance</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Final Expense Insurance is a type of whole life insurance designed to cover end-of-life expenses such as
              funeral costs, medical bills, and other final expenses. It provides peace of mind knowing your loved ones
              won't be financially burdened.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              With simplified underwriting and guaranteed acceptance options, final expense insurance is accessible to
              most people, regardless of health conditions.
            </p>
            <Button size="lg">
              Get Final Expense Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <div>
            <img
              src="/family-meeting-with-insurance-agent-about-final-ex.jpg"
              alt="Family meeting with insurance agent about final expense"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Final Expense Insurance Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coverage Options */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Coverage Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageAmounts.map((option, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${option.popular ? "ring-2 ring-primary" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-primary">{option.amount}</CardTitle>
                    {option.popular && (
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">Starting at {option.monthly}/month</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{option.description}</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Get Quote for {option.amount}
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
