import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-spacing">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass animate-fade-up">
          <Sparkles size={16} className="text-indigo-400" />
          <span className="text-sm text-gray-300">Welcome to the Future of Branding</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
          We Build Brands
          <br />
          <span className="text-gradient">That Break Through</span>
          <br />
          Noise.
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Eunoiva is a modern marketing agency helping brands scale through strategy, creativity, and digital impact. We turn visions into movements.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <button className="btn-primary flex items-center gap-2">
            Book a Consultation
            <ArrowRight size={18} />
          </button>
          <button className="btn-secondary">
            Submit Your Requirements
          </button>
        </div>

        <div className="mt-20 pt-20 border-t border-white border-opacity-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Brands Scaled', value: '50+' },
            { label: 'Team Members', value: '25+' },
            { label: 'Global Reach', value: '15+ Countries' }
          ].map((stat, i) => (
            <div key={i} className="animate-fade-up" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
              <div className="text-4xl font-black text-gradient mb-2">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}