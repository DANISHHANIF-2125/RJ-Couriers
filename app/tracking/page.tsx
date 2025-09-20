"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Package, Truck, MapPin, Clock, CheckCircle, AlertCircle, Info } from "lucide-react"

// Mock tracking data
const mockTrackingData = {
  RJ123456789: {
    trackingNumber: "RJ123456789",
    status: "In Transit",
    estimatedDelivery: "2025-01-22",
    origin: "New York, NY",
    destination: "Los Angeles, CA",
    service: "Express Delivery",
    weight: "2.5 lbs",
    dimensions: '12" x 8" x 4"',
    events: [
      {
        date: "2025-01-20",
        time: "2:30 PM",
        location: "Phoenix, AZ",
        status: "In Transit",
        description: "Package is on the way to the next facility",
        icon: Truck,
      },
      {
        date: "2025-01-20",
        time: "8:15 AM",
        location: "Albuquerque, NM",
        status: "Departed Facility",
        description: "Departed from sorting facility",
        icon: Package,
      },
      {
        date: "2025-01-19",
        time: "11:45 PM",
        location: "Denver, CO",
        status: "Arrived at Facility",
        description: "Arrived at sorting facility",
        icon: MapPin,
      },
      {
        date: "2025-01-19",
        time: "3:20 PM",
        location: "New York, NY",
        status: "Picked Up",
        description: "Package picked up from sender",
        icon: CheckCircle,
      },
    ],
  },
  RJ987654321: {
    trackingNumber: "RJ987654321",
    status: "Delivered",
    estimatedDelivery: "2025-01-19",
    origin: "Chicago, IL",
    destination: "Miami, FL",
    service: "Standard Shipping",
    weight: "1.2 lbs",
    dimensions: '8" x 6" x 2"',
    events: [
      {
        date: "2025-01-19",
        time: "2:15 PM",
        location: "Miami, FL",
        status: "Delivered",
        description: "Package delivered to recipient",
        icon: CheckCircle,
      },
      {
        date: "2025-01-19",
        time: "9:30 AM",
        location: "Miami, FL",
        status: "Out for Delivery",
        description: "Package is out for delivery",
        icon: Truck,
      },
      {
        date: "2025-01-18",
        time: "6:45 PM",
        location: "Miami, FL",
        status: "Arrived at Facility",
        description: "Arrived at local delivery facility",
        icon: MapPin,
      },
    ],
  },
}

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingData, setTrackingData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleTrack = async () => {
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number")
      return
    }

    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      const data = mockTrackingData[trackingNumber as keyof typeof mockTrackingData]
      if (data) {
        setTrackingData(data)
        setError("")
      } else {
        setTrackingData(null)
        setError("Tracking number not found. Please check and try again.")
      }
      setIsLoading(false)
    }, 1000)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200"
      case "in transit":
      case "out for delivery":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "picked up":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-balance">Track Your Package</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Enter your tracking number to get real-time updates on your shipment
          </p>
        </div>

        {/* Tracking Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Enter Tracking Number</span>
            </CardTitle>
            <CardDescription>
              Your tracking number starts with "RJ" followed by 9 digits (e.g., RJ123456789)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="RJ123456789"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleTrack()}
              />
              <Button onClick={handleTrack} disabled={isLoading}>
                {isLoading ? "Tracking..." : "Track Package"}
              </Button>
            </div>
            {error && (
              <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-destructive" />
                <span className="text-destructive text-sm">{error}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Sample Tracking Numbers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Info className="h-5 w-5" />
              <span>Try These Sample Tracking Numbers</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => setTrackingNumber("RJ123456789")}>
                RJ123456789 (In Transit)
              </Button>
              <Button variant="outline" size="sm" onClick={() => setTrackingNumber("RJ987654321")}>
                RJ987654321 (Delivered)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tracking Results */}
        {trackingData && (
          <div className="space-y-6">
            {/* Package Summary */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Package className="h-5 w-5" />
                    <span>Package Details</span>
                  </CardTitle>
                  <Badge className={getStatusColor(trackingData.status)}>{trackingData.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Tracking Number</p>
                      <p className="font-mono text-lg">{trackingData.trackingNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Service</p>
                      <p>{trackingData.service}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Estimated Delivery</p>
                      <p className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{new Date(trackingData.estimatedDelivery).toLocaleDateString()}</span>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">From</p>
                      <p>{trackingData.origin}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">To</p>
                      <p>{trackingData.destination}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Weight & Dimensions</p>
                      <p>
                        {trackingData.weight} • {trackingData.dimensions}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Tracking History</CardTitle>
                <CardDescription>Latest updates for your package</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingData.events.map((event: any, index: number) => {
                    const Icon = event.icon
                    const isLatest = index === 0
                    const isDelivered = event.status.toLowerCase() === "delivered"

                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div
                          className={`p-2 rounded-full ${
                            isDelivered
                              ? "bg-green-100 text-green-600"
                              : isLatest
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className={`font-medium ${isLatest ? "text-primary" : ""}`}>{event.status}</p>
                            <div className="text-sm text-muted-foreground">
                              {event.date} • {event.time}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                          <p className="text-sm text-muted-foreground flex items-center space-x-1 mt-1">
                            <MapPin className="h-3 w-3" />
                            <span>{event.location}</span>
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Additional Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Report an Issue
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Contact Support
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Schedule Redelivery
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
