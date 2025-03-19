import Image from "next/image";

const services = [
  {
    title: "Consulting",
    description: "From the analysis of your challenges and priorities, we design efficient and secure architectures as well as the best support system.",
    imageUrl: "https://ext.same-assets.com/3668656011/59350674.webp",
  },
  {
    title: "Implementation",
    description: "We support you in the migration and implementation of all hyper automatisation projects so that you can make the best use of the assets.",
    imageUrl: "https://ext.same-assets.com/1930812977/1350272038.webp",
  },
  {
    title: "Managed Services",
    description: "For a seamless experience, our engineers can ensure the 24/7/365 operation of your designated environments.",
    imageUrl: "https://ext.same-assets.com/4224852816/1292900786.webp",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-cybrsellex-yellow">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-baba text-center mb-4">OUR SERVICES</h2>
        <p className="text-lg text-center max-w-4xl mx-auto mb-16">
          At Cybrsellex, we provide comprehensive cybersecurity solutions designed to protect organizations and optimize security operations by bridging the gap between innovative security technologies and the businesses that need them most.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-cybrsellex-dark text-white p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-baba text-center mb-4 uppercase">{service.title}</h3>
              <p className="text-sm text-center">{service.description}</p>

              {service.title === "Implementation" && (
                <ul className="mt-4 text-sm space-y-1 list-inside">
                  <li>Set up your autonomous SOC</li>
                  <li>Enrich Critical SOC Tools</li>
                  <li>Streamline SOC workflows with automation</li>
                  <li>Boost your SOC team's productivity, maturity & ROI</li>
                  <li>And enable them to focus on what matters, unlocking their full potential with ease.</li>
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
