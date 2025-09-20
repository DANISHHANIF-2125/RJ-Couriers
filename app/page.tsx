import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, Shield, Globe, Package, Star, ArrowRight, Search } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Trusted by 10,000+ customers
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Fast & Reliable <span className="text-primary">Package Delivery</span> Worldwide
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-lg">
                  Experience seamless shipping with real-time tracking, competitive rates, and guaranteed delivery
                  times. Your packages, our priority.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/quote">
                    Get Instant Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/tracking">Track Package</Link>
                </Button>
              </div>

              {/* Quick Track */}
              <Card className="max-w-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Quick Track</CardTitle>
                  <CardDescription>Enter your tracking number</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input placeholder="RJ123456789" className="flex-1" />
                    <Button size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8 backdrop-blur-sm">
                <img
                  src="/modern-delivery-truck-with-packages.jpg"
                  alt="RJCouriers delivery truck"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why Choose RJCouriers?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We combine cutting-edge technology with reliable service to deliver your packages safely and on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle>Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Express delivery in 24-48 hours with real-time tracking updates.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle>Secure Handling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your packages are insured and handled with utmost care and security.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                  <Globe className="h-6 w-6" />
                </div>
                <CardTitle>Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Worldwide shipping to over 200 countries with local expertise.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                  <Package className="h-6 w-6" />
                </div>
                <CardTitle>Package Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized handling for fragile, valuable, and oversized items.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From express delivery to international shipping, we have the right solution for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <CardTitle>Express Delivery</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Same-day and next-day delivery for urgent packages with priority handling.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Same-day delivery available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Real-time tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Signature confirmation</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-lg">
                    <Package className="h-5 w-5" />
                  </div>
                  <CardTitle>Standard Shipping</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Cost-effective shipping solution with reliable delivery times.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>3-5 business days</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Package insurance included</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Online tracking</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-lg">
                    <Globe className="h-5 w-5" />
                  </div>
                  <CardTitle>International</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Global shipping with customs handling and international expertise.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>200+ countries</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Customs clearance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Duty & tax calculation</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "RJCouriers has been our go-to shipping partner for years. Their reliability and customer service are
                  unmatched."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Mitchell</p>
                    <p className="text-sm text-muted-foreground">E-commerce Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Fast, secure, and affordable. The tracking system is excellent and gives me peace of mind with every
                  shipment."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">DJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">David Johnson</p>
                    <p className="text-sm text-muted-foreground">Small Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "International shipping made easy. They handled all the customs paperwork and my package arrived
                  exactly on time."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">MC</span>
                  </div>
                  <div>
                    <p className="font-semibold">Maria Chen</p>
                    <p className="text-sm text-muted-foreground">Import/Export Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Ship with RJCouriers?</h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Join thousands of satisfied customers who trust us with their deliveries. Get started today with a free
            quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
