import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Corporate Solutions", path: "/solutions" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-2 hover-elevate rounded-md px-3 py-2 -ml-3">
              <ShoppingBag className="h-6 w-6 md:h-7 md:w-7 text-primary" />
              <span className="text-xl md:text-2xl font-semibold">GiftCorp</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button
                  variant="ghost"
                  className={location === item.path ? "bg-accent" : ""}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setSearchOpen(!searchOpen)}
              data-testid="button-search-toggle"
              className="hidden md:flex"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/admin">
              <Button variant="default" size="sm" data-testid="button-admin">
                Admin
              </Button>
            </Link>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {searchOpen && (
          <div className="hidden md:block pb-4">
            <Input
              type="search"
              placeholder="Search products..."
              className="max-w-md"
              data-testid="input-search"
            />
          </div>
        )}

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Input
              type="search"
              placeholder="Search products..."
              className="mb-4"
              data-testid="input-search-mobile"
            />
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${location === item.path ? "bg-accent" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
