import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/contact", label: "Contact" },
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
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo on the left */}
        <Link href="/" className="font-bold ml-4">
          FitPro Trainer
        </Link>

        {/* Desktop Navigation - Center */}
        {!isMobile && (
          <div className="flex-1 flex justify-center space-x-4">
            <NavLinks />
          </div>
        )}

        {/* Theme Toggle in Center for Mobile */}
        {isMobile && (
          <div className="absolute left-1/2 -translate-x-1/2">
            <ThemeToggle />
          </div>
        )}

        {/* Theme Toggle on the Right for Desktop */}
        {!isMobile && <ThemeToggle />}

        {/* Mobile Navigation - Menu Button on Right */}
        {isMobile && (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[340px]">
              <div className="flex flex-col gap-4 py-4">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
}