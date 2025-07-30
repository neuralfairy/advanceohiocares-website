"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { CheckCircle, Star } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedButton } from "@/components/animated-button"

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "1,000 validations/month",
        "Email validation",
        "Basic phone verification",
        "API access",
        "Email support",
        "Basic reporting",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
    },
    {
      name: "Professional",
      description: "Ideal for growing sales teams",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "10,000 validations/month",
        "Full email validation suite",
        "Complete phone verification",
        "Domain verification",
        "CRM integrations",
        "Priority support",
        "Advanced analytics",
        "Custom rules",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      features: [
        "Unlimited validations",
        "All validation features",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom SLA",
        "On-premise deployment",
        "Advanced security features",
      ],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/contact/sales-inquiry",
    },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your team. All plans include our core validation features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isYearly ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-teal-600" />
            <span className={`text-lg ${isYearly ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Yearly</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Save 20%</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card
                  className={`relative hover-lift transition-all duration-300 ${
                    plan.popular ? "border-teal-500 shadow-lg scale-105" : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                    <div className="mt-6">
                      {typeof plan.monthlyPrice === "number" ? (
                        <>
                          <span className="text-4xl font-bold text-gray-900">
                            ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice}
                          </span>
                          <span className="text-gray-600 ml-2">/month</span>
                          {isYearly && (
                            <div className="text-sm text-teal-600 mt-1">Billed annually (${plan.yearlyPrice}/year)</div>
                          )}
                        </>
                      ) : (
                        <span className="text-4xl font-bold text-gray-900">{plan.monthlyPrice}</span>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <AnimatedButton
                      asChild
                      className={`w-full ${plan.popular ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-900 hover:bg-gray-800"}`}
                      size="lg"
                    >
                      <Link href={plan.ctaLink} className="text-black">
                        {plan.cta}
                      </Link>
                    </AnimatedButton>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Need Something Different?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer flexible solutions for every business need, from custom integrations to volume discounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-teal-100">
              <CardHeader>
                <CardTitle className="text-xl">Enterprise & Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Need higher volumes, custom integrations, or specialized features? Our enterprise team can create a
                  solution tailored to your specific requirements.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <Link href="https://salescentri.com/pricing/enterprise-custom" className="text-black">
                      Enterprise & Custom
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="https://salescentri.com/contact/sales-inquiry" className="text-black">
                      Contact Sales Team
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-100">
              <CardHeader>
                <CardTitle className="text-xl">Plans Overview & Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Want to see a detailed comparison of all features across our plans? View our comprehensive plans
                  overview to make the best choice for your team.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-gray-900 hover:bg-gray-800">
                    <Link href="https://salescentri.com/pricing/plans-overview" className="text-black">
                      Plans Overview
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="https://salescentri.com/pricing" className="text-black">
                      Get Pricing Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change my plan at any time?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                prorate any billing adjustments.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happens if I exceed my monthly validation limit?
              </h3>
              <p className="text-gray-600">
                We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase
                additional validations as needed.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer volume discounts?</h3>
              <p className="text-gray-600">
                Yes, we offer custom pricing for high-volume users. Contact our sales team to discuss your specific
                needs and get a personalized quote.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial available?</h3>
              <p className="text-gray-600">
                We offer a 14-day free trial with full access to all features. No credit card required to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 teal-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Start your free trial today and see how our Contact Validator can improve your sales outcomes.
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
              <Link href="https://salescentri.com/get-started/book-demo" className="text-black">
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
