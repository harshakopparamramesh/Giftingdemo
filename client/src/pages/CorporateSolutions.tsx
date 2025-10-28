import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Package, Palette, TrendingUp, Users, Truck, Star } from "lucide-react";
import { Link } from "wouter";

import packagingImg from "@assets/generated_images/Gift_packaging_workspace_36d7567f.png";

const benefits = [
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "Personal support for all your corporate gifting needs",
  },
  {
    icon: Palette,
    title: "Full Customization",
    description: "Add your branding, messaging, and unique touches",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "From 10 to 10,000 gifts, we handle any volume",
  },
  {
    icon: Package,
    title: "Premium Packaging",
    description: "Elegant presentation that reflects your brand",
  },
  {
    icon: Truck,
    title: "Flexible Delivery",
    description: "Ship to multiple locations or bulk delivery",
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description: "Every gift inspected before shipment",
  },
];

const process = [
  {
    step: "1",
    title: "Consultation",
    description: "We understand your needs, budget, and timeline",
  },
  {
    step: "2",
    title: "Curation",
    description: "Our experts select the perfect products",
  },
  {
    step: "3",
    title: "Customization",
    description: "Add your branding and personal touches",
  },
  {
    step: "4",
    title: "Delivery",
    description: "Timely delivery with tracking and support",
  },
];

const packagingTiers = [
  {
    name: "Standard",
    price: "Included",
    features: ["Branded gift box", "Tissue paper", "Gift tag", "Basic ribbon"],
  },
  {
    name: "Premium",
    price: "+$15/unit",
    features: ["Luxury gift box", "Custom printed tissue", "Embossed tag", "Satin ribbon", "Personalized card"],
  },
  {
    name: "Executive",
    price: "+$35/unit",
    features: ["Wooden presentation box", "Velvet lining", "Laser engraved tag", "Premium ribbon", "Wax seal", "Handwritten note"],
  },
];

export default function CorporateSolutions() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center bg-muted">
        <div className="absolute inset-0">
          <img
            src={packagingImg}
            alt="Corporate gifting solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Corporate Gifting Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Scalable, customizable, and expertly managed gifting programs for businesses of all sizes
            </p>
            <Link href="/contact">
              <Button size="lg" variant="default" data-testid="button-get-started">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Corporate Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need for successful corporate gifting programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Simple, streamlined approach to corporate gifting
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Packaging Options
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose the perfect presentation for your gifts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packagingTiers.map((tier, index) => (
              <Card key={index} className={index === 1 ? "border-primary shadow-lg" : ""}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-6">
                    {tier.price}
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Corporate Gifting Program?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a personalized consultation and quote
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              data-testid="button-contact"
            >
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
