import Link from "next/link"
import { Shield, Lock, Award } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AOC</span>
              </div>
              <span className="font-bold text-xl">Advance Ohio Cares Solutions</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional B2B contact validation and data verification tools. Clean, verify, and enrich email/contact
              data for better outbound sales outcomes.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4 text-teal-400" />
                <span className="text-sm text-gray-300">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-1">
                <Lock className="h-4 w-4 text-teal-400" />
                <span className="text-sm text-gray-300">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4 text-teal-400" />
                <span className="text-sm text-gray-300">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-teal-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/resources/case-studies"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://salescentri.com/contact/support-request"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/docs/api-reference"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/resources/tutorials-webinars"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Webinars
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/contact/support-request/live-chat"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Live Chat
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/contact/support-request/submit-ticket"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Submit Ticket
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Link href="/privacy" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link
                href="https://salescentri.com/trust/security-privacy"
                className="text-gray-300 hover:text-teal-400 text-sm transition-colors"
              >
                Security & Privacy
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm mb-2">
                © {new Date().getFullYear()} Advance Ohio Cares Solutions. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs">
                <Link
                  href="https://salescentri.com?utm_source=advanceohiocares.com&utm_medium=footer&utm_campaign=partner_network"
                  className="hover:text-teal-400 transition-colors"
                >
                  Powered by Sales Intelligence Platform
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
