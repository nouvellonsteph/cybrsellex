import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-baba text-center mb-12">ABOUT CYBRSELLEX</h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-center">
            At Cybrsellex, we are more than just a reseller—we are your strategic partner in delivering cutting-edge cybersecurity solutions across the EMEA region. Our goal is to enhance security, streamline operations, and drive efficiency, ensuring that our customers have the tools and strategies they need to thrive in an increasingly interconnected and automated environment. Through our expertise and commitment to excellence, we empower businesses to secure their digital transformation with confidence and resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-cybrsellex-dark text-white overflow-hidden">
            <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <Image
                  src="https://ext.same-assets.com/3449007324/3668946121.webp"
                  alt="Cyber Defense"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-baba mb-2">CYBER DEFENSE</h3>
                <p className="text-sm">
                  Protecting networks, systems, and data from cyber threats through proactive security measures and threat mitigation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-cybrsellex-dark text-white overflow-hidden">
            <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <Image
                  src="https://ext.same-assets.com/4212305097/1461468763.webp"
                  alt="Data Protection"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-baba mb-2">DATA PROTECTION</h3>
                <p className="text-sm">
                  Ensuring data privacy, integrity, and compliance by implementing encryption, access controls, and secure storage.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
