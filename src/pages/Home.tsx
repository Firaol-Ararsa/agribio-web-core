import { motion } from 'framer-motion';
import { ArrowRight, Microscope, Beaker, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { content } from '../data/content';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={content.images.heroField} 
            alt="Agriculture background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-600/20 text-green-400 text-sm font-semibold mb-6 border border-green-500/30">
              National Agricultural Biotech Center
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {content.home.hero.title}
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              {content.home.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/research" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-green-900/20">
                Explore Our Research
              </Link>
              <Link to="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-xl font-bold transition-all border border-white/20">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pioneering Sustainable Solutions</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              NABRC is at the forefront of agricultural innovation. We bridge the gap between advanced biotechnology and traditional farming, ensuring a resilient future for our national food systems. Our scientists work tirelessly to solve pressing challenges such as climate change, pest resistance, and nutritional deficiencies.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-50 rounded-lg"><Globe className="text-green-600 w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-slate-800">Global Impact</h4>
                  <p className="text-xs text-slate-500">Collaborating with international research bodies.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-50 rounded-lg"><ShieldCheck className="text-green-600 w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-slate-800">Sustainability</h4>
                  <p className="text-xs text-slate-500">Eco-friendly agricultural breakthroughs.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src={content.images.heroLab} 
              alt="Lab" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-green-600/10 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </Section>

      {/* Highlights */}
      <Section className="bg-slate-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Research Highlights</h2>
          <p className="text-slate-600">Discover how our research is transforming the agricultural landscape through innovative biotechnology.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.home.highlights.map((item, idx) => (
            <Card 
              key={idx}
              title={item.title}
              description={item.description}
              tag={item.tag}
              image={idx === 0 ? content.images.researchDna : idx === 1 ? content.images.microscope : content.images.greenhouse}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-green-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">"Bridging Science and Farming for a Better Tomorrow."</h2>
          <p className="text-xl text-green-100 mb-10">Join our newsletter to stay updated on the latest research, publications, and events at NABRC.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 w-full sm:w-80"
            />
            <button className="px-8 py-4 bg-white text-green-800 rounded-xl font-bold hover:bg-green-50 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}