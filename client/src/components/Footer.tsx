import { Link } from "wouter";
import { ShoppingBag, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">GiftCorp</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Elevating corporate relationships through premium, customized gifting solutions.
            </p>
            <p className="text-xs text-muted-foreground">
              Trusted by 500+ corporations
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-products">
                    Products
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-solutions">
                    Solutions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-about">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-contact">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Employee Gifts</li>
              <li className="text-sm text-muted-foreground">Festive Hampers</li>
              <li className="text-sm text-muted-foreground">Premium Executive</li>
              <li className="text-sm text-muted-foreground">Custom Branding</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">contact@giftcorp.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">New York, NY 10001</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="h-9 text-sm"
                  data-testid="input-newsletter"
                />
                <Button size="sm" data-testid="button-subscribe">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 GiftCorp. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
