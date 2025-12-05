import { ArrowUpRight } from 'lucide-react';

const CaseStudyCard = ({ title, category, result, image }: { title: string, category: string, result: string, image: string }) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden rounded-xl mb-4 h-64 glass">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
        <div className="flex items-center gap-2 text-indigo-400">
          <span className="font-semibold">View Case Study</span>
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <span className="text-xs text-indigo-400 font-semibold uppercase">{category}</span>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500 text-sm">{result}</p>
    </div>
  </div>
);

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Sports Brand Launch',
      category: 'Social & PR',
      result: '+250% social reach in 3 months',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=500&h=300&fit=crop'
    },
    {
      title: 'Political Campaign',
      category: 'Influencer Marketing',
      result: '5M+ impressions, 15K+ conversions',
      image: 'https://images.pexels.com/photos/3427773/pexels-photo-3427773.jpeg?w=500&h=300&fit=crop'
    },
    {
      title: 'Influencer Network Build',
      category: 'Media Services',
      result: 'Network of 2K+ verified creators',
      image: 'https://images.pexels.com/photos/3321082/pexels-photo-3321082.jpeg?w=500&h=300&fit=crop'
    },
    {
      title: 'Brand Redesign',
      category: 'Brand Development',
      result: '+180% engagement post-rebrand',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?w=500&h=300&fit=crop'
    },
    {
      title: 'Content Series Production',
      category: 'Media Services',
      result: '10M+ views, 3 seasons produced',
      image: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?w=500&h=300&fit=crop'
    },
    {
      title: 'E-commerce Launch',
      category: 'Full-Service',
      result: '$2M revenue in first year',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=500&h=300&fit=crop'
    }
  ];

  return (
    <section className="section-spacing">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-gray-400 text-xl">
            Recent projects and case studies showcasing our impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <CaseStudyCard
                title={study.title}
                category={study.category}
                result={study.result}
                image={study.image}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-up">
          <button className="btn-primary inline-flex items-center gap-2">
            View All Projects
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}