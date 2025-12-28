import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Florida Boat Removal</h3>
            <div className="text-background/80 text-sm space-y-2">
              <p>201 Seminole St., Clearwater, FL 33755</p>
              <p>4470 Anglers Ave, Fort Lauderdale, FL 33312</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors">Service Area</a></li>
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors">Vessel Type</a></li>
              <li><a href="#pricing" className="text-background/80 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pompano-beach-boat-removal" className="text-background/80 hover:text-primary transition-colors">
                  Pompano Beach, FL
                </Link>
              </li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Fort Lauderdale, FL</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Miami, FL</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">All Broward County</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">754-224-8555</li>
              <li><a href="mailto:quote@boatsremoval.com" className="text-background/80 hover:text-primary transition-colors">quote@boatsremoval.com</a></li>
              <li className="text-background/80">24/7 Service</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-background/80 hover:text-primary transition-colors" aria-label="Facebook" data-testid="link-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors" aria-label="Twitter" data-testid="link-twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors" aria-label="Instagram" data-testid="link-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors" aria-label="LinkedIn" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Florida Boat Removal. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
