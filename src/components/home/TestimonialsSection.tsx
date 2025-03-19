import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Estelle Darcy",
    position: "Customer in the Industrial sector - referral available upon request",
    quote: "My sincere thanks for your expertise, which has greatly contributed to the evolution of SOC at our organization. The team's core strengths—leadership, competence, and commitment—have made the company our ideal technology partner, enabling us to manage IT operations with ease.",
    image: "https://ext.same-assets.com/1656640660/136207524.webp",
  },
  {
    name: "Francois Mercer",
    position: "Customer in the Personal Care sector - referral available upon request",
    quote: "I really enjoyed our collaboration. The support commitment to customers, flexibility, and skilled resource strength of the Cybrsellex team played a vital role in many IT transformational activities undertaken by us.",
    image: "https://ext.same-assets.com/1387701413/2182523744.jpeg",
  },
  {
    name: "Lars Peeters",
    position: "Customer in the Automotive sector - referral available upon request",
    quote: "Once again, thank you very much for your help in renewing our subscription. Cybrsellex expertise even helped our developers and product managers to think with a 'Security First' mindset. The relationship continues to go from strength to strength and we look forward to continuing this relationship in the future.",
    image: "https://ext.same-assets.com/4140026497/2438094220.jpeg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-cybrsellex-dark text-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-baba text-center mb-4">TESTIMONIAL</h2>
        <h3 className="text-2xl md:text-3xl font-baba text-center mb-12">REAL STORIES, REAL PROTECTION</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cybrsellex-dark p-6 rounded-lg border border-gray-700">
              <p className="text-sm mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
