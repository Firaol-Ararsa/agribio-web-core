import { Section, PageHeader } from '../components/Section';
import { content } from '../data/content';
import { Microscope, FlaskConical, GraduationCap, ShieldCheck } from 'lucide-react';

export default function Services() {
  const specializedServices = [
    { icon: FlaskConical, title: "Genomic Sequencing", detail: "Next-gen sequencing for diverse agricultural species." },
    { icon: Microscope, title: "Tissue Culture", detail: "Mass propagation of elite, disease-free plant varieties." },
    { icon: ShieldCheck, title: "Biosafety Audit", detail: "Ensuring compliance with national biotechnology regulations." },
    { icon: GraduationCap, title: "Student Internship", detail: "Practical hands-on training for biotech and agriculture students." },
  ];

  return (
    <div className="pt-20">
      <PageHeader 
        title="Our Services" 
        subtitle="Professional laboratory services, training programs, and technical consultancy."
        image={content.images.labServices}
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content.services.map((service, i) => (
            <div key={i} className="group cursor-default">
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-green-600 font-bold flex items-center hover:underline">
                Request Service Details
              </button>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <img src={content.images.training} className="w-full h-full object-cover grayscale" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">Specialized Research Support</h2>
            <p className="text-slate-400 mb-10 text-lg">
              We provide highly specialized technical support for individual researchers and commercial enterprises in the biotech sector.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specializedServices.map((s, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-3 bg-green-600/20 text-green-400 rounded-lg">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{s.title}</h4>
                    <p className="text-xs text-slate-400">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">How to Access Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">1</div>
              <h4 className="font-bold mb-2">Inquiry</h4>
              <p className="text-sm text-slate-500">Contact our services division with your specific requirements.</p>
              <div className="hidden md:block absolute top-8 left-full w-full h-px bg-slate-200 -z-10" />
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">2</div>
              <h4 className="font-bold mb-2">Quotation</h4>
              <p className="text-sm text-slate-500">Receive a detailed proposal and timeline for the requested work.</p>
              <div className="hidden md:block absolute top-8 left-full w-full h-px bg-slate-200 -z-10" />
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">3</div>
              <h4 className="font-bold mb-2">Execution</h4>
              <p className="text-sm text-slate-500">Our team executes the project with highest scientific standards.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}