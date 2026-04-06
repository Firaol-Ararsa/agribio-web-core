import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Leaf, Microscope, Beaker, Newspaper, BookOpen, Image, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/', icon: Leaf },
  { name: 'About', path: '/about', icon: Beaker },
  { name: 'Research', path: '/research', icon: Microscope },
  { name: 'Services', path: '/services', icon: Beaker },
  { name: 'News', path: '/news', icon: Newspaper },
  { name: 'Publications', path: '/publications', icon: BookOpen },
  { name: 'Gallery', path: '/gallery', icon: Image },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-green-800 leading-tight">NABRC</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Agricultural Biotech</span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                    isActive 
                      ? "text-green-700 bg-green-50/50" 
                      : "text-slate-600 hover:text-green-600 hover:bg-slate-50"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-green-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      isActive 
                        ? "text-green-700 bg-green-50" 
                        : "text-slate-600 hover:bg-slate-50"
                    )
                  }
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}