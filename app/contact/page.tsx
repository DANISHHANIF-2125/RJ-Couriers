"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageSquare, HeadphonesIcon, FileText } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Card>
            <CardContent className="pt-6 text-center space-y-6">
              <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                <MessageSquare className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-2">Message Sent Successfully!</h1>
                <p className="text-muted-foreground">
                  Thank you for contacting RJCouriers. We've received your message and will respond within 24 hours
                  during business days.
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Reference Number:</strong> RJC-{Date.now().toString().slice(-6)}
                </p>
                <p className="text-sm mt-1">You will receive a confirmation email at {formData.email}</p>
              </div>
              <Button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    subject: "",
                    message: "",
                    inquiryType: "",
                  })
                }}
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">Contact RJCouriers</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Get in touch with our team for shipping solutions, support, or any questions about our services. We're here
            to help 24/7.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Choose the best way to reach us. Our customer service team is available 24/7 to assist with your
                shipping needs.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone Support</h3>
                      <p className="text-sm text-muted-foreground mb-2">Speak directly with our support team</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">24/7 Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Support</h3>
                      <p className="text-sm text-muted-foreground mb-2">Send us a detailed message</p>
                      <p className="font-medium">support@rjcouriers.com</p>
                      <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Live Chat</h3>
                      <p className="text-sm text-muted-foreground mb-2">Instant support for quick questions</p>
                      <Button size="sm" className="mt-2">
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Main Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium">RJCouriers Headquarters</p>
                  <p className="text-sm text-muted-foreground">
                    123 Logistics Avenue
                    <br />
                    Suite 500
                    <br />
                    New York, NY 10001
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Fri: 8:00 AM - 8:00 PM EST</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Sat-Sun: 9:00 AM - 5:00 PM EST</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleInputChange("inquiryType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Information</SelectItem>
                        <SelectItem value="quote">Shipping Quote</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                        <SelectItem value="tracking">Package Tracking</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="partnership">Business Partnership</SelectItem>
                        <SelectItem value="complaint">File a Complaint</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      placeholder="Please provide details about your inquiry..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I track my package?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can track your package using your tracking number on our tracking page. You'll also receive email
                  and SMS updates automatically.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are your delivery times?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Express delivery: 1-2 business days, Standard shipping: 3-5 business days, International: 5-10
                  business days depending on destination.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer insurance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, all packages include basic insurance up to $100. Additional coverage is available for valuable
                  items at a small additional cost.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I schedule a pickup?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer scheduled pickups at your location. Contact us to arrange a convenient pickup time that works
                  for your schedule.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What items can't be shipped?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We cannot ship hazardous materials, illegal items, or perishables. Contact us for a complete list of
                  restricted items.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I file a claim?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If your package is damaged or lost, contact our support team immediately. We'll guide you through the
                  claims process and resolve the issue quickly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Resources */}
        <div className="mt-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Support Resources</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Additional resources to help you with your shipping needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                  <FileText className="h-6 w-6" />
                </div>
                <CardTitle>Shipping Guide</CardTitle>
                <CardDescription>Complete guide to packaging and shipping best practices</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                  <HeadphonesIcon className="h-6 w-6" />
                </div>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>Step-by-step videos on using our services and tracking packages</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>Connect with other customers and get answers from the community</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Join Forum
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
