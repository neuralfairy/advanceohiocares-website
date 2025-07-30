import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, User, ArrowRight, TrendingUp, Mail, Database } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    title: "The Complete Guide to Email Deliverability in 2024",
    excerpt:
      "Learn the latest best practices for ensuring your emails reach the inbox, including new authentication requirements and reputation management strategies.",
    author: "Sarah Johnson",
    date: "January 15, 2024",
    category: "Email Deliverability",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "8 min read",
  }

  const blogPosts = [
    {
      title: "How to Reduce Email Bounce Rates by 95%",
      excerpt: "Discover proven strategies to dramatically improve your email deliverability and reduce bounce rates.",
      author: "Michael Chen",
      date: "January 12, 2024",
      category: "Data Quality",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "6 min read",
    },
    {
      title: "CRM Data Hygiene: Best Practices for 2024",
      excerpt: "Keep your CRM clean and accurate with these essential data hygiene practices and automation tips.",
      author: "Emily Rodriguez",
      date: "January 10, 2024",
      category: "CRM Integration",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "7 min read",
    },
    {
      title: "GDPR Compliance for Contact Validation",
      excerpt:
        "Navigate GDPR requirements while maintaining effective contact validation and data enrichment processes.",
      author: "David Kim",
      date: "January 8, 2024",
      category: "Compliance",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "5 min read",
    },
    {
      title: "Phone Number Validation: Global Best Practices",
      excerpt:
        "Learn how to validate phone numbers across different countries and formats for better contact accuracy.",
      author: "Lisa Wang",
      date: "January 5, 2024",
      category: "Phone Validation",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "4 min read",
    },
    {
      title: "API Integration Guide: Contact Validator",
      excerpt:
        "Step-by-step guide to integrating our Contact Validator API into your existing sales and marketing stack.",
      author: "Alex Thompson",
      date: "January 3, 2024",
      category: "Technical",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "10 min read",
    },
    {
      title: "B2B Sales Prospecting in 2024: Data-Driven Strategies",
      excerpt: "Transform your prospecting with clean data, better targeting, and improved outreach success rates.",
      author: "Jennifer Martinez",
      date: "December 28, 2023",
      category: "Sales Strategy",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "9 min read",
    },
  ]

  const categories = [
    { name: "Email Deliverability", count: 12, icon: Mail },
    { name: "Data Quality", count: 8, icon: Database },
    { name: "CRM Integration", count: 6, icon: TrendingUp },
    { name: "Compliance", count: 4, icon: TrendingUp },
    { name: "Sales Strategy", count: 10, icon: TrendingUp },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contact Validation Insights</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert insights on email deliverability, data quality, CRM integration, and B2B sales best practices.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Card className="border-teal-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <Badge className="bg-teal-100 text-teal-800 mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    <span className="text-black">Read Full Article</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="border-teal-100 hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative h-48">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <Badge className="bg-teal-100 text-teal-800 w-fit mb-2">{post.category}</Badge>
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <Button variant="outline" size="sm">
                          <span className="text-black">Read More</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <Card className="border-teal-100">
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 hover:bg-teal-50 rounded-lg cursor-pointer transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <category.icon className="h-4 w-4 text-teal-600" />
                            <span className="text-gray-700">{category.name}</span>
                          </div>
                          <Badge variant="secondary">{category.count}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Resources */}
                <Card className="border-teal-100">
                  <CardHeader>
                    <CardTitle>Additional Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                      <Link href="https://example.com/resources/case-studies" className="text-black">
                        Case Studies
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                      <Link href="https://example.com/resources/whitepapers-ebooks" className="text-black">
                        Whitepapers & eBooks
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                      <Link href="https://example.com/resources/tutorials-webinars" className="text-black">
                        Webinars & Tutorials
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="border-teal-100 bg-gradient-to-br from-teal-50 to-teal-100">
                  <CardHeader>
                    <CardTitle>Stay Updated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Get the latest insights on contact validation and data quality delivered to your inbox.
                    </p>
                    <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                      <Link href="https://example.com/resources/newsletter" className="text-black">
                        Subscribe to Newsletter
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 teal-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Improve Your Data Quality?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Put these insights into practice with our Contact Validator platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="https://example.com/get-started/free-trial" className="text-black">
                Start Free Trial
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="https://example.com/get-started/book-demo" className="text-black">
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
