import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface CardProps {
  title: string;
  description: string;
  image: string;
  tag?: string;
  link?: string;
  className?: string;
}

export function Card({ title, description, image, tag, link, className }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn("bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full", className)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {tag && (
          <span className="absolute top-4 left-4 bg-green-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
            {tag}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">{title}</h3>
        <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        {link && (
          <Link 
            to={link} 
            className="inline-flex items-center text-green-700 font-semibold text-sm group"
          >
            Learn More 
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

interface PublicationCardProps {
  title: string;
  authors: string;
  date: string;
  journal?: string;
  link?: string;
}

export function PublicationCard({ title, authors, date, journal, link }: PublicationCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 hover:border-green-200 transition-colors shadow-sm group">
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">{journal || 'Research Paper'}</span>
        <span className="text-xs text-slate-400">{date}</span>
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-500 mb-4">{authors}</p>
      <a 
        href={link || "#"} 
        className="text-sm text-green-600 font-semibold hover:underline"
      >
        Download PDF
      </a>
    </div>
  );
}