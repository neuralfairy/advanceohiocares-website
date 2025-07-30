"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"
import { ChevronDown, ChevronUp, HelpCircle, Mail, Shield, Zap } from "lucide-react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What is Contact Validator?",
          answer:
            "Contact Validator is a comprehensive B2B data verification platform that helps sales teams clean, verify, and enrich email and contact data. Our service ensures your contact database is accurate, up-to-date, and ready for successful outreach campaigns.",
        },
        {
          question: "How accurate is your email validation?",
          answer:
            "Our email validation service boasts an industry-leading 99.5% accuracy rate. We use multiple verification methods including syntax validation, domain verification, mailbox existence checks, and disposable email detection to ensure the highest level of accuracy.",
        },
        {
          question: "Can you detect disposable email domains?",
          answer:
            "Yes, our system maintains an up-to-date database of disposable and temporary email domains. We can identify and flag these addresses to help you focus on legitimate, long-term contacts for your outreach efforts.",
        },
        {
          question: "What file formats do you support for bulk validation?",
          answer:
            "We support CSV, Excel (XLS/XLSX), and JSON formats for bulk uploads. You can also integrate directly with our API for real-time validation or connect with popular CRM systems like Salesforce and HubSpot.",
        },
      ],
    },
    {
      title: "Technical & Integration",
      icon: Zap,
      questions: [
        {
          question: "Do you offer API access?",
          answer:
            "Yes, we provide a robust RESTful API that allows you to integrate contact validation directly into your applications, CRM systems, or marketing automation platforms. Our API supports both single and bulk validation requests with real-time responses.",
        },
        {
          question: "Which CRM systems do you integrate with?",
          answer:
            "We offer native integrations with Salesforce, HubSpot, Pipedrive, and many other popular CRM platforms. We also provide Zapier integration for connecting with hundreds of other business applications.",
        },
        {
          question: "What is your API rate limit?",
          answer:
            "API rate limits vary by plan. Our Starter plan allows up to 100 requests per minute, Professional plan supports 500 requests per minute, and Enterprise customers can request custom rate limits based on their needs.",
        },
        {
          question: "Do you provide webhooks for real-time notifications?",
          answer:
            "Yes, we support webhooks that can notify your systems when validation jobs are completed, when data quality scores change, or when specific validation events occur. This enables seamless automation of your data quality workflows.",
        },
      ],
    },
    {
      title: "Privacy & Compliance",
      icon: Shield,
      questions: [
        {
          question: "Is Contact Validator GDPR compliant?",
          answer:
            "Absolutely. We are fully GDPR compliant and follow strict data protection protocols. We only process data for validation purposes, never store personal information longer than necessary, and provide data deletion capabilities upon request.",
        },
        {
          question: "How do you handle data security?",
          answer:
            "We use enterprise-grade security measures including 256-bit SSL encryption, SOC 2 Type II compliance, and secure data centers. All data is encrypted both in transit and at rest, and we maintain strict access controls and audit logs.",
        },
        {
          question: "Do you store or share validated data?",
          answer:
            "We do not store your contact data beyond the validation process. Once validation is complete, your data is securely deleted from our systems. We never share, sell, or use your data for any purpose other than providing our validation services.",
        },
        {
          question: "What certifications do you maintain?",
          answer:
            "We maintain SOC 2 Type II certification, ISO 27001 compliance, and follow GDPR, CCPA, and other international data protection standards. Our security practices are regularly audited by third-party security firms.",
        },
      ],
    },
    {
      title: "Pricing & Plans",
      icon: Mail,
      questions: [
        {
          question: "Do you offer a free trial?",
          answer:
            "Yes, we offer a 14-day free trial with full access to all features. You can validate up to 1,000 contacts during your trial period without providing a credit card. This allows you to test our accuracy and integration capabilities risk-free.",
        },
        {
          question: "What happens if I exceed my monthly validation limit?",
          answer:
            "If you approach your monthly limit, we'll send you notifications. You can either upgrade your plan or purchase additional validation credits. We never stop your service abruptly - we'll work with you to find the best solution for your needs.",
        },
        {
          question: "Do you offer volume discounts?",
          answer:
            "Yes, we provide custom pricing for high-volume users and enterprise customers. Contact our sales team to discuss your specific requirements and get a personalized quote based on your validation volume and feature needs.",
        },
        {
          question: "Can I cancel my subscription at any time?",
          answer:
            "Yes, you can cancel your subscription at any time without penalties. If you cancel during a billing period, you'll continue to have access to the service until the end of your current billing cycle.",
        },
      ],
    },
  ]

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.questions.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    ),
  }

  return (
    <div className="animate-fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />

      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our Contact Validator platform, features, pricing, and integration
            options.
          </p>
          <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700">
            <Link href="https://salescentri.com/contact/support-request" className="text-black">
              Contact Support
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className="h-8 w-8 text-teal-600" />
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex
                    const isOpen = openItems.includes(globalIndex)

                    return (
                      <Card key={questionIndex} className="border-teal-100">
                        <Collapsible>
                          <CollapsibleTrigger onClick={() => toggleItem(globalIndex)} className="w-full">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                                {isOpen ? (
                                  <ChevronUp className="h-5 w-5 text-teal-600 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-teal-600 flex-shrink-0" />
                                )}
                              </div>
                            </CardContent>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <CardContent className="px-6 pb-6 pt-0">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </CardContent>
                          </CollapsibleContent>
                        </Collapsible>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here to help you get the most out of Contact Validator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-teal-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">Get detailed answers via email</p>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="https://salescentri.com/contact/support-request" className="text-black">
                    Email Us
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <HelpCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">Chat with our support team</p>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="https://salescentri.com/contact/support-request/live-chat" className="text-black">
                    Start Chat
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Book Demo</h3>
                <p className="text-gray-600 text-sm mb-4">See the platform in action</p>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="https://salescentri.com/get-started/book-demo" className="text-black">
                    Schedule Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 teal-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Try Contact Validator?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Start your free trial today and experience the difference accurate contact data can make.
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
