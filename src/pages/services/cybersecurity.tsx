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
import { CheckCircle, Shield, Lock, AlertTriangle } from "lucide-react";

const CybersecurityPage = () => {
  const benefits = [
    "Protect sensitive business data",
    "Prevent costly security breaches",
    "Maintain customer trust and confidence",
    "Ensure regulatory compliance",
    "Minimize business disruption",
    "24/7 security monitoring and support",
  ];

  const services = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security Assessment",
      description:
        "Comprehensive evaluation of your current security posture and vulnerability identification.",
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Data Protection",
      description:
        "Advanced encryption and access controls to safeguard your sensitive business information.",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: "Threat Monitoring",
      description:
        "Real-time monitoring and rapid response to potential security threats and incidents.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                Cybersecurity Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Protect Your Digital Assets
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions to protect your business
                from digital threats and data breaches
              </p>
              <Button size="lg" variant="secondary">
                Security Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Cybersecurity Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enterprise-grade security solutions to protect your business
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
                  Why Choose Our Cybersecurity Services?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Proactive security measures that keep your business safe from
                  evolving cyber threats.
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
                <h3 className="text-2xl font-bold mb-4">Security Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Threat Detection Rate</span>
                    <Badge variant="default">99.8%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Response Time</span>
                    <Badge variant="default">&lt; 5 min</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Security Incidents Prevented</span>
                    <Badge variant="default">10,000+</Badge>
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
              Secure Your Business Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't wait for a security breach. Protect your business with our
              comprehensive cybersecurity solutions
            </p>
            <Button size="lg">Get Protected Now</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CybersecurityPage;
