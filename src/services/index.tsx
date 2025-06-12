import React from "react";
import Navbar from "@/components/layout/Navbar";
import ServiceCard from "@/components/services/ServiceCard";
import { Search, BarChart, PenTool, Shield } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      id: "seo",
      title: "SEO Services",
      description:
        "Boost your website's visibility and drive organic traffic with our comprehensive SEO strategies tailored to your business goals.",
      icon: <Search className="h-10 w-10 text-primary" />,
      link: "/services/seo",
    },
    {
      id: "google-ads",
      title: "Google Ads",
      description:
        "Maximize your ROI with data-driven Google Ads campaigns that target your ideal customers at the right moment.",
      icon: <BarChart className="h-10 w-10 text-primary" />,
      link: "/services/google-ads",
    },
    {
      id: "brand-marketing",
      title: "Brand Marketing",
      description:
        "Develop a strong, consistent brand identity that resonates with your audience and sets you apart from competitors.",
      icon: <PenTool className="h-10 w-10 text-primary" />,
      link: "/services/brand-marketing",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description:
        "Protect your business with comprehensive security solutions that safeguard your data and maintain customer trust.",
      icon: <Shield className="h-10 w-10 text-primary" />,
      link: "/services/cybersecurity",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary/10 py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital marketing solutions designed to help your
              business grow and succeed in the competitive online landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver results through proven strategies, cutting-edge tools,
              and personalized approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">98%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Client Satisfaction
              </h3>
              <p className="text-muted-foreground">
                Our clients consistently rate our services highly for quality
                and results.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">10+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
              <p className="text-muted-foreground">
                Over a decade of experience in digital marketing and business
                growth.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">500+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Successful Projects
              </h3>
              <p className="text-muted-foreground">
                Hundreds of successful campaigns and satisfied clients across
                industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
