import { Link } from "wouter";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  const services = [
    "Website Redesign",
    "Performance Optimization", 
    "SEO Enhancement",
    "Security Improvements",
    "Mobile Responsiveness"
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "#" },
    { name: "Blog", path: "#" }
  ];

  const support = [
    "Help Center",
    "Documentation", 
    "Privacy Policy",
    "Terms of Service",
    "Support"
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">
              PixelBoost
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming websites into powerful business tools with professional enhancement services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  data-testid={`link-social-${social.name.toLowerCase()}`}
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                    data-testid={`link-footer-service-${service.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors"
                    data-testid={`link-footer-company-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={item}>
                  {index === support.length - 1 ? (
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white transition-colors"
                      data-testid="link-footer-support-contact"
                    >
                      {item}
                    </Link>
                  ) : (
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      data-testid={`link-footer-support-${item.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400" data-testid="text-copyright">© 2024 PixelBoost. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-privacy">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-terms">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-cookies">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
