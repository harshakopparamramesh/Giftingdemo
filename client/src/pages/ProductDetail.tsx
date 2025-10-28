import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, Package, Truck, RotateCcw, Star } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

import productImg from "@assets/generated_images/Gourmet_gift_basket_9f76f878.png";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([]);

  const customizationOptions = [
    "Add Company Logo",
    "Include Gift Message",
    "Premium Packaging",
    "Express Delivery",
  ];

  const handleCustomizationToggle = (option: string) => {
    setSelectedCustomizations((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/products">
          <Button variant="ghost" className="mb-6 -ml-4" data-testid="button-back">
            <ChevronLeft className="mr-2 h-5 w-5" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-4">
              <img
                src={productImg}
                alt="Gourmet Gift Basket"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-md bg-muted hover-elevate cursor-pointer"
                >
                  <img
                    src={productImg}
                    alt={`Product view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4">
              <Badge variant="secondary">Premium Category</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">Gourmet Gift Basket</h1>
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-primary text-primary"
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">(48 reviews)</span>
            </div>
            <p className="text-3xl font-bold text-primary mb-6" data-testid="text-price">
              From $99
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Delight your clients and employees with our premium gourmet gift basket. Carefully curated with artisanal foods, premium chocolates, specialty coffee, and fine wine, all elegantly presented in a handwoven basket with your custom branding.
            </p>

            <Separator className="my-6" />

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Product Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Dimensions:</span>
                    <p className="font-medium">16" x 12" x 8"</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Weight:</span>
                    <p className="font-medium">5 lbs</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Serves:</span>
                    <p className="font-medium">4-6 people</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Shelf Life:</span>
                    <p className="font-medium">6 months</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">Customization Options</h3>
                <div className="space-y-3">
                  {customizationOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={selectedCustomizations.includes(option)}
                        onCheckedChange={() => handleCustomizationToggle(option)}
                        data-testid={`checkbox-${option.toLowerCase().replace(/\s+/g, '-')}`}
                      />
                      <Label htmlFor={option} className="text-sm cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <Label htmlFor="quantity" className="mb-2 block">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-32"
                  data-testid="input-quantity"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Minimum order: 10 units
                </p>
              </div>

              <Button size="lg" className="w-full" data-testid="button-enquire">
                Enquire Now
              </Button>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Package className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Bulk Order Benefits</p>
                  <p className="text-xs text-muted-foreground">
                    Special pricing for orders over 50 units
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Truck className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Delivery Timeline</p>
                  <p className="text-xs text-muted-foreground">
                    5-7 business days for standard orders
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <RotateCcw className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Return Policy</p>
                  <p className="text-xs text-muted-foreground">
                    30-day satisfaction guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
