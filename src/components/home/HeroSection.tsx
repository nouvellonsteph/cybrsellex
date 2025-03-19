import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-cybrsellex-yellow py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-base font-medium">WELCOME TO CYBRSELLEX</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-baba uppercase leading-tight">
              We Protect Your Digital World
            </h1>
            <p className="text-lg max-w-md">
              At Cybrsellex, we connect top cybersecurity vendors with enterprises, offering trusted reselling, market expansion, and tailored security solutions backed by 20+ years of expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-black text-white hover:bg-black/80">
                <Link href="/services">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-black hover:bg-black/10">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="https://ext.same-assets.com/319795026/1156779127.webp"
              alt="Network Protection Globe"
              width={500}
              height={500}
              className="object-contain h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
