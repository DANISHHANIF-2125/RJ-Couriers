"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, User, Package, MapPin } from "lucide-react"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    // Sender Information
    senderName: "",
    senderCompany: "",
    senderEmail: "",
    senderPhone: "",
    senderAddress: "",
    senderCity: "",
    senderState: "",
    senderZip: "",

    // Recipient Information
    recipientName: "",
    recipientCompany: "",
    recipientEmail: "",
    recipientPhone: "",
    recipientAddress: "",
    recipientCity: "",
    recipientState: "",
    recipientZip: "",

    // Package Information
    service: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    value: "",
    description: "",

    // Additional Services
    insurance: false,
    signatureRequired: false,
    saturdayDelivery: false,

    // Special Instructions
    specialInstructions: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
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
                <FileText className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-2">Quote Request Submitted!</h1>
                <p className="text-muted-foreground">
                  Thank you for your quote request. Our team will review your requirements and send you a detailed quote
                  within 2 business hours.
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Reference Number:</strong> RJQ-{Date.now().toString().slice(-6)}
                </p>
                <p className="text-sm mt-1">You will receive a confirmation email at {formData.senderEmail}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1">
                  <a href="/">Return Home</a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      senderName: "",
                      senderCompany: "",
                      senderEmail: "",
                      senderPhone: "",
                      senderAddress: "",
                      senderCity: "",
                      senderState: "",
                      senderZip: "",
                      recipientName: "",
                      recipientCompany: "",
                      recipientEmail: "",
                      recipientPhone: "",
                      recipientAddress: "",
                      recipientCity: "",
                      recipientState: "",
                      recipientZip: "",
                      service: "",
                      weight: "",
                      length: "",
                      width: "",
                      height: "",
                      value: "",
                      description: "",
                      insurance: false,
                      signatureRequired: false,
                      saturdayDelivery: false,
                      specialInstructions: "",
                    })
                  }}
                >
                  New Quote
                </Button>
              </div>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-balance">Get Your Shipping Quote</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Fill out the form below and we'll provide you with a detailed shipping quote
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Sender Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Sender Information</span>
              </CardTitle>
              <CardDescription>Information about the person or company sending the package</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="senderName">Full Name *</Label>
                  <Input
                    id="senderName"
                    required
                    value={formData.senderName}
                    onChange={(e) => handleInputChange("senderName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senderCompany">Company (Optional)</Label>
                  <Input
                    id="senderCompany"
                    value={formData.senderCompany}
                    onChange={(e) => handleInputChange("senderCompany", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="senderEmail">Email Address *</Label>
                  <Input
                    id="senderEmail"
                    type="email"
                    required
                    value={formData.senderEmail}
                    onChange={(e) => handleInputChange("senderEmail", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senderPhone">Phone Number *</Label>
                  <Input
                    id="senderPhone"
                    type="tel"
                    required
                    value={formData.senderPhone}
                    onChange={(e) => handleInputChange("senderPhone", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="senderAddress">Street Address *</Label>
                <Input
                  id="senderAddress"
                  required
                  value={formData.senderAddress}
                  onChange={(e) => handleInputChange("senderAddress", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="senderCity">City *</Label>
                  <Input
                    id="senderCity"
                    required
                    value={formData.senderCity}
                    onChange={(e) => handleInputChange("senderCity", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senderState">State *</Label>
                  <Input
                    id="senderState"
                    required
                    value={formData.senderState}
                    onChange={(e) => handleInputChange("senderState", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senderZip">ZIP Code *</Label>
                  <Input
                    id="senderZip"
                    required
                    value={formData.senderZip}
                    onChange={(e) => handleInputChange("senderZip", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recipient Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Recipient Information</span>
              </CardTitle>
              <CardDescription>Information about the person or company receiving the package</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="recipientName">Full Name *</Label>
                  <Input
                    id="recipientName"
                    required
                    value={formData.recipientName}
                    onChange={(e) => handleInputChange("recipientName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipientCompany">Company (Optional)</Label>
                  <Input
                    id="recipientCompany"
                    value={formData.recipientCompany}
                    onChange={(e) => handleInputChange("recipientCompany", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="recipientEmail">Email Address</Label>
                  <Input
                    id="recipientEmail"
                    type="email"
                    value={formData.recipientEmail}
                    onChange={(e) => handleInputChange("recipientEmail", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipientPhone">Phone Number *</Label>
                  <Input
                    id="recipientPhone"
                    type="tel"
                    required
                    value={formData.recipientPhone}
                    onChange={(e) => handleInputChange("recipientPhone", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="recipientAddress">Street Address *</Label>
                <Input
                  id="recipientAddress"
                  required
                  value={formData.recipientAddress}
                  onChange={(e) => handleInputChange("recipientAddress", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="recipientCity">City *</Label>
                  <Input
                    id="recipientCity"
                    required
                    value={formData.recipientCity}
                    onChange={(e) => handleInputChange("recipientCity", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipientState">State *</Label>
                  <Input
                    id="recipientState"
                    required
                    value={formData.recipientState}
                    onChange={(e) => handleInputChange("recipientState", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipientZip">ZIP Code *</Label>
                  <Input
                    id="recipientZip"
                    required
                    value={formData.recipientZip}
                    onChange={(e) => handleInputChange("recipientZip", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Package Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="h-5 w-5" />
                <span>Package Information</span>
              </CardTitle>
              <CardDescription>Details about your package and shipping preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="service">Service Type *</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select shipping service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="express">Express Delivery (1-2 days)</SelectItem>
                    <SelectItem value="standard">Standard Shipping (3-5 days)</SelectItem>
                    <SelectItem value="international">International (5-10 days)</SelectItem>
                    <SelectItem value="bulk">Bulk Shipping (Custom)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (lbs) *</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    required
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="length">Length (in) *</Label>
                  <Input
                    id="length"
                    type="number"
                    required
                    value={formData.length}
                    onChange={(e) => handleInputChange("length", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="width">Width (in) *</Label>
                  <Input
                    id="width"
                    type="number"
                    required
                    value={formData.width}
                    onChange={(e) => handleInputChange("width", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height (in) *</Label>
                  <Input
                    id="height"
                    type="number"
                    required
                    value={formData.height}
                    onChange={(e) => handleInputChange("height", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="value">Package Value ($)</Label>
                  <Input
                    id="value"
                    type="number"
                    step="0.01"
                    value={formData.value}
                    onChange={(e) => handleInputChange("value", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Package Description *</Label>
                  <Input
                    id="description"
                    required
                    placeholder="e.g., Electronics, Clothing, Documents"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                  />
                </div>
              </div>

              {/* Additional Services */}
              <div className="space-y-4">
                <Label>Additional Services</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="insurance"
                      checked={formData.insurance}
                      onCheckedChange={(checked) => handleInputChange("insurance", checked as boolean)}
                    />
                    <Label htmlFor="insurance" className="text-sm">
                      Additional Insurance Coverage (+$2.99)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="signatureRequired"
                      checked={formData.signatureRequired}
                      onCheckedChange={(checked) => handleInputChange("signatureRequired", checked as boolean)}
                    />
                    <Label htmlFor="signatureRequired" className="text-sm">
                      Signature Required (+$3.99)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="saturdayDelivery"
                      checked={formData.saturdayDelivery}
                      onCheckedChange={(checked) => handleInputChange("saturdayDelivery", checked as boolean)}
                    />
                    <Label htmlFor="saturdayDelivery" className="text-sm">
                      Saturday Delivery (+$12.99)
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialInstructions">Special Instructions</Label>
                <Textarea
                  id="specialInstructions"
                  placeholder="Any special handling instructions or delivery notes..."
                  value={formData.specialInstructions}
                  onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy. We'll send your quote
                  to the email address provided above.
                </p>
                <Button type="submit" size="lg" className="w-full md:w-auto px-8" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Get My Quote"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>

      <Footer />
    </div>
  )
}
