import { getServiceById } from "@/lib/services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: {
    service: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceById(params.service);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Service Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                {service.category}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {service.description}
              </p>
              <div className="text-2xl font-bold text-green-600 mb-6">
                {service.price}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What's Included
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <Button size="lg" className="w-full md:w-auto">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>About This Service</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              {service.longDescription}
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Contact us today to discuss your project and get a custom quote.
          </p>
          <div className="space-x-4">
            <Button size="lg">
              Contact Us
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
