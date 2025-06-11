import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Search, BarChart, PenTool, Shield } from "lucide-react";
import ServiceCard from "./services/ServiceCard";

const Home = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content:
        "The SEO services provided by this agency have transformed our online presence. Our organic traffic has increased by 200% in just three months!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Retail Solutions",
      content:
        "Their Google Ads management has been exceptional. We've seen a significant improvement in our conversion rates and a decrease in cost per acquisition.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      company: "Health & Wellness Co.",
      content:
        "The cybersecurity audit they performed revealed critical vulnerabilities we weren't aware of. Their team helped us implement robust security measures that give us peace of mind.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    },
  ];

  // Service data
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
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Elevate Your Digital Presence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Strategic digital marketing solutions that drive growth, increase
              visibility, and secure your online assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                asChild
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive in
              the online landscape.
            </p>
          </div>

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

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Agency
              </h2>
              <p className="text-lg mb-8 text-muted-foreground">
                We combine data-driven strategies with creative solutions to
                deliver exceptional results for our clients.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Data-Driven Approach
                    </h3>
                    <p className="text-muted-foreground">
                      We make decisions based on comprehensive analytics and
                      insights.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Tailored Strategies
                    </h3>
                    <p className="text-muted-foreground">
                      Custom solutions designed specifically for your business
                      needs and goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Transparent Reporting
                    </h3>
                    <p className="text-muted-foreground">
                      Clear, regular updates on your campaign performance and
                      ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold">10+ Years</p>
                <p>of industry experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>{testimonial.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Strategy?
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Let's work together to achieve your business goals with our proven
            digital marketing expertise.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">
                Digital Marketing Agency
              </h3>
              <p className="text-muted-foreground mb-4">
                Strategic digital solutions for modern businesses.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/services/seo"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    SEO Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/google-ads"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Google Ads
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/brand-marketing"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Brand Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/cybersecurity"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Cybersecurity
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <address className="not-italic text-muted-foreground">
                <p>123 Marketing Street</p>
                <p>Business District</p>
                <p>New York, NY 10001</p>
                <p className="mt-2">Email: info@digitalagency.com</p>
                <p>Phone: (555) 123-4567</p>
              </address>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Digital Marketing Agency. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
