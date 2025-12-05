import { CheckCircle2, Zap, TrendingUp, Network, Target, Award } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="glass-dark rounded-xl p-8 group hover:glass transition-all duration-300">
    <div className="w-12 h-12 rounded-lg bg-indigo-600 bg-opacity-20 flex items-center justify-center mb-4 group-hover:bg-opacity-40 transition-all">
      {Icon}
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <CheckCircle2 size={24} className="text-indigo-400" />,
      title: 'Cross-Industry Expertise',
      description: 'We bring proven strategies from sports, politics, entertainment, and corporate sectors'
    },
    {
      icon: <TrendingUp size={24} className="text-indigo-400" />,
      title: 'Data-Driven Strategy',
      description: 'Every decision backed by analytics, research, and performance metrics'
    },
    {
      icon: <Zap size={24} className="text-indigo-400" />,
      title: 'End-to-End Production',
      description: 'From concept to execution—we handle full production and distribution'
    },
    {
      icon: <Award size={24} className="text-indigo-400" />,
      title: 'Elite Brand Design',
      description: 'Premium visual identity that stands out and commands attention'
    },
    {
      icon: <Network size={24} className="text-indigo-400" />,
      title: 'Influencer Network',
      description: 'Access to thousands of verified influencers across all niches and demographics'
    },
    {
      icon: <Target size={24} className="text-indigo-400" />,
      title: 'ROI-Focused Execution',
      description: 'We measure success by your growth, not vanity metrics'
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-indigo-950 via-black to-black bg-opacity-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Why Choose <span className="text-gradient">Eunoiva</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            The combination of expertise, creativity, and execution that sets us apart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}