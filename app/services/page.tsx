import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, Package, Globe, Truck, Shield, Star, CheckCircle, ArrowRight } from "lucide-react"

const services = [
  {
    id: "express",
    title: "Express Delivery",
    description: "Same-day and next-day delivery for urgent packages",
    icon: Clock,
    features: [
      "Same-day delivery available",
      "Next-day delivery guaranteed",
      "Real-time tracking",
      "Signature confirmation",
      "Priority handling",
      "SMS & email notifications",
    ],
    pricing: "Starting at $15.99",
    deliveryTime: "1-2 business days",
    color: "text-red-600 bg-red-50",
  },
  {
    id: "standard",
    title: "Standard Shipping",
    description: "Cost-effective shipping with reliable delivery times",
    icon: Package,
    features: [
      "3-5 business day delivery",
      "Package insurance included",
      "Online tracking",
      "Proof of delivery",
      "Secure handling",
      "Customer support",
    ],
    pricing: "Starting at $7.99",
    deliveryTime: "3-5 business days",
    color: "text-blue-600 bg-blue-50",
  },
  {
    id: "international",
    title: "International Shipping",
    description: "Global shipping with customs handling and expertise",
    icon: Globe,
    features: [
      "200+ countries served",
      "Customs clearance included",
      "Duty & tax calculation",
      "International tracking",
      "Documentation assistance",
      "Restricted items guidance",
    ],
    pricing: "Starting at $24.99",
    deliveryTime: "5-10 business days",
    color: "text-green-600 bg-green-50",
  },
  {
    id: "bulk",
    title: "Bulk Shipping",
    description: "Volume discounts for businesses and frequent shippers",
    icon: Truck,
    features: [
      "Volume-based pricing",
      "Dedicated account manager",
      "Custom pickup schedules",
      "Bulk packaging options",
      "Priority customer support",
      "Monthly billing available",
    ],
    pricing: "Custom pricing",
    deliveryTime: "Flexible options",
    color: "text-purple-600 bg-purple-50",
  },
]

const additionalServices = [
  {
    title: "Package Insurance",
    description: "Protect your valuable shipments with comprehensive coverage",
    icon: Shield,
    price: "From $2.99",
  },
  {
    title: "White Glove Service",
    description: "Premium handling for fragile and high-value items",
    icon: Star,
    price: "From $19.99",
  },
  {
    title: "Scheduled Pickup",
    description: "Convenient pickup at your location on your schedule",
    icon: Clock,
    price: "From $4.99",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">Our Shipping Services</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            From express delivery to international shipping, we offer comprehensive solutions tailored to your needs
            with competitive pricing and reliable service.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-lg ${service.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <CardDescription className="mt-1">{service.description}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary">{service.deliveryTime}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-3">Features Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Starting Price</p>
                          <p className="text-2xl font-bold text-primary">{service.pricing}</p>
                        </div>
                        <div className="space-y-2">
                          <Button className="w-full" asChild>
                            <Link href={`/services/${service.id}`}>
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="outline" className="w-full bg-transparent" asChild>
                            <Link href="/calculator">Get Quote</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Additional Services</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Enhance your shipping experience with our premium add-on services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-primary mb-4">{service.price}</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Add to Shipment
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Service Comparison</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Choose the right service for your shipping needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Express</th>
                  <th className="text-center p-4 font-semibold">Standard</th>
                  <th className="text-center p-4 font-semibold">International</th>
                  <th className="text-center p-4 font-semibold">Bulk</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-medium">Delivery Time</td>
                  <td className="p-4 text-center">1-2 days</td>
                  <td className="p-4 text-center">3-5 days</td>
                  <td className="p-4 text-center">5-10 days</td>
                  <td className="p-4 text-center">Flexible</td>
                </tr>
                <tr className="border-t bg-muted/30">
                  <td className="p-4 font-medium">Real-time Tracking</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Insurance Included</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>
                <tr className="border-t bg-muted/30">
                  <td className="p-4 font-medium">Signature Required</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">Optional</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">Optional</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Weekend Delivery</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Ship with RJCouriers?</h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Get started with a free quote or contact our team for custom shipping solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/calculator">
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
