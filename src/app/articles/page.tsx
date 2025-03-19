import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Articles - CYBRSELLEX",
  description: "Stay informed with the latest cybersecurity insights, trends, and best practices through our expert articles and resources.",
};

const articleCards = [
  {
    title: "The Growing Importance of SOC Automation",
    excerpt: "Learn how Security Operations Center (SOC) automation can help organizations respond to threats faster and more efficiently.",
    imageSrc: "https://ext.same-assets.com/3449007324/3668946121.webp",
    date: "March 15, 2025",
  },
  {
    title: "Top 5 Cybersecurity Threats in 2025",
    excerpt: "Discover the most prevalent cybersecurity threats that organizations face in 2025 and how to protect against them.",
    imageSrc: "https://ext.same-assets.com/4012199409/2700159481.webp",
    date: "February 28, 2025",
  },
  {
    title: "How to Choose the Right Cybersecurity Vendor",
    excerpt: "A comprehensive guide to evaluating and selecting the best cybersecurity vendors for your organization's specific needs.",
    imageSrc: "https://ext.same-assets.com/1632940708/101600617.webp",
    date: "January 20, 2025",
  },
];

export default function ArticlesPage() {
  return (
    <PageLayout>
      <section className="bg-cybrsellex-yellow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-baba text-center uppercase leading-tight mb-6">
            Articles
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Stay informed with the latest cybersecurity insights, trends, and best practices through our expert articles and resources.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articleCards.map((article, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                <div className="h-48 relative">
                  <Image
                    src={article.imageSrc}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-xl font-baba mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button asChild variant="outline" className="w-full border-cybrsellex-dark">
                    <Link href="#">Read More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-cybrsellex-dark hover:bg-cybrsellex-dark/80">
              <Link href="/contact-us">Subscribe to Our Newsletter</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
