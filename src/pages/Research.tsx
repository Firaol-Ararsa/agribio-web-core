import React, { useState } from 'react';
import { Section, PageHeader } from '../components/Section';
import { Card } from '../components/Card';
import { content } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["All", "Crops", "Protection", "Health", "Technology"];

export default function Research() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = content.research.filter(
    p => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div className="pt-20">
      <PageHeader 
        title="Research & Projects" 
        subtitle="Explore our ongoing research initiatives and breakthroughs in agricultural biotechnology."
        image={content.images.microscope}
      />

      <Section>
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? "bg-green-600 text-white shadow-lg" 
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  title={project.title}
                  description={project.description}
                  tag={project.category}
                  image={project.image}
                  link={`/research/${project.id}`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </Section>

      <Section className="bg-slate-50 border-t">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Collaborative Research</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We believe in the power of partnership. NABRC collaborates with leading universities, international research centers, and private enterprises to accelerate the pace of innovation.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
                Partner With Us
              </button>
              <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors">
                View Past Collaborations
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 bg-white rounded-2xl shadow-sm border flex items-center justify-center p-8">
              <span className="text-slate-300 font-bold text-xl uppercase tracking-widest italic">Partner Logo</span>
            </div>
            <div className="h-40 bg-white rounded-2xl shadow-sm border flex items-center justify-center p-8">
              <span className="text-slate-300 font-bold text-xl uppercase tracking-widest italic">Partner Logo</span>
            </div>
            <div className="h-40 bg-white rounded-2xl shadow-sm border flex items-center justify-center p-8">
              <span className="text-slate-300 font-bold text-xl uppercase tracking-widest italic">Partner Logo</span>
            </div>
            <div className="h-40 bg-white rounded-2xl shadow-sm border flex items-center justify-center p-8">
              <span className="text-slate-300 font-bold text-xl uppercase tracking-widest italic">Partner Logo</span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}