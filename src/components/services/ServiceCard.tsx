import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({
  icon = (
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
      Icon
    </div>
  ),
  title = "Service Title",
  description = "This is a brief description of the service we provide. It highlights the key benefits and features.",
  link = "/services/default",
}: ServiceCardProps) => {
  return (
    <Card className="w-full max-w-sm bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 text-sm">
          <li className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
            <span>Feature one of this service</span>
          </li>
          <li className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
            <span>Another key benefit</span>
          </li>
          <li className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
            <span>Something that makes us unique</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild variant="default" className="w-full group">
          <a href={link}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
