import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";
import { useState } from "react";

interface ProductFiltersProps {
  onClose?: () => void;
}

const categories = [
  "Employee Gifts",
  "Festive Hampers",
  "Premium Executive",
  "Custom Branding",
  "Wellness Gifts",
  "Tech Accessories",
];

const occasions = [
  "Anniversary",
  "Holiday Season",
  "Employee Recognition",
  "Client Appreciation",
  "New Year",
  "Corporate Events",
];

export default function ProductFilters({ onClose }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleOccasionToggle = (occasion: string) => {
    setSelectedOccasions((prev) =>
      prev.includes(occasion)
        ? prev.filter((o) => o !== occasion)
        : [...prev, occasion]
    );
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
    setSelectedOccasions([]);
    setPriceRange([0, 500]);
  };

  return (
    <div className="space-y-6 p-6 bg-card rounded-lg border">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Filters</h3>
        {onClose && (
          <Button
            size="icon"
            variant="ghost"
            onClick={onClose}
            className="md:hidden"
            data-testid="button-close-filters"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      <Separator />

      <div className="space-y-4">
        <h4 className="font-medium">Price Range</h4>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={500}
            step={10}
            className="w-full"
            data-testid="slider-price-range"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span data-testid="text-price-min">${priceRange[0]}</span>
            <span data-testid="text-price-max">${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h4 className="font-medium">Category</h4>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
                data-testid={`checkbox-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              />
              <Label
                htmlFor={category}
                className="text-sm font-normal cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h4 className="font-medium">Occasion</h4>
        <div className="space-y-3">
          {occasions.map((occasion) => (
            <div key={occasion} className="flex items-center space-x-2">
              <Checkbox
                id={occasion}
                checked={selectedOccasions.includes(occasion)}
                onCheckedChange={() => handleOccasionToggle(occasion)}
                data-testid={`checkbox-occasion-${occasion.toLowerCase().replace(/\s+/g, '-')}`}
              />
              <Label
                htmlFor={occasion}
                className="text-sm font-normal cursor-pointer"
              >
                {occasion}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <Button
        variant="outline"
        className="w-full"
        onClick={handleClearAll}
        data-testid="button-clear-filters"
      >
        Clear All Filters
      </Button>
    </div>
  );
}
