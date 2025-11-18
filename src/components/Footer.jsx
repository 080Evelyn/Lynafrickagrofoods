import { Mail, MapPin, Phone } from "lucide-react";
import { socialMedia } from "@/constant";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const contacts = [
    {
      name: "Address",
      icon: <MapPin />,
      content: "Aiye Bus stop, 58 Osolo Way, Oshodi, Isolo, Lagos",
    },
    {
      name: "Phone",
      icon: <Phone />,
      content: "+234 916 130 2009",
    },
    {
      name: "Email",
      icon: <Mail />,
      content: "info@lynafrick.com",
    },
  ];

  return (
    <footer className="!bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home">
              <img src="/logo.svg" alt="Lynafrick Agro Foods" />
            </a>
            <p className="text-gray-300 mt-3 mb-6 leading-relaxed">
              Lynafrick Agro Foods produces nutritious flour directly from farm
              produce. Our premium, organic flours are natural, healthy, and
              free from preservatives.
            </p>

            <div className="flex space-x-3">
              {socialMedia.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center transition-all duration-300 transform hover:border border-gray-500 hover:scale-110`}
                  aria-label={`Follow us on ${platform.name}`}
                >
                  <img
                    src={platform.icon}
                    alt={`${platform.name} icon`}
                    className="w-5 h-5 filter brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-600 transition-all duration-300 hover:pl-2 block w-full text-left"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-5">
              {contacts.map((contact) => (
                <div key={contact.name}>
                  <div className="flex items-center space-x-2">
                    {contact.icon}
                    <span className="text-gray-300">{contact.name}</span>
                  </div>
                  <p className="text-gray-300">{contact.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Lynafrick Agro Foods. All rights
              reserved.
            </div>

            {/* Legal / Secure Payments */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="flex space-x-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
