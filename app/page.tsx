import type React from "react"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Mail, Phone, Database, Shield, Zap, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-bg animate-gradient py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Validate & Verify Your
              <span
                className="text-teal-600 block animate-fade-in-up stagger-animation"
                style={{ "--delay": "0.2s" } as React.CSSProperties}
              >
                Contact Data
              </span>
            </h1>
            <p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up stagger-animation"
              style={{ "--delay": "0.4s" } as React.CSSProperties}
            >
              Clean, verify, and enrich email and contact data for better B2B outbound outcomes. Boost your sales team's
              efficiency with industry-leading contact validation tools.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-animation"
              style={{ "--delay": "0.6s" } as React.CSSProperties}
            >
              <AnimatedButton size="lg" asChild className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-3">
                <Link href="https://salescentri.com/get-started/free-trial" className="text-black">
                  Start Free Trial
                </Link>
              </AnimatedButton>
              <AnimatedButton size="lg" variant="outline" asChild className="text-lg px-8 py-3 bg-transparent">
                <Link href="https://salescentri.com/get-started/book-demo" className="text-black">
                  Book Demo
                </Link>
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Contact Validator?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive suite of tools ensures your contact data is accurate, compliant, and ready for outreach.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <Card className="border-teal-100 hover-lift hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-teal-600 mx-auto mb-4 animate-bounce-in" />
                  <h3 className="text-xl font-semibold mb-2">Email Validation</h3>
                  <p className="text-gray-600">
                    Real-time email verification with 99.5% accuracy. Detect invalid, disposable, and risky email
                    addresses.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="border-teal-100 hover-lift hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-teal-600 mx-auto mb-4 animate-bounce-in" />
                  <h3 className="text-xl font-semibold mb-2">Phone & Domain Verification</h3>
                  <p className="text-gray-600">
                    Validate phone numbers and domain authenticity to ensure complete contact accuracy.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="border-teal-100 hover-lift hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <Database className="h-12 w-12 text-teal-600 mx-auto mb-4 animate-bounce-in" />
                  <h3 className="text-xl font-semibold mb-2">CRM Integration</h3>
                  <p className="text-gray-600">
                    Seamlessly sync with your existing CRM systems for automated data cleaning and enrichment.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600">Join thousands of B2B sales teams who trust our platform</p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <ScrollAnimation delay={100}>
              <div className="flex flex-col items-center hover-scale">
                <Shield className="h-16 w-16 text-teal-600 mb-4 animate-float" />
                <h3 className="text-2xl font-bold text-gray-900">
                  <AnimatedCounter end={99.5} suffix="%" />
                </h3>
                <p className="text-gray-600">Validation Accuracy</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="flex flex-col items-center hover-scale">
                <Zap
                  className="h-16 w-16 text-teal-600 mb-4 animate-float"
                  style={{ animationDelay: "1s" } as React.CSSProperties}
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  <AnimatedCounter end={50} suffix="M+" />
                </h3>
                <p className="text-gray-600">Contacts Verified Monthly</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="flex flex-col items-center hover-scale">
                <Users
                  className="h-16 w-16 text-teal-600 mb-4 animate-float"
                  style={{ animationDelay: "2s" } as React.CSSProperties}
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  <AnimatedCounter end={10000} suffix="+" />
                </h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation className="animate-fade-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Improve Your Sales Outcomes</h2>
              <div className="space-y-4">
                <div
                  className="flex items-start space-x-3 animate-slide-up stagger-animation"
                  style={{ "--delay": "0.1s" } as React.CSSProperties}
                >
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Reduce Bounce Rates</h3>
                    <p className="text-gray-600">Eliminate invalid emails and improve deliverability by up to 95%</p>
                  </div>
                </div>
                <div
                  className="flex items-start space-x-3 animate-slide-up stagger-animation"
                  style={{ "--delay": "0.2s" } as React.CSSProperties}
                >
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Increase Response Rates</h3>
                    <p className="text-gray-600">Clean data leads to better targeting and higher engagement</p>
                  </div>
                </div>
                <div
                  className="flex items-start space-x-3 animate-slide-up stagger-animation"
                  style={{ "--delay": "0.3s" } as React.CSSProperties}
                >
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Save Time & Resources</h3>
                    <p className="text-gray-600">Automated validation saves hours of manual data cleaning</p>
                  </div>
                </div>
                <div
                  className="flex items-start space-x-3 animate-slide-up stagger-animation"
                  style={{ "--delay": "0.4s" } as React.CSSProperties}
                >
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">GDPR Compliant</h3>
                    <p className="text-gray-600">Ensure compliance with data protection regulations</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover-lift">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-600 mb-6">
                    Try our Contact Validator free for 14 days. No credit card required.
                  </p>
                  <div className="space-y-3">
                    <AnimatedButton size="lg" asChild className="w-full bg-teal-600 hover:bg-teal-700">
                      <Link href="https://salescentri.com/get-started/free-trial" className="text-black">
                        Start Free Trial
                      </Link>
                    </AnimatedButton>
                    <AnimatedButton size="lg" variant="outline" asChild className="w-full bg-transparent">
                      <Link href="https://salescentri.com/solutions/use-case-navigator/demo" className="text-black">
                        View Interactive Demo
                      </Link>
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 teal-gradient animate-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Transform Your B2B Sales Process Today</h2>
            <p className="text-xl text-teal-100 mb-8">
              Join thousands of sales teams who have improved their outreach success with our contact validation
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton size="lg" asChild className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-3">
                <Link href="https://salescentri.com/contact/sales-inquiry" className="text-black">
                  Contact Sales
                </Link>
              </AnimatedButton>
              <AnimatedButton
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-teal-600 text-lg px-8 py-3 bg-transparent"
              >
                <Link href="https://salescentri.com/pricing" className="text-black">
                  View Pricing
                </Link>
              </AnimatedButton>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
