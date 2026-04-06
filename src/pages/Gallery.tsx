import { Section, PageHeader } from '../components/Section';
import { content } from '../data/content';
import { motion } from 'framer-motion';

const albums = [
  { title: "Main Laboratory", count: 12, image: content.images.heroLab },
  { title: "Experimental Greenhouse", count: 8, image: content.images.greenhouse },
  { title: "Field Trials", count: 15, image: content.images.heroField },
  { title: "Training Programs", count: 20, image: content.images.training },
];

const galleryImages = [
  content.images.researchDna,
  content.images.microscope,
  content.images.labServices,
  content.images.heroLab,
  content.images.greenhouse,
  content.images.heroField,
  content.images.training,
  "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1530836361253-efad5cb2fe21?auto=format&fit=crop&q=80&w=800"
];

export default function Gallery() {
  return (
    <div className="pt-20">
      <PageHeader 
        title="Institutional Gallery" 
        subtitle="Visual glimpses into our research facilities, field trials, and community activities."
        image={content.images.heroField}
      />

      <Section>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Albums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {albums.map((album, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
            >
              <img src={album.image} alt={album.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="text-xl font-bold text-white mb-1">{album.title}</h4>
                <p className="text-sm text-slate-300">{album.count} photos</p>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Recent Photos</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden break-inside-avoid shadow-md border border-slate-100"
            >
              <img src={img} alt={`Gallery item ${i}`} className="w-full hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}