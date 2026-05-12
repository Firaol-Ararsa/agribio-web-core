import { Leaf, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white leading-tight">NABRC</span>
            </div>
            <p className="text-sm leading-relaxed">
              Advancing agricultural biotechnology through innovative research, professional training, and sustainable solutions for a food-secure future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500 transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/research" className="hover:text-green-500 transition-colors">Research Projects</Link></li>
              <li><Link to="/services" className="hover:text-green-500 transition-colors">Laboratory Services</Link></li>
              <li><Link to="/publications" className="hover:text-green-500 transition-colors">Publications</Link></li>
              <li><Link to="/news" className="hover:text-green-500 transition-colors">News & Events</Link></li>
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h4 className="text-white font-semibold mb-6">Research Areas</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-green-500 cursor-pointer">Crop Improvement</li>
              <li className="hover:text-green-500 cursor-pointer">Genomics & Bioinformatics</li>
              <li className="hover:text-green-500 cursor-pointer">Plant Pathology</li>
              <li className="hover:text-green-500 cursor-pointer">Sustainable Biotech</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-sm">
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-green-500 shrink-0" />
              <span>Holeta Biotech 44, Holeta City, </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-green-500 shrink-0" />
              <span>+251 (9) 40-50-50-20</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-green-500 shrink-0" />
              <span>info@nabrc.gov.et</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {currentYear} National Agricultural Biotechnology Research Center. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
