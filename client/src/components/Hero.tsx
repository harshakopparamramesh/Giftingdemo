import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Premium_corporate_gift_hampers_93ef8ddc.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium corporate gift hampers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Elevate Your Corporate Relationships
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Premium customized gifting solutions for businesses of all sizes. From employee appreciation to executive gifts, we deliver excellence every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" variant="default" className="text-base" data-testid="button-request-quote">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
              data-testid="button-view-catalog"
            >
              View Catalog
            </Button>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2 text-white/90">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm">Free Customization</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm">Bulk Discounts</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm">Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
