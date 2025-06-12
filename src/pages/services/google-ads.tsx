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
import { CheckCircle, Target, DollarSign, BarChart3 } from "lucide-react";

const GoogleAdsPage = () => {
  const benefits = [
    "Immediate visibility in search results",
    "Precise audience targeting",
    "Measurable ROI and conversions",
    "Budget control and optimization",
    "Quick campaign setup and launch",
    "Detailed performance analytics",
  ];

  const services = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Campaign Strategy",
      description:
        "Develop targeted Google Ads campaigns that reach your ideal customers at the right time.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Budget Optimization",
      description:
        "Maximize your ad spend efficiency with smart bidding strategies and budget allocation.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Performance Analysis",
      description:
        "Track and analyze campaign performance with comprehensive reporting and insights.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                Google Ads Management
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Google Ads That Convert
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Drive immediate results with targeted Google Ads campaigns that
                reach your ideal customers
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Free Audit</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Google Ads Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive Google Ads management to maximize your advertising
                ROI
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
                  Why Choose Our Google Ads Management?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our certified Google Ads experts create campaigns that deliver
                  real business results.
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
                <h3 className="text-2xl font-bold mb-4">
                  Campaign Performance
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Average ROAS</span>
                    <Badge variant="default">4.2x</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Click-Through Rate</span>
                    <Badge variant="default">8.5%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Conversion Rate</span>
                    <Badge variant="default">12.3%</Badge>
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
              Ready to Launch Your Google Ads Campaign?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's create targeted campaigns that drive real business results
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Campaign</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GoogleAdsPage;
