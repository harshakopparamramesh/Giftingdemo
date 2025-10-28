import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Award } from "lucide-react";
import teamImg from "@assets/generated_images/Professional_business_team_8ba9f858.png";

const values = [
  {
    icon: Heart,
    title: "Quality First",
    description: "We source only the finest products and ensure meticulous quality control at every step.",
  },
  {
    icon: Target,
    title: "Client Focus",
    description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "15+ years of industry expertise delivering exceptional corporate gifting solutions.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About GiftCorp</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Building meaningful business relationships through the art of thoughtful gifting
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, GiftCorp began with a simple mission: to help businesses strengthen their relationships through meaningful, high-quality corporate gifts.
                </p>
                <p>
                  What started as a small operation has grown into a trusted partner for over 500 corporations across North America. Our team of gifting experts brings together decades of experience in corporate relations, product curation, and logistics.
                </p>
                <p>
                  We believe that every gift tells a story. Whether you're recognizing employee achievements, thanking valued clients, or celebrating milestones, we help you make those moments memorable.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={teamImg}
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-xl text-center text-muted-foreground leading-relaxed mb-12">
              To elevate corporate relationships through premium, personalized gifting solutions that leave lasting impressions and strengthen business connections.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-sm text-muted-foreground">Corporate Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">50K+</p>
                <p className="text-sm text-muted-foreground">Gifts Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
