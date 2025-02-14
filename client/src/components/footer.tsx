import { Link } from "wouter";
import { Instagram, Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold">FitPro Trainer</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Transform your life through expert personal training and dedicated guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services">
                  <a className="text-sm text-muted-foreground hover:text-primary">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="text-sm text-muted-foreground hover:text-primary">Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="/success-stories">
                  <a className="text-sm text-muted-foreground hover:text-primary">Success Stories</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: imanujrai7@gmail.com
              </li>
              <li className="text-sm text-muted-foreground">
                Phone: (+91) 87999 33509
              </li>
              <li className="text-sm text-muted-foreground">
                Location: India
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold">Follow Me</h3>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.instagram.com/manuj_rai_official" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/manujrai/" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/manuj-rai" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FitPro Trainer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
