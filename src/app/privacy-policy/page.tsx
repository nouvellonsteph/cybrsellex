import { PageLayout } from "@/components/PageLayout";

export const metadata = {
  title: "Privacy Policy - CYBRSELLEX",
  description: "Our Privacy Policy outlines how we collect, use, and protect your personal information when you use our website or services.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <section className="bg-cybrsellex-yellow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-baba text-center uppercase leading-tight mb-6">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from cybrsellex.com.
            </p>

            <h2 className="text-2xl font-baba mt-8 mb-4">Personal Information We Collect</h2>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            </p>
            <p>
              Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.
            </p>

            <h2 className="text-2xl font-baba mt-8 mb-4">How We Use Your Personal Information</h2>
            <p>
              We use the information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
            </p>
            <p>
              Additionally, we use this information to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Communicate with you;</li>
              <li>Screen our orders for potential risk or fraud;</li>
              <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
            </ul>

            <h2 className="text-2xl font-baba mt-8 mb-4">Sharing Your Personal Information</h2>
            <p>
              We share your Personal Information with third parties to help us use your Personal Information, as described above.
            </p>
            <p>
              We also use Google Analytics to help us understand how our customers use the Site. You can read more about how Google uses your Personal Information here: <a href="https://policies.google.com/privacy" className="text-cybrsellex-purple underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.
            </p>

            <h2 className="text-2xl font-baba mt-8 mb-4">Your Rights</h2>
            <p>
              If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.
            </p>

            <h2 className="text-2xl font-baba mt-8 mb-4">Changes</h2>
            <p>
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
            </p>

            <h2 className="text-2xl font-baba mt-8 mb-4">Contact Us</h2>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:info@cybrsellex.com" className="text-cybrsellex-purple underline">info@cybrsellex.com</a>.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
