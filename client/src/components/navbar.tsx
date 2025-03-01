import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const [location] = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/contact", label: "Contact" },
    { href: "/gallery", label: "Gallery" },
  ];

  const NavLinks = () => (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <Button 
            variant={location === link.href ? "secondary" : "ghost"}
            className="w-full justify-start md:w-auto md:justify-center"
          >
            {link.label}
          </Button>
        </Link>
      ))}
      <Link href="/booking">
        <Button variant="default" className="w-full md:w-auto">
          Book a Session
        </Button>
      </Link>
    </>
  );

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform ${
        isMobile ? (isVisible ? "translate-y-0" : "-translate-y-full") : ""
      }`}
    >
      <div className="container flex h-14 items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2">
          {isMobile && (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[340px]">
                <div className="flex flex-col gap-4 py-4">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>
          )}
          <Link href="/" className="font-bold">
            FitPro Trainer
          </Link>
        </div>

        {/* Desktop Navigation - Center */}
        {!isMobile && (
          <div className="flex-1 flex justify-center space-x-4">
            <NavLinks />
          </div>
        )}

        {/* Theme Toggle on Right for Mobile & Desktop */}
        <div className="mr-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
