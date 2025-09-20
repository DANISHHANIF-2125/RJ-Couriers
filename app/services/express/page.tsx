import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, CheckCircle, ArrowRight, Shield, Bell, MapPin } from "lucide-react"

export default function ExpressServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-red-100 text-red-800">
                  Express Delivery
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">When Time Matters Most</h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Same-day and next-day delivery with priority handling and real-time tracking. Perfect for urgent
                  shipments and time-sensitive deliveries.
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">1-2</p>
                  <p className="text-sm text-muted-foreground">Business Days</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">99.5%</p>
                  <p className="text-sm text-muted-foreground">On-Time Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Tracking</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/calculator">
                    Get Express Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-red-100 rounded-2xl p-8">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Express+Delivery+Truck"
                  alt="Express delivery service"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Express Service Features</h2>
            <p className="text-xl text-muted-foreground text-pretty">Premium features designed for urgent deliveries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="bg-red-100 text-red-600 p-3 rounded-lg w-fit">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle>Same-Day Delivery</CardTitle>
                <CardDescription>Order by 2 PM for same-day delivery in major metropolitan areas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Available in 50+ cities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Cutoff time: 2:00 PM</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Delivery by 8:00 PM</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-red-100 text-red-600 p-3 rounded-lg w-fit">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle>Priority Handling</CardTitle>
                <CardDescription>Your packages receive special handling and priority processing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Dedicated express lanes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Fragile item protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Climate-controlled transport</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-red-100 text-red-600 p-3 rounded-lg w-fit">
                  <Bell className="h-6 w-6" />
                </div>
                <CardTitle>Real-Time Updates</CardTitle>
                <CardDescription>Stay informed with instant notifications and live tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>SMS & email alerts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Live GPS tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Delivery confirmation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Express Pricing</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Transparent pricing based on distance and delivery speed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Same-Day Express</span>
                  <Badge variant="secondary">Most Popular</Badge>
                </CardTitle>
                <CardDescription>Delivery within 6-8 hours of pickup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-primary">$24.99</div>
                <p className="text-sm text-muted-foreground">Starting price for packages up to 5 lbs</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Same-day delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Real-time tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Signature confirmation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>$100 insurance included</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/calculator">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Next-Day Express</CardTitle>
                <CardDescription>Guaranteed delivery by 10:30 AM next business day</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-primary">$15.99</div>
                <p className="text-sm text-muted-foreground">Starting price for packages up to 5 lbs</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Next business day by 10:30 AM</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Real-time tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Signature confirmation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>$100 insurance included</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/calculator">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Express Service Areas</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Same-day and next-day delivery available in major metropolitan areas
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Same-Day Service</span>
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>New York Metro Area</li>
                    <li>Los Angeles County</li>
                    <li>Chicago Metro</li>
                    <li>San Francisco Bay Area</li>
                    <li>Dallas-Fort Worth</li>
                    <li>Miami-Dade County</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Next-Day Service</span>
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>All 50 US States</li>
                    <li>Puerto Rico</li>
                    <li>US Virgin Islands</li>
                    <li>Guam</li>
                    <li>American Samoa</li>
                    <li>Northern Mariana Islands</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>International Express</span>
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>Canada (1-2 days)</li>
                    <li>Mexico (2-3 days)</li>
                    <li>Europe (2-4 days)</li>
                    <li>Asia Pacific (3-5 days)</li>
                    <li>Australia (3-5 days)</li>
                    <li>South America (4-6 days)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
