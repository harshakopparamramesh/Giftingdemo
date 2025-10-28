import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  company,
  role,
  content,
  rating,
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "fill-primary text-primary"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          "{content}"
        </p>
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">
              {role}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
