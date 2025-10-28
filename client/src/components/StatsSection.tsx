import { Users, Package, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Corporate Clients" },
  { icon: Package, value: "50K+", label: "Gifts Delivered" },
  { icon: Award, value: "98%", label: "Satisfaction Rate" },
  { icon: TrendingUp, value: "15+", label: "Years Experience" },
];

export default function StatsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-lg bg-primary/10 text-primary mb-4">
                  <Icon className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <p className="text-3xl md:text-4xl font-bold mb-2" data-testid={`stat-value-${index}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
