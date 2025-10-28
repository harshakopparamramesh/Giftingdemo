import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  itemCount?: number;
  onClick?: () => void;
}

export default function CategoryCard({
  title,
  description,
  image,
  itemCount,
  onClick,
}: CategoryCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer group"
      onClick={onClick}
      data-testid={`card-category-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-white/90 mb-3 line-clamp-2 leading-relaxed">
            {description}
          </p>
          {itemCount && (
            <p className="text-xs text-white/80">{itemCount} Products</p>
          )}
          <div className="flex items-center mt-3 text-sm font-medium group-hover:translate-x-1 transition-transform">
            <span>Explore</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </Card>
  );
}
