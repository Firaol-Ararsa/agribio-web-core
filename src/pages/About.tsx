import { motion } from 'framer-motion';
import { Section, PageHeader } from '../components/Section';
import { Target, Eye, Users, Building, ShieldCheck, Award } from 'lucide-react';
import { content } from '../data/content';

export default function About() {
  const values = [
    { icon: Target, title: "Excellence", description: "Committed to the highest standards of scientific research and integrity." },
    { icon: Eye, title: "Innovation", description: "Continuously seeking new ways to solve agricultural challenges through biotechnology." },
    { icon: Users, title: "Collaboration", description: "Working together with global partners, farmers, and the community." },
    { icon: ShieldCheck, title: "Sustainability", description: "Prioritizing environmental health and long-term food security." },
  ];

  return (
    <div className="pt-20">
      <PageHeader 
        title="About NABRC" 
        subtitle="The National Agricultural Biotechnology Research Center is a premier center dedicated to advancing life sciences in agriculture."
        image={content.images.greenhouse}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our mission is to harness the power of biotechnology to transform agriculture into a more productive, sustainable, and resilient sector. We strive to empower farmers with advanced crop varieties and biological solutions that mitigate the risks of climate change and environmental stressors.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 pt-8">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To be a world-class center of excellence in agricultural biotechnology, providing innovative solutions that ensure national and global food security.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Institutional Objectives</h3>
            <ul className="space-y-4">
              {[
                "Develop climate-resilient crop varieties through genetic improvement.",
                "Enhance the nutritional value of staple crops for public health.",
                "Promote biosafety and regulatory standards in biotechnology.",
                "Provide high-level training and capacity building for researchers.",
                "Facilitate knowledge transfer from laboratory to farm."
              ].map((obj, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-green-600 shrink-0" />
                  <span className="text-slate-700 font-medium">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-900 text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-slate-400">The principles that guide our research and institutional culture.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-600/20 text-green-400 mb-6">
                <v.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-3">{v.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Organizational Structure</h2>
          <p className="text-slate-600">NABRC operates under a robust governance model to ensure scientific excellence and efficiency.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="p-6 bg-green-700 text-white rounded-xl font-bold w-64 text-center mb-8 shadow-lg">Board of Directors</div>
            <div className="w-0.5 h-12 bg-slate-200 mb-8" />
            <div className="p-6 bg-slate-800 text-white rounded-xl font-bold w-64 text-center mb-8 shadow-md">Director General</div>
            <div className="w-0.5 h-12 bg-slate-200" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full">
              <div className="p-6 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                <h5 className="font-bold text-slate-800 mb-2">Research Division</h5>
                <p className="text-xs text-slate-500">Crops, Animals, Microbes</p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                <h5 className="font-bold text-slate-800 mb-2">Operations Division</h5>
                <p className="text-xs text-slate-500">Finance, HR, Logistics</p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                <h5 className="font-bold text-slate-800 mb-2">Services Division</h5>
                <p className="text-xs text-slate-500">Labs, Training, Extension</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
