import React from "react";
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
import { CheckCircle, Palette, Users, Megaphone } from "lucide-react";

const BrandMarketingPage = () => {
  const benefits = [
    "Build strong brand recognition",
    "Create emotional connections with customers",
    "Differentiate from competitors",
    "Increase customer loyalty and retention",
    "Drive premium pricing opportunities",
    "Establish market authority and trust",
  ];

  const services = [
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Brand Identity Design",
      description:
        "Create a cohesive visual identity that reflects your brand values and resonates with your audience.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Brand Strategy",
      description:
        "Develop comprehensive brand positioning and messaging strategies that connect with your target market.",
    },
    {
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      title: "Brand Campaigns",
      description:
        "Execute integrated marketing campaigns that build brand awareness and drive engagement.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                Brand Marketing
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Build a Memorable Brand
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Create a strong, recognizable brand identity that connects with
                your audience and drives business growth
              </p>
              <Button size="lg" variant="secondary">
                Start Brand Journey
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Brand Marketing Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive brand development and marketing solutions
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
                  Why Invest in Brand Marketing?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Strong brands command premium prices, inspire customer
                  loyalty, and drive sustainable growth.
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
                  Brand Impact Metrics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Brand Recognition Increase</span>
                    <Badge variant="default">+85%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Customer Loyalty Improvement</span>
                    <Badge variant="default">+65%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Premium Pricing Acceptance</span>
                    <Badge variant="default">+40%</Badge>
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
              Ready to Build Your Brand?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's create a brand identity that resonates with your audience
              and drives growth
            </p>
            <Button size="lg">Build Your Brand</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandMarketingPage;
