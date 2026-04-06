import { Section, PageHeader } from '../components/Section';
import { Card } from '../components/Card';
import { content } from '../data/content';
import { Calendar, Tag, User } from 'lucide-react';

const newsItems = [
  {
    title: "New Biotech Hub Opens at NABRC",
    excerpt: "The hub will facilitate collaboration between industry players and academic researchers.",
    date: "Oct 24, 2023",
    category: "News",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Breakthrough in Wheat Rust Resistance",
    excerpt: "Our team has identified genes that provide robust resistance to devastating wheat rust variants.",
    date: "Oct 15, 2023",
    category: "Research",
    image: "https://images.unsplash.com/photo-1473615695634-d284ec918736?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Upcoming: Annual Biotech Symposium 2024",
    excerpt: "Registration is now open for our flagship event gathering experts from across the continent.",
    date: "Oct 05, 2023",
    category: "Events",
    image: "https://images.unsplash.com/photo-1540575861501-7ad060e1c83e?auto=format&fit=crop&q=80&w=800"
  }
];

export default function News() {
  return (
    <div className="pt-20">
      <PageHeader 
        title="News & Events" 
        subtitle="The latest updates from the forefront of agricultural biotechnology."
        image={content.images.training}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main News Area */}
          <div className="lg:col-span-2 space-y-12">
            {newsItems.map((news, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 group">
                <div className="md:w-1/3 h-64 rounded-2xl overflow-hidden shrink-0">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">{news.category}</span>
                    <span className="text-slate-400 text-sm flex items-center"><Calendar className="w-4 h-4 mr-1" /> {news.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-700 transition-colors">{news.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{news.excerpt}</p>
                  <button className="text-slate-900 font-bold border-b-2 border-green-600 pb-1 hover:text-green-700 transition-colors">Read Article</button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Upcoming Events</h4>
              <div className="space-y-6">
                {[
                  { title: "Genomics Workshop", date: "Nov 12" },
                  { title: "Public Lecture on GMOs", date: "Nov 25" },
                  { title: "Sustainable Ag Expo", date: "Dec 05" }
                ].map((ev, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex flex-col items-center justify-center border text-green-700 font-bold">
                      <span className="text-xs leading-none">{ev.date.split(' ')[0]}</span>
                      <span className="text-sm">{ev.date.split(' ')[1]}</span>
                    </div>
                    <span className="font-semibold text-slate-800 hover:text-green-600 cursor-pointer">{ev.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-600 p-8 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4">Newsletter</h4>
              <p className="text-sm text-green-100 mb-6">Get weekly updates directly in your inbox.</p>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-green-700 border-none placeholder:text-green-300 text-white mb-4" />
              <button className="w-full py-3 bg-white text-green-700 font-bold rounded-lg">Subscribe</button>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}