import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import StatsSection from "@/components/StatsSection";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Package, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";

import employeeGiftsImg from "@assets/generated_images/Employee_appreciation_gift_set_6548d5da.png";
import festiveImg from "@assets/generated_images/Festive_corporate_gift_hamper_941be143.png";
import premiumImg from "@assets/generated_images/Premium_executive_gift_box_3b1264b9.png";
import customImg from "@assets/generated_images/Custom_branded_merchandise_display_715ee15d.png";

const categoryImages: Record<string, string> = {
  Employee: employeeGiftsImg,
  Festive: festiveImg,
  Executive: premiumImg,
  Tech: customImg,
  Premium: premiumImg,
  Wellness: employeeGiftsImg,
};
const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Solutions Inc",
    role: "HR Director",
    content: "GiftCorp has been our go-to partner for corporate gifting for 3 years. Their attention to detail and quality of products is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Global Finance Corp",
    role: "Operations Manager",
    content: "The customization options and fast delivery have made our corporate events truly special. Highly recommended for bulk orders.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Marketing Pro Agency",
    role: "CEO",
    content: "Professional service from start to finish. Our clients love the premium gift hampers we send them every quarter.",
    rating: 5,
  },
];

const features = [
  {
    icon: Gift,
    title: "Customization",
    description: "Personalize every gift with your branding and messaging",
  },
  {
    icon: Package,
    title: "Bulk Pricing",
    description: "Competitive rates for orders of all sizes",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Only the finest products from trusted suppliers",
  },
];

export default function Home() {
  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const categoryCounts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = [
    {
      title: "Employee Appreciation",
      description: "Show your team they're valued with thoughtfully curated gift sets",
      image: employeeGiftsImg,
      itemCount: categoryCounts["Employee"] || 0,
    },
    {
      title: "Festive Celebrations",
      description: "Premium hampers for holidays and special occasions",
      image: festiveImg,
      itemCount: categoryCounts["Festive"] || 0,
    },
    {
      title: "Premium Executive",
      description: "Luxury gifts for C-suite and VIP clients",
      image: premiumImg,
      itemCount: categoryCounts["Executive"] + categoryCounts["Premium"] || 0,
    },
    {
      title: "Tech & Wellness",
      description: "Modern accessories and wellness items",
      image: customImg,
      itemCount: categoryCounts["Tech"] + categoryCounts["Wellness"] || 0,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Browse Our Categories
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Find the perfect gifts for every occasion and recipient
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <Link key={index} href="/products">
                <CategoryCard {...category} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose GiftCorp
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Delivering excellence in corporate gifting solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trusted by leading companies across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss your corporate gifting needs and create a customized solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base"
                  data-testid="button-contact-us"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  data-testid="button-browse-catalog"
                >
                  Browse Catalog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
