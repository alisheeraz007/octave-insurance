import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar, Phone } from "lucide-react"

export function OfficeHours() {
  const hours = [
    { day: "Monday", hours: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
    { day: "Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-foreground flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Office Hours
        </CardTitle>
        <p className="text-muted-foreground">When you can reach us</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {hours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
              <span className="font-medium text-foreground">{schedule.day}</span>
              <span className={`text-sm ${schedule.hours === "Closed" ? "text-muted-foreground" : "text-foreground"}`}>
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Appointments available outside regular hours</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Phone className="w-4 h-4 mr-2" />
            <span>Emergency support: (555) 123-4567</span>
          </div>
        </div>

        <div className="bg-primary/5 p-4 rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">Need to meet outside these hours?</h4>
          <p className="text-sm text-muted-foreground">
            We understand that insurance decisions can't always wait for business hours. Contact us to schedule an
            appointment that works with your schedule.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
