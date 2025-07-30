import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Users, Target, Award, MapPin, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Accuracy First",
      description:
        "We're committed to providing the most accurate contact validation in the industry with 99.5% precision.",
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success. We're dedicated to helping you achieve better sales outcomes.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We continuously innovate to stay ahead of changing data validation challenges and requirements.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Sales at Fortune 500 company with 15+ years in B2B sales technology.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Data science expert with PhD in Computer Science and 12+ years in validation technology.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Customer Success",
      bio: "Customer success leader with proven track record of helping B2B teams scale efficiently.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Advance Ohio Cares Solutions</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're on a mission to help B2B sales teams achieve better outcomes through accurate, reliable contact data
              validation and verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="https://salescentri.com/company/about-us" className="text-black">
                  Learn More About Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://salescentri.com/company/careers" className="text-black">
                  Join Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in Ohio, Advance Ohio Cares Solutions was born from a simple observation: B2B sales teams were
                  losing countless opportunities due to poor data quality and invalid contact information.
                </p>
                <p>
                  Our founders, having experienced these challenges firsthand in their previous roles, set out to create
                  the most accurate and reliable contact validation platform in the industry. Today, we serve thousands
                  of sales teams worldwide, helping them improve their outreach success rates and drive better business
                  outcomes.
                </p>
                <p>
                  We believe that accurate data is the foundation of successful sales, and we're committed to providing
                  the tools and technology that make that possible for businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">10,000+</div>
                  <div className="text-gray-700">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">50M+</div>
                  <div className="text-gray-700">Contacts Validated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">99.5%</div>
                  <div className="text-gray-700">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                  <div className="text-gray-700">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-teal-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced leaders dedicated to helping your business succeed with better data quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-teal-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="https://salescentri.com/company/about-us/leadership-team" className="text-black">
                View Full Leadership Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Based in Ohio</h2>
              <p className="text-gray-600 mb-6">
                Our headquarters are located in the heart of Ohio's thriving business community. We're proud to be part
                of the vibrant tech ecosystem in the Buckeye State, contributing to the region's growth as a major
                technology hub.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">123 Business Center Dr, Columbus, OH 43215</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">(614) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">hello@advanceohiocares.com</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
              <p className="text-gray-600 mb-6">
                We'd love to meet you in person! Schedule a visit to our Ohio headquarters to learn more about our
                platform and discuss how we can help your business.
              </p>
              <div className="space-y-3">
                <Button size="lg" asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="https://salescentri.com/get-started/book-demo" className="text-black">
                    Schedule a Visit
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/contact" className="text-black">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 teal-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Join Our Growing Team</h2>
          <p className="text-xl text-teal-100 mb-8">
            We're always looking for talented individuals who share our passion for helping businesses succeed through
            better data quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="https://salescentri.com/company/careers" className="text-black">
                View Open Positions
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="https://salescentri.com/company/about-us" className="text-black">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
