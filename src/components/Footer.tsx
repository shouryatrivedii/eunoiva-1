import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white border-opacity-10">
      <div className="section-spacing">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-black mb-4">Eunoiva</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Modern marketing & brand acceleration agency. Helping brands break through the noise.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Social & PR</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Media Production</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Brand Development</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Influencer Marketing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-indigo-400" />
                  <a href="mailto:hello@eunoiva.com" className="hover:text-indigo-400 transition-colors">hello@eunoiva.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-indigo-400" />
                  <a href="tel:+1234567890" className="hover:text-indigo-400 transition-colors">+1 (234) 567-890</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white border-opacity-10 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-4 text-white">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, href: '#' },
                    { icon: Instagram, href: '#' },
                    { icon: Twitter, href: '#' }
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.href}
                        className="w-10 h-10 rounded-lg bg-indigo-600 bg-opacity-20 flex items-center justify-center hover:bg-opacity-40 transition-all"
                      >
                        <Icon size={18} className="text-indigo-400" />
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm">
                  © 2024 Eunoiva. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}