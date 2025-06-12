import React from "react";
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
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Search, BarChart3 } from "lucide-react";

const SEOPage = () => {
  const benefits = [
    "Increase organic search visibility",
    "Drive qualified traffic to your website",
    "Improve search engine rankings",
    "Build long-term online presence",
    "Cost-effective marketing strategy",
    "Measurable ROI and analytics",
  ];

  const services = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Keyword Research",
      description:
        "Comprehensive keyword analysis to target the right search terms for your business.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "On-Page Optimization",
      description:
        "Optimize your website content, meta tags, and structure for better search rankings.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Performance Tracking",
      description:
        "Monitor your SEO progress with detailed analytics and reporting.",
    },
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
                SEO Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Search Engine Optimization
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Boost your search rankings and drive organic traffic with our
                proven SEO strategies
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/services/seo-audit">Get SEO Audit</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our SEO Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive SEO solutions to improve your online visibility
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our SEO Services?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our data-driven approach to SEO delivers measurable results
                  that grow your business.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Case Study Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Organic Traffic Increase</span>
                    <Badge variant="default">+250%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Keyword Rankings</span>
                    <Badge variant="default">Top 3 Positions</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ROI Improvement</span>
                    <Badge variant="default">+180%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Improve Your Search Rankings?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our SEO services can help grow your business
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Start Your SEO Journey</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SEOPage;
