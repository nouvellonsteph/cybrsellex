import { PageLayout } from "@/components/PageLayout";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import Image from "next/image";

export const metadata = {
  title: "About Us - CYBRSELLEX",
  description: "At Cybrsellex, we are more than just a reseller—we are your strategic partner in delivering cutting-edge cybersecurity solutions across the EMEA region.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="bg-cybrsellex-yellow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-baba text-center uppercase leading-tight mb-6">
            About Us
          </h1>
        </div>
      </section>

      <AboutSection />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-baba mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                Our mission is to bridge the gap between innovation and implementation in the cybersecurity domain.
                We aim to empower businesses with the tools they need to protect their digital assets,
                while helping cybersecurity vendors reach enterprises that can benefit most from their solutions.
              </p>
              <p className="text-lg">
                We believe in partnership, excellence, and results-driven approaches to solving the complex cybersecurity
                challenges facing organizations today.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://ext.same-assets.com/691294892/2067241794.webp"
                alt="Network Security"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </PageLayout>
  );
}
