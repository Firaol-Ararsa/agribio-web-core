import { Section, PageHeader } from '../components/Section';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { content } from '../data/content';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We will get back to you soon!");
  };

  return (
    <div className="pt-20">
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries, collaboration, or service requests."
        image={content.images.researchDna}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:outline-none bg-slate-50/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:outline-none bg-slate-50/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:outline-none bg-slate-50/50">
                    <option>General Inquiry</option>
                    <option>Research Collaboration</option>
                    <option>Laboratory Services</option>
                    <option>Training Programs</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={6} required placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:outline-none bg-slate-50/50"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-all flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 text-green-700 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Our Location</h5>
                    <p className="text-sm text-slate-600">123 Biotech Ave, Research Park, Science City, SC 45678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 text-green-700 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Phone Number</h5>
                    <p className="text-sm text-slate-600">+1 (234) 567-8900</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 text-green-700 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Email Address</h5>
                    <p className="text-sm text-slate-600">info@nabrc.gov</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-900 text-white rounded-[2rem]">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-green-400" />
                Working Hours
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Monday - Friday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Saturday</span>
                  <span>9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Sunday</span>
                  <span className="text-green-400">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}