import { PageLayout } from "@/components/PageLayout";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";

export const metadata = {
  title: "Services - CYBRSELLEX",
  description: "Comprehensive cybersecurity solutions designed to protect organizations and optimize security operations by bridging the gap between innovative security technologies and the businesses that need them most.",
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <section className="bg-cybrsellex-yellow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-baba text-center uppercase leading-tight mb-6">
            Services
          </h1>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseUsSection />
    </PageLayout>
  );
}
