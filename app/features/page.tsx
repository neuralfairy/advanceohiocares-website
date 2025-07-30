import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Mail, Phone, Database, Shield, Zap, CheckCircle, Globe, Users, BarChart3, Settings } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedButton } from "@/components/animated-button"

export default function FeaturesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-bg animate-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Powerful Contact Validation Features
          </h1>
          <p
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up stagger-animation"
            style={{ "--delay": "0.2s" } as React.CSSProperties}
          >
            Discover how our comprehensive suite of validation tools can transform your B2B sales process and improve
            your outreach success rates.
          </p>
          <AnimatedButton
            size="lg"
            asChild
            className="bg-teal-600 hover:bg-teal-700 animate-fade-in-up stagger-animation"
            style={{ "--delay": "0.4s" } as React.CSSProperties}
          >
            <Link href="https://salescentri.com/solutions/use-case-navigator/demo" className="text-black">
              Try Interactive Demo
            </Link>
          </AnimatedButton>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Validation Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to ensure your contact data is accurate, compliant, and ready for successful outreach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Email Validation", delay: 100 },
              { icon: Phone, title: "Phone Verification", delay: 200 },
              { icon: Globe, title: "Domain Verification", delay: 300 },
              { icon: Database, title: "CRM Integration", delay: 400 },
              { icon: Shield, title: "Security & Compliance", delay: 500 },
              { icon: BarChart3, title: "Analytics & Reporting", delay: 600 },
            ].map((feature, index) => (
              <ScrollAnimation key={index} delay={feature.delay}>
                <Card className="border-teal-100 hover-lift hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-teal-600 mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {feature.title === "Email Validation" && (
                      <>
                        <p className="text-gray-600 mb-4">
                          Real-time email verification with industry-leading 99.5% accuracy rate.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Syntax validation</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Domain verification</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Mailbox existence check</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Disposable email detection</span>
                          </li>
                        </ul>
                      </>
                    )}
                    {feature.title === "Phone Verification" && (
                      <>
                        <p className="text-gray-600 mb-4">
                          Comprehensive phone number validation and formatting for global numbers.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Format standardization</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Carrier identification</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Line type detection</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Geographic location</span>
                          </li>
                        </ul>
                      </>
                    )}
                    {feature.title === "Domain Verification" && (
                      <>
                        <p className="text-gray-600 mb-4">
                          Verify domain authenticity and reputation to ensure legitimate contacts.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">MX record validation</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Domain reputation check</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Blacklist monitoring</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">SSL certificate check</span>
                          </li>
                        </ul>
                      </>
                    )}
                    {feature.title === "CRM Integration" && (
                      <>
                        <p className="text-gray-600 mb-4">
                          Seamlessly integrate with your existing CRM and sales tools.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Salesforce integration</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">HubSpot compatibility</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">API access</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Bulk processing</span>
                          </li>
                        </ul>
                      </>
                    )}
                    {feature.title === "Security & Compliance" && (
                      <>
                        <p className="text-gray-600 mb-4">
                          Enterprise-grade security with full GDPR and data protection compliance.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">GDPR compliant</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">SOC 2 certified</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">256-bit encryption</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Data residency options</span>
                          </li>
                        </ul>
                      </>
                    )}
                    {feature.title === "Analytics & Reporting" && (
                      <>
                        <p className="text-gray-600 mb-4">
                          Comprehensive analytics to track validation performance and data quality.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Real-time dashboards</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Quality scoring</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Custom reports</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                            <span className="text-sm">Export capabilities</span>
                          </li>
                        </ul>
                      </>
                    )}
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Go beyond basic validation with our advanced features designed for enterprise-level data management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Zap className="h-8 w-8 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Processing</h3>
                  <p className="text-gray-600">
                    Validate contacts instantly as they're entered into your system with our real-time API processing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Collaboration</h3>
                  <p className="text-gray-600">
                    Share validated data across your team with role-based access controls and collaborative workflows.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Settings className="h-8 w-8 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Rules</h3>
                  <p className="text-gray-600">
                    Create custom validation rules and filters tailored to your specific business requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience These Features?</h3>
              <p className="text-gray-600 mb-6">
                See how our Contact Validator can transform your data quality and sales outcomes.
              </p>
              <div className="space-y-3">
                <Button size="lg" asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="https://salescentri.com/get-started/free-trial" className="text-black">
                    Start Free Trial
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full bg-transparent">
                  <Link href="https://salescentri.com/solutions/use-case-navigator/demo" className="text-black">
                    View Interactive Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 teal-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Validate Your Contact Data?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of B2B sales teams who trust our platform for accurate contact validation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="https://salescentri.com/get-started/free-trial" className="text-black">
                Start Free Trial
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="https://salescentri.com/contact/sales-inquiry" className="text-black">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
