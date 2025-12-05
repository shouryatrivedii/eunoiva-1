import { Zap } from 'lucide-react';

export default function About() {
  return (
    <section className="section-spacing bg-gradient-to-b from-black via-black to-indigo-950 bg-opacity-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-2 rounded-lg glass-dark">
              <Zap size={16} className="text-indigo-400" />
              <span className="text-xs text-gray-400">ABOUT US</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Full-Service Branding &
              <span className="text-gradient"> Marketing Excellence</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              We're not just an agency. We're strategic partners in your brand's evolution. From social media to press relations, from creative strategy to influencer partnerships—we handle the entire spectrum of brand acceleration.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              Every project is backed by data-driven insights, creative excellence, and a network that spans sports, politics, entertainment, and beyond.
            </p>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative h-96 rounded-2xl overflow-hidden glass">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-900 opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-600 bg-opacity-20 flex items-center justify-center">
                    <Zap size={48} className="text-indigo-400" />
                  </div>
                  <p className="text-gray-300 font-semibold">Award-Winning</p>
                  <p className="text-gray-500 text-sm">Brand Strategy & Execution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}