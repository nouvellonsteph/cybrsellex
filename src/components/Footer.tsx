"use client"

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Articles", href: "/articles" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
  return (
    <footer className="bg-cybrsellex-dark text-white">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/logo-dark.png"
                alt="CYBRSELLEX"
                width={180}
                height={65}
                className="h-auto"
              />
            </Link>
            <p className="text-sm mt-4">
              Your trusted cybersecurity reseller. Driving EMEA expansion, enterprise security, and vendor success.
              Expertise, innovation, and market acceleration for next-gen cybersecurity solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-cybrsellex-yellow transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a
                  href="mailto:info@cybrsellex.com"
                  className="text-sm hover:text-cybrsellex-yellow transition-colors"
                >
                  info@cybrsellex.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a
                  href="tel:+33617526502"
                  className="text-sm hover:text-cybrsellex-yellow transition-colors"
                >
                  +33 6 17526502
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-cybrsellex-yellow py-4 text-center text-black">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © 2025 CYBRSELLEX. All Rights Reserved.
            <Link href="/privacy-policy" className="underline ml-1">
              Privacy Policy.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
