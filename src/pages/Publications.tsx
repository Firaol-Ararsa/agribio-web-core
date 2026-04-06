import { Section, PageHeader } from '../components/Section';
import { PublicationCard } from '../components/Card';
import { Search, Download, Filter } from 'lucide-react';

const publications = [
  {
    title: "Genome-wide association mapping of drought tolerance in tropical maize",
    authors: "Dr. Elena Vance, Prof. Samuel Okafor, et al.",
    date: "Sept 2023",
    journal: "Nature Plants"
  },
  {
    title: "Sustainable biopesticide production using local fungal isolates",
    authors: "Michael Chen, Sarah Green",
    date: "Aug 2023",
    journal: "Biotech Progress"
  },
  {
    title: "NABRC Annual Institutional Report 2022-2023",
    authors: "Institutional Publication",
    date: "July 2023",
    journal: "Annual Report"
  },
  {
    title: "CRISPR-Cas9 mediated editing of rice for bacterial blight resistance",
    authors: "Dr. Robert Singh, Li Wei",
    date: "June 2023",
    journal: "Plant Science Journal"
  },
  {
    title: "Analysis of soil microbiome diversity in organic farming systems",
    authors: "Jessica Taylor, Mark Wilson",
    date: "May 2023",
    journal: "Applied Ecology"
  },
  {
    title: "Guidelines for Biosafety Regulation in Biotechnology Research",
    authors: "Policy Division",
    date: "April 2023",
    journal: "Policy Manual"
  }
];

export default function Publications() {
  return (
    <div className="pt-20">
      <PageHeader 
        title="Publications" 
        subtitle="Scientific papers, technical reports, and institutional resources."
        image={"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000"}
      />

      <Section>
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by title, author, or keyword..." 
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:outline-none bg-white shadow-sm"
            />
          </div>
          <button className="px-6 py-4 bg-white border border-slate-200 rounded-xl flex items-center text-slate-600 font-semibold hover:bg-slate-50">
            <Filter className="w-5 h-5 mr-2" />
            Filter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub, i) => (
            <PublicationCard key={i} {...pub} />
          ))}
        </div>

        {/* Resources Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Resources for Researchers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Laboratory Protocols",
              "Biosafety Manuals",
              "Submission Templates",
              "Equipment Manuals"
            ].map((res, i) => (
              <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between hover:border-green-300 transition-colors cursor-pointer group">
                <span className="font-bold text-slate-800">{res}</span>
                <Download className="w-5 h-5 text-slate-400 group-hover:text-green-600" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}