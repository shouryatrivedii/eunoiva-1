import { BookOpen, Radio, Palette, Users } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, services }: { icon: React.ReactNode, title: string, services: string[] }) => (
  <div className="glass rounded-xl p-8 hover:border-indigo-500 transition-all duration-300 hover:bg-opacity-20 group">
    <div className="w-12 h-12 rounded-lg bg-indigo-600 bg-opacity-20 flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all">
      {Icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <ul className="space-y-3">
      {services.map((service, i) => (
        <li key={i} className="text-gray-400 flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
          <span>{service}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Services() {
  const serviceCategories = [
    {
      title: 'Social & PR',
      icon: <Radio size={24} className="text-indigo-400" />,
      services: [
        'Social Media Marketing',
        'PR for Sports & Politics',
        'Event Management',
        'Brand Strategy',
        'Pitch Deck Creation',
        'Sponsorship Acquisition',
        'CSR Link-Ups'
      ]
    },
    {
      title: 'Media Services',
      icon: <BookOpen size={24} className="text-indigo-400" />,
      services: [
        'Podcast Production',
        'YouTube Management',
        'Interview Shoots',
        'Studio-grade Content',
        'Distribution Strategy',
        'Audience Growth',
        'Analytics & Reporting'
      ]
    },
    {
      title: 'Brand Development',
      icon: <Palette size={24} className="text-indigo-400" />,
      services: [
        'Brand Kits',
        'Logo Design',
        'Packaging Design',
        'Website Development',
        'Brand Guidelines',
        'Visual Identity',
        'Brand Messaging'
      ]
    },
    {
      title: 'Influencer Marketing',
      icon: <Users size={24} className="text-indigo-400" />,
      services: [
        'Influencer Sourcing',
        'Campaign Management',
        'Collaboration Planning',
        'Contract Negotiation',
        'Reporting & Analytics',
        'Performance Tracking',
        'Community Management'
      ]
    }
  ];

  return (
    <section className="section-spacing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            End-to-end solutions spanning every aspect of modern brand building and marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category, i) => (
            <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <ServiceCard
                icon={category.icon}
                title={category.title}
                services={category.services}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}