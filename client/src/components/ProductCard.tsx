import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  onView?: (id: string) => void;
  onEnquire?: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  image,
  description,
  onView,
  onEnquire,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 group">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge
          className="absolute top-4 right-4 text-xs uppercase tracking-wide"
          variant="secondary"
        >
          {category}
        </Badge>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1" data-testid={`text-product-name-${id}`}>
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <p className="text-lg font-semibold text-primary" data-testid={`text-product-price-${id}`}>
          {price}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => onView?.(id)}
          data-testid={`button-view-${id}`}
        >
          <Eye className="mr-2 h-4 w-4" />
          View Details
        </Button>
        <Button
          size="sm"
          className="flex-1"
          onClick={() => onEnquire?.(id)}
          data-testid={`button-enquire-${id}`}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Enquire
        </Button>
      </CardFooter>
    </Card>
  );
}
