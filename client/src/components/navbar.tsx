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
    // { href: "/gallery", label: "Gallery" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLinks = () => (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <Button 
            variant={location === link.href ? "secondary" : "ghost"}
            className="w-full justify-start"
          >
            {link.label}
          </Button>
        </Link>
      ))}
      <Link href="/booking">
        <Button variant="default" className="w-full">
          Book a Session
        </Button>
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ml-4">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">FitPro Trainer</span>
          </Link>
        </div>

        {isMobile ? (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[340px]">
              <div className="flex flex-col gap-4 py-4">
                <NavLinks />
                <div className="ml-3">
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex flex-1 items-center justify-around space-x-2">
            <div className="flex items-center space-x-2">
              <NavLinks />
            </div>
            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
}