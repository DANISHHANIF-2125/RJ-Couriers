"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calculator, Package, Clock, Globe, Truck } from "lucide-react"

export default function CalculatorPage() {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    service: "",
  })
  const [quote, setQuote] = useState<any>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateShipping = () => {
    if (!formData.origin || !formData.destination || !formData.weight || !formData.service) {
      return
    }

    setIsCalculating(true)

    // Mock calculation
    setTimeout(() => {
      const baseRate = Number.parseFloat(formData.weight) * 2.5
      const serviceMultiplier = formData.service === "express" ? 2.5 : formData.service === "standard" ? 1 : 1.8
      const distanceMultiplier = formData.destination.toLowerCase().includes("international") ? 3 : 1

      const cost = baseRate * serviceMultiplier * distanceMultiplier
      const deliveryDays = formData.service === "express" ? "1-2" : formData.service === "standard" ? "3-5" : "5-10"

      setQuote({
        cost: cost.toFixed(2),
        deliveryTime: deliveryDays,
        service: formData.service,
        insurance: (cost * 0.02).toFixed(2),
        total: (cost + cost * 0.02).toFixed(2),
      })
      setIsCalculating(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-balance">Shipping Calculator</h1>
          <p className="text-xl text-muted-foreground text-pretty">Get instant shipping quotes for your packages</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5" />
                <span>Package Details</span>
              </CardTitle>
              <CardDescription>Enter your package information to get an accurate quote</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Origin & Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="origin">From (ZIP/City)</Label>
                  <Input
                    id="origin"
                    placeholder="10001 or New York, NY"
                    value={formData.origin}
                    onChange={(e) => handleInputChange("origin", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">To (ZIP/City)</Label>
                  <Input
                    id="destination"
                    placeholder="90210 or Los Angeles, CA"
                    value={formData.destination}
                    onChange={(e) => handleInputChange("destination", e.target.value)}
                  />
                </div>
              </div>

              {/* Package Dimensions */}
              <div className="space-y-4">
                <Label>Package Dimensions</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight" className="text-sm">
                      Weight (lbs)
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="2.5"
                      value={formData.weight}
                      onChange={(e) => handleInputChange("weight", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="length" className="text-sm">
                      Length (in)
                    </Label>
                    <Input
                      id="length"
                      type="number"
                      placeholder="12"
                      value={formData.length}
                      onChange={(e) => handleInputChange("length", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="width" className="text-sm">
                      Width (in)
                    </Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="8"
                      value={formData.width}
                      onChange={(e) => handleInputChange("width", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height" className="text-sm">
                      Height (in)
                    </Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="4"
                      value={formData.height}
                      onChange={(e) => handleInputChange("height", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <Label htmlFor="service">Service Type</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select shipping service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="express">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Express Delivery (1-2 days)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="standard">
                      <div className="flex items-center space-x-2">
                        <Package className="h-4 w-4" />
                        <span>Standard Shipping (3-5 days)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="international">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4" />
                        <span>International (5-10 days)</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={calculateShipping}
                className="w-full"
                disabled={
                  isCalculating || !formData.origin || !formData.destination || !formData.weight || !formData.service
                }
              >
                {isCalculating ? "Calculating..." : "Calculate Shipping Cost"}
              </Button>
            </CardContent>
          </Card>

          {/* Quote Results */}
          <div className="space-y-6">
            {quote ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Truck className="h-5 w-5" />
                    <span>Shipping Quote</span>
                  </CardTitle>
                  <CardDescription>Based on your package details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Service Type</span>
                    <Badge variant="secondary" className="capitalize">
                      {quote.service} Delivery
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Estimated Delivery</span>
                    <span className="font-medium">{quote.deliveryTime} business days</span>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Shipping Cost</span>
                      <span>${quote.cost}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Insurance (2%)</span>
                      <span>${quote.insurance}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total Cost</span>
                    <span className="text-primary">${quote.total}</span>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button className="w-full">Book This Shipment</Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Save Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="mx-auto bg-muted rounded-full p-4 w-fit">
                      <Calculator className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Ready to Calculate</h3>
                      <p className="text-sm text-muted-foreground">
                        Fill in the package details to get your shipping quote
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Service Features */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose RJCouriers?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Real-time tracking included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Package insurance available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">Secure handling guarantee</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
