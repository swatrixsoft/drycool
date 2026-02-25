import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-slate-600 bg-white">
                <Image src="/images/logo-old.png" alt="Drycool logo" fill className="object-contain p-1" />
              </div>
              <span className="font-bold text-lg">{siteContent.company.name}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteContent.company.description}
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/products/screw-chiller" className="hover:text-white transition-colors">Screw Chillers</Link></li>
              <li><Link href="/products/scroll-chiller" className="hover:text-white transition-colors">Scroll Chillers</Link></li>
              <li><Link href="/products/air-cooled" className="hover:text-white transition-colors">Air-Cooled</Link></li>
              <li><Link href="/products/water-cooled" className="hover:text-white transition-colors">Water-Cooled</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Chiller AMC</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Commissioning</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Technical Support</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Spare Parts</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start space-x-2">
                <Phone size={18} className="mt-1 flex-shrink-0 text-blue-600" />
                <span>CALL: {siteContent.company.phone}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail size={18} className="mt-1 flex-shrink-0 text-blue-600" />
                <span>{siteContent.company.email}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-blue-600" />
                <div>
                  <p>{siteContent.company.address}</p>
                  <p className="mt-1 text-xs">Works 1: {siteContent.company.works1}</p>
                  <p className="text-xs">Works 2: {siteContent.company.works2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} Drycool Systems. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://www.facebook.com/Drycoolchillers/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/drycool-systems-india-private-limited" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/drycoolchillers" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCKBDberY3tU3S47r5dqpXbA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
