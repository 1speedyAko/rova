import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const services = [
    {
      name: "SEO",
      path: "/services/seo",
      description: "Boost your search rankings and organic traffic",
    },
    {
      name: "Google Ads",
      path: "/services/google-ads",
      description: "Targeted advertising to reach your ideal customers",
    },
    {
      name: "Brand Marketing",
      path: "/services/brand-marketing",
      description: "Build a strong, recognizable brand identity",
    },
    {
      name: "Cybersecurity",
      path: "/services/cybersecurity",
      description: "Protect your business from digital threats",
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">
                DigiMarkPro
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <li key={service.name} className="row-span-1">
                          <Link to={service.path}>
                            <NavigationMenuLink asChild>
                              <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">
                                  {service.name}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      )}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/contact">
              <Button variant="default" className="ml-4">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
          >
            Home
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="relative">
            <button
              className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={(e) => {
                e.preventDefault();
                const dropdown = document.getElementById(
                  "mobile-services-dropdown",
                );
                dropdown?.classList.toggle("hidden");
              }}
            >
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div
              id="mobile-services-dropdown"
              className="hidden pl-4 py-2 space-y-2"
            >
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
