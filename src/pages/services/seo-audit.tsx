import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Search,
  BarChart3,
  TrendingUp,
  Globe,
  FileText,
  Users,
} from "lucide-react";

const SEOAuditPage = () => {
  const [formData, setFormData] = useState({
    website: "",
    email: "",
    company: "",
    goals: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("SEO Audit Request:", formData);
    alert("Thank you! We'll send your SEO audit report within 24 hours.");
  };

  const auditFeatures = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Technical SEO Analysis",
      description:
        "Complete technical audit including site speed, mobile-friendliness, and crawlability issues.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Keyword Performance",
      description:
        "Analysis of your current keyword rankings and identification of new opportunities.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Competitor Analysis",
      description:
        "See how you stack up against competitors and discover their winning strategies.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Content Optimization",
      description:
        "Recommendations for improving your content to rank higher in search results.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Detailed Report",
      description:
        "Comprehensive 20+ page report with actionable recommendations and priority tasks.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Consultation",
      description:
        "30-minute consultation call to discuss findings and answer your questions.",
    },
  ];

  const benefits = [
    "Identify critical SEO issues affecting your rankings",
    "Discover untapped keyword opportunities",
    "Get a clear roadmap for SEO improvements",
    "Understand your competitive landscape",
    "Receive actionable recommendations",
    "Free 30-minute consultation included",
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                Free SEO Audit
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get Your Free SEO Audit
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Discover what's holding your website back from ranking higher in
                Google. Get a comprehensive SEO analysis and actionable
                recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge
                  variant="outline"
                  className="bg-white/10 text-white border-white/20"
                >
                  ✓ 100% Free Analysis
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white/10 text-white border-white/20"
                >
                  ✓ No Obligations
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white/10 text-white border-white/20"
                >
                  ✓ 24-Hour Delivery
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Form and Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Audit Request Form */}
              <div>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Request Your Free SEO Audit
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll send you a comprehensive
                      SEO audit report within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="website">Website URL *</Label>
                        <Input
                          id="website"
                          name="website"
                          type="url"
                          placeholder="https://yourwebsite.com"
                          value={formData.website}
                          onChange={handleInputChange}
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
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="goals">SEO Goals (Optional)</Label>
                        <Textarea
                          id="goals"
                          name="goals"
                          placeholder="Tell us about your SEO goals and challenges..."
                          value={formData.goals}
                          onChange={handleInputChange}
                          className="mt-1"
                          rows={4}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Get My Free SEO Audit
                      </Button>

                      <p className="text-sm text-gray-600 text-center">
                        By submitting this form, you agree to receive marketing
                        communications from us. You can unsubscribe at any time.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  What's Included in Your Audit
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our comprehensive SEO audit covers all the critical factors
                  that impact your search rankings.
                </p>

                <div className="grid gap-6">
                  {auditFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Get an SEO Audit?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Understanding your current SEO performance is the first step to
                improving your search rankings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Report Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sample Audit Report
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Here's what you can expect in your comprehensive SEO audit
                report.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    Technical Issues
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">23</div>
                  <p className="text-gray-600">Critical issues found</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    Keyword Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-blue-500 mb-2">
                    47
                  </div>
                  <p className="text-gray-600">New keywords identified</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    Improvement Score
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">
                    +85%
                  </div>
                  <p className="text-gray-600">Potential traffic increase</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Improve Your SEO?
            </h2>
            <p className="text-xl mb-8">
              Get your free SEO audit today and start ranking higher in Google.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90"
              >
                <a href="#audit-form">Get Free Audit</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                asChild
              >
                <Link to="/contact">Speak with an Expert</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SEOAuditPage;
