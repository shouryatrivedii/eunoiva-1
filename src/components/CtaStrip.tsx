import { Zap, ArrowRight } from 'lucide-react';

export default function CtaStrip() {
  return (
    <section className="py-16 lg:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-12 lg:p-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-transparent to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-indigo-600 bg-opacity-20">
              <Zap size={16} className="text-indigo-400" />
              <span className="text-sm text-indigo-300">Ready for Growth?</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Ready to Build a
              <br />
              <span className="text-gradient">Bold Brand?</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Let's transform your vision into a movement that captures hearts, minds, and market share.
            </p>

            <button className="btn-primary inline-flex items-center gap-2 text-lg">
              Get Started Today
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}