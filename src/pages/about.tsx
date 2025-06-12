import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Results-Driven",
      description:
        "We focus on delivering measurable results that drive real business growth.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Focused",
      description:
        "Your success is our success. We work as an extension of your team.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description:
        "Honest, transparent communication and ethical business practices.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in digital marketing with expertise in SEO and brand strategy.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      name: "Michael Chen",
      role: "Head of Paid Advertising",
      bio: "Google Ads certified expert with 10+ years managing multi-million dollar campaigns.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      name: "Emma Rodriguez",
      role: "Cybersecurity Director",
      bio: "Former enterprise security consultant with expertise in threat assessment.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary/10 py-16  ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Agency
            </h1>
            <p className="text-xl text-muted-foreground">
              We are a team of digital marketing experts dedicated to helping
              businesses thrive in the digital landscape through strategic,
              data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Founded in 2014, our agency began with a simple mission: to help
                businesses navigate the complex world of digital marketing with
                clarity and confidence.
              </p>
              <p className="text-lg mb-4 text-muted-foreground">
                Over the years, we have evolved from a small startup to a
                full-service digital marketing agency, serving clients across
                various industries and helping them achieve remarkable growth.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we combine cutting-edge technology with proven strategies
                to deliver exceptional results for our clients.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work
              with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {value.icon}
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team brings together diverse expertise in digital
              marketing, technology, and business strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Let us help you achieve your digital marketing goals with our proven
            expertise.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
