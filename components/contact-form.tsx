"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    insuranceType: "",
    currentCoverage: "",
    message: "",
    preferredContact: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this to your backend or email service
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Request Your Free Consultation</CardTitle>
        <p className="text-muted-foreground">
          Fill out the form below and we'll contact you within 24 hours to discuss your insurance needs.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Age and Insurance Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Select onValueChange={(value) => handleInputChange("age", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-50">Under 50</SelectItem>
                  <SelectItem value="50-59">50-59</SelectItem>
                  <SelectItem value="60-64">60-64</SelectItem>
                  <SelectItem value="65-69">65-69</SelectItem>
                  <SelectItem value="70-74">70-74</SelectItem>
                  <SelectItem value="75-plus">75+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="insuranceType">Insurance Interest *</Label>
              <Select onValueChange={(value) => handleInputChange("insuranceType", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select insurance type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medicare-supplement">Medicare Supplement</SelectItem>
                  <SelectItem value="medicare-advantage">Medicare Advantage</SelectItem>
                  <SelectItem value="final-expense">Final Expense Insurance</SelectItem>
                  <SelectItem value="multiple">Multiple Types</SelectItem>
                  <SelectItem value="not-sure">Not Sure - Need Guidance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Current Coverage */}
          <div className="space-y-2">
            <Label htmlFor="currentCoverage">Current Insurance Coverage</Label>
            <Select onValueChange={(value) => handleInputChange("currentCoverage", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your current coverage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No current coverage</SelectItem>
                <SelectItem value="original-medicare">Original Medicare only</SelectItem>
                <SelectItem value="medicare-supplement">Medicare + Supplement</SelectItem>
                <SelectItem value="medicare-advantage">Medicare Advantage</SelectItem>
                <SelectItem value="employer">Employer/Group coverage</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Preferred Contact Method */}
          <div className="space-y-2">
            <Label htmlFor="preferredContact">Preferred Contact Method</Label>
            <Select onValueChange={(value) => handleInputChange("preferredContact", value)}>
              <SelectTrigger>
                <SelectValue placeholder="How would you like us to contact you?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="phone">Phone Call</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="text">Text Message</SelectItem>
                <SelectItem value="any">Any Method</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message or Questions</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your specific needs or any questions you have..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={4}
            />
          </div>

          {/* Newsletter Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
            />
            <Label htmlFor="newsletter" className="text-sm">
              I'd like to receive helpful insurance tips and updates via email
            </Label>
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full">
            Send Message
            <Send className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to be contacted by Octave Insurance Agency regarding your insurance
            needs. We respect your privacy and will never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
