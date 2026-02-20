import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SOCIAL_LINKS = [
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com' },
  { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com' },
  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0A1628] to-[#1C2833] rounded-xl flex items-center justify-center">
                <span className="text-[#D4AF37] font-bold text-sm">PP</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#0A1628] font-display font-extrabold text-lg leading-none">
                  PPSN
                </span>
                <span className="text-[#4A6FA5] text-[10px] font-mono tracking-wider leading-none mt-0.5">
                  ENERGY SERVICES
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-[#4A6FA5] mb-6 leading-relaxed max-w-xs">
              Petroleum Production Services Namibia — Your trusted indigenous energy services partner backed by Petrolog Group.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl text-[#4A6FA5] hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#0A1628] mb-5 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about', isRoute: false },
                { label: 'Our Services', href: '#services', isRoute: false },
                { label: 'Projects', href: '#projects', isRoute: false },
                { label: 'Contact Us', href: '/contact', isRoute: true },
                { label: 'Careers', href: '#', isRoute: false },
                { label: 'News & Insights', href: '#', isRoute: false },
              ].map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="font-body text-sm text-[#4A6FA5] hover:text-[#0A1628] transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="font-body text-sm text-[#4A6FA5] hover:text-[#0A1628] transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#0A1628] mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Drilling & Well Services',
                'Marine & Subsea',
                'Production Support',
                'Technical Services',
                'HSE Consulting',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-body text-sm text-[#4A6FA5] hover:text-[#0A1628] transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {service}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#0A1628] mb-5 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="font-body text-sm text-[#0A1628] font-medium block">Walvis Bay, Namibia</span>
                  <span className="font-body text-xs text-[#4A6FA5]">Head Office</span>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="font-body text-sm text-[#0A1628] font-medium block">+264 64 XXX XXX</span>
                  <span className="font-body text-xs text-[#4A6FA5]">Mon - Fri, 8am - 5pm</span>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="font-body text-sm text-[#0A1628] font-medium block">info@ppsngroup.com</span>
                  <span className="font-body text-xs text-[#4A6FA5]">General enquiries</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-[#4A6FA5]">
            © 2026 PPSN. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[#4A6FA5]">
            <span className="font-body text-xs">Part of</span>
            <span className="font-heading font-bold text-sm text-[#D4AF37]">Petrolog Group</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-[#4A6FA5] hover:text-[#0A1628] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-[#4A6FA5] hover:text-[#0A1628] transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
