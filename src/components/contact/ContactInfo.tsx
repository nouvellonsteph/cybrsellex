import { Mail, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-baba mb-6">Get in Touch With Us</h2>
      <p className="text-lg mb-8">
        Have questions or need expert guidance on cybersecurity solutions? We're here to help! Connect with us for inquiries, partnerships, or support.
      </p>
      <ul className="space-y-6">
        <li className="flex items-center space-x-4">
          <div className="bg-cybrsellex-yellow p-3 rounded-full">
            <Phone className="h-6 w-6" />
          </div>
          <a href="tel:+33617526502" className="text-lg hover:text-cybrsellex-purple transition-colors">
            +33 6 1752 6502
          </a>
        </li>
        <li className="flex items-center space-x-4">
          <div className="bg-cybrsellex-yellow p-3 rounded-full">
            <Mail className="h-6 w-6" />
          </div>
          <a href="mailto:info@cybrsellex.com" className="text-lg hover:text-cybrsellex-purple transition-colors">
            info@cybrsellex.com
          </a>
        </li>
      </ul>
    </div>
  );
}
