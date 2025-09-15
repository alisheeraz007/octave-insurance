"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Testimonials() {
  const testimonials = [
    {
      name: "Margaret Johnson",
      age: "Age 67",
      location: "Springfield",
      rating: 5,
      text: "Octave Insurance made Medicare so much easier to understand. They found me a supplement plan that saved me hundreds of dollars while giving me better coverage. I couldn't be happier!",
      image: "/professional-headshot-of-smiling-senior-woman.jpg",
    },
    {
      name: "Robert Chen",
      age: "Age 72",
      location: "Riverside",
      rating: 5,
      text: "The team at Octave Insurance is incredibly knowledgeable and patient. They walked me through every option and helped me choose the perfect Medicare Advantage plan for my needs.",
      image: "/professional-headshot-of-smiling-senior-man.jpg",
    },
    {
      name: "Dorothy Williams",
      age: "Age 69",
      location: "Oakville",
      rating: 5,
      text: "I was overwhelmed by all the Medicare choices until I found Octave Insurance. They simplified everything and found me great coverage at a price I could afford. Highly recommend!",
      image: "/professional-headshot-of-smiling-senior-woman-with.jpg",
    },
    {
      name: "James Martinez",
      age: "Age 74",
      location: "Westfield",
      rating: 5,
      text: "Excellent service from start to finish. They helped me with both Medicare supplement and final expense insurance. The peace of mind is worth everything.",
      image: "/professional-headshot-of-smiling-senior-man-with-b.jpg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
              Octave Insurance.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in-up" delay={200}>
          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 rounded-full object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 fill-white text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg lg:text-xl text-muted-foreground mb-6 text-pretty italic leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </blockquote>
                    <div className="text-foreground font-semibold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].age} • {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary scale-125"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
