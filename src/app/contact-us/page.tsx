import { PageLayout } from "@/components/PageLayout";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact Us - CYBRSELLEX",
  description: "Have questions or need expert guidance on cybersecurity solutions? We're here to help! Connect with us for inquiries, partnerships, or support.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="bg-cybrsellex-yellow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-baba text-center uppercase leading-tight mb-6">
            Contact
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
