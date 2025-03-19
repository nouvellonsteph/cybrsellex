import Image from "next/image";

const reasons = [
  {
    title: "Trusted Expertise",
    description: "Cybrsellex delivers trusted cybersecurity expertise, leveraging 20+ years of experience, strategic vendor partnerships, and innovative solutions to protect businesses, mitigate risks, and drive security excellence across EMEA.",
    imageUrl: "https://ext.same-assets.com/3526192531/945569730.webp",
  },
  {
    title: "Comprehensive Protection",
    description: "Cybrsellex ensures end-to-end cybersecurity with advanced threat detection, risk management, SOC optimization, and tailored security solutions, safeguarding businesses against evolving cyber threats across EMEA.",
    imageUrl: "https://ext.same-assets.com/206601309/2782698525.webp",
  },
  {
    title: "24/7 Support",
    description: "Our dedicated security experts provide round-the-clock monitoring, threat detection, and incident response, ensuring continuous protection and rapid resolution against cyber threats anytime, anywhere.",
    imageUrl: "https://ext.same-assets.com/1632940708/101600617.webp",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h3 className="text-lg text-cybrsellex-purple font-medium mb-4">WHY CHOOSE US</h3>
          <h2 className="text-3xl md:text-4xl font-baba">WHY TRUST US FOR YOUR CYBERSECURITY NEEDS?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <Image
                  src={reason.imageUrl}
                  alt={reason.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-baba mb-4">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Image
            src="https://ext.same-assets.com/4012199409/2700159481.webp"
            alt="Cybersecurity Protection"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
