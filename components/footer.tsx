import Link from "next/link"
import { Truck, Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Truck className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">RJCouriers</span>
            </div>
            <p className="text-sm">
              Fast, reliable, and secure package delivery services across the globe.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>24/7 Customer Support</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/express" className="hover:text-primary transition-colors">
                  Express Delivery
                </Link>
              </li>
              <li>
                <Link href="/services/standard" className="hover:text-primary transition-colors">
                  Standard Shipping
                </Link>
              </li>
              <li>
                <Link href="/services/bulk" className="hover:text-primary transition-colors">
                  Bulk Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tracking" className="hover:text-primary transition-colors">
                  Track Package
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-primary transition-colors">
                  Shipping Calculator
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-primary transition-colors">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-primary transition-colors">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>02225151763</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>rjcollege@rjcollege.edu.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Opposite Ghatkopar Railway Station Ghatkopar(West),Mumbai 400086,Maharashtra,India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm ">
          <p>&copy; 2025 RJCouriers. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
