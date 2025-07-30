"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Headphones } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedButton } from "@/components/animated-button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to Salescentri contact form with UTM parameters
    window.location.href = "https://salescentri.com/get-started/contact"
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to improve your contact data quality? We're here to help you get started with our Contact Validator
            platform.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: MessageCircle, title: "Live Chat", delay: 100 },
              { icon: Calendar, title: "Book Demo", delay: 200 },
              { icon: Phone, title: "Sales Inquiry", delay: 300 },
              { icon: Headphones, title: "Support Ticket", delay: 400 },
            ].map((option, index) => (
              <ScrollAnimation key={index} delay={option.delay}>
                <Card className="border-teal-100 hover-lift hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <option.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {option.title === "Live Chat"
                        ? "Get instant help from our support team"
                        : option.title === "Book Demo"
                          ? "Schedule a personalized demo"
                          : option.title === "Sales Inquiry"
                            ? "Speak with our sales team"
                            : "Submit a support request"}
                    </p>
                    <AnimatedButton asChild className="w-full bg-teal-600 hover:bg-teal-700">
                      <Link
                        href={
                          option.title === "Live Chat"
                            ? "https://salescentri.com/contact/support-request/live-chat"
                            : option.title === "Book Demo"
                              ? "https://salescentri.com/get-started/calendly"
                              : option.title === "Sales Inquiry"
                                ? "https://salescentri.com/contact/sales-inquiry"
                                : "https://salescentri.com/contact/support-request/submit-ticket"
                        }
                        className="text-black"
                      >
                        {option.title === "Live Chat"
                          ? "Start Chat"
                          : option.title === "Book Demo"
                            ? "Schedule Demo"
                            : option.title === "Sales Inquiry"
                              ? "Contact Sales"
                              : "Submit Ticket"}
                      </Link>
                    </AnimatedButton>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-teal-100">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about your contact validation needs..."
                    />
                  </div>

                  <AnimatedButton type="submit" className="w-full bg-teal-600 hover:bg-teal-700" size="lg">
                    <span className="text-black">Send Message</span>
                  </AnimatedButton>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-teal-100">
                <CardHeader>
                  <CardTitle className="text-xl">Ohio Headquarters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        123 Business Center Dr
                        <br />
                        Columbus, OH 43215
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">(614) 555-0123</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">hello@advanceohiocares.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Business Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM EST
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-teal-100">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <AnimatedButton variant="outline" asChild className="w-full justify-start bg-transparent">
                    <Link href="https://salescentri.com/get-started/free-trial" className="text-black">
                      Start Free Trial
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton variant="outline" asChild className="w-full justify-start bg-transparent">
                    <Link
                      href="https://salescentri.com/solutions/use-case-navigator/recommendations"
                      className="text-black"
                    >
                      ROI Calculator
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton variant="outline" asChild className="w-full justify-start bg-transparent">
                    <Link href="https://salescentri.com/resources/case-studies" className="text-black">
                      Case Studies
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton variant="outline" asChild className="w-full justify-start bg-transparent">
                    <Link href="https://salescentri.com/docs/api-reference" className="text-black">
                      API Documentation
                    </Link>
                  </AnimatedButton>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Ohio Office</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Ohio's business district, we're easily accessible and always happy to meet in
              person.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">123 Business Center Dr, Columbus, OH 43215</p>
                <AnimatedButton asChild className="mt-4 bg-teal-600 hover:bg-teal-700">
                  <Link href="https://maps.google.com/?q=Columbus+OH+43215" target="_blank" className="text-black">
                    View on Google Maps
                  </Link>
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 teal-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Don't wait - start improving your contact data quality today with our free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton size="lg" asChild className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="https://salescentri.com/get-started/free-trial" className="text-black">
                Start Free Trial
              </Link>
            </AnimatedButton>
            <AnimatedButton
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="https://salescentri.com/get-started/book-demo" className="text-black">
                Book a Demo
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  )
}
