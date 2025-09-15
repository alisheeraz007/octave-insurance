import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Monthly Premium",
      supplement: "Higher",
      advantage: "Lower/None",
      finalExpense: "Very Low",
    },
    {
      feature: "Provider Network",
      supplement: "Any Medicare Provider",
      advantage: "Network Restrictions",
      finalExpense: "N/A",
    },
    {
      feature: "Prescription Coverage",
      supplement: "Separate Part D Needed",
      advantage: "Usually Included",
      finalExpense: "N/A",
    },
    {
      feature: "Extra Benefits",
      supplement: "None",
      advantage: "Dental, Vision, Wellness",
      finalExpense: "N/A",
    },
    {
      feature: "Out-of-Pocket Maximum",
      supplement: "None (Medicare limits)",
      advantage: "Annual Maximum",
      finalExpense: "N/A",
    },
    {
      feature: "Coverage Area",
      supplement: "Nationwide",
      advantage: "Service Area Only",
      finalExpense: "Nationwide",
    },
    {
      feature: "Medical Underwriting",
      supplement: "During Open Enrollment",
      advantage: "None",
      finalExpense: "Simplified/None",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Compare Our Insurance Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Understanding the differences between our insurance products helps you make the best choice for your needs
            and budget.
          </p>
        </div>

        <div className="overflow-x-auto">
          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-semibold text-foreground">Feature</th>
                    <th className="text-center p-6 font-semibold text-foreground">Medicare Supplement</th>
                    <th className="text-center p-6 font-semibold text-foreground">Medicare Advantage</th>
                    <th className="text-center p-6 font-semibold text-foreground">Final Expense</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={`border-b border-border ${index % 2 === 0 ? "bg-muted/20" : ""}`}>
                      <td className="p-6 font-medium text-foreground">{row.feature}</td>
                      <td className="p-6 text-center text-muted-foreground">{row.supplement}</td>
                      <td className="p-6 text-center text-muted-foreground">{row.advantage}</td>
                      <td className="p-6 text-center text-muted-foreground">{row.finalExpense}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Still not sure which option is right for you? Our experts are here to help you compare and choose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get personalized recommendations based on your specific needs
                </p>
                <button className="text-primary hover:underline font-medium">Schedule Now</button>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Compare Quotes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">See side-by-side comparisons of plans and pricing</p>
                <button className="text-primary hover:underline font-medium">Get Quotes</button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
