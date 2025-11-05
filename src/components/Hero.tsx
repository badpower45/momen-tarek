import { ArrowDown, Instagram } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Red accent lines */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-red-600 opacity-20" />
      <div className="absolute top-0 right-1/4 w-1 h-full bg-red-600 opacity-20" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-8">
        {/* Logo */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-50" />
            <div className="relative bg-black rounded-2xl md:rounded-3xl p-4 md:p-8 border-2 md:border-4 border-red-600">
              <div className="flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="md:w-20 md:h-20">
                  <text x="50" y="60" fill="#dc2626" fontSize="48" fontWeight="bold" textAnchor="middle">MTR</text>
                </svg>
              </div>
              <div className="text-white text-xs mt-1 md:mt-2">TEAM MOMEN TAREK</div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-white mb-2">
          <span className="block text-3xl sm:text-5xl md:text-7xl tracking-wider">TEAM MOMEN</span>
          <span className="block text-4xl sm:text-6xl md:text-8xl text-red-600 tracking-wider mt-1 md:mt-2">TAREK</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm sm:text-base md:text-xl mb-4 md:mb-6 max-w-3xl mx-auto px-2">
          Elite Brazilian Jiu-Jitsu Training | Mixed Martial Arts Excellence
        </p>

        {/* Tagline */}
        <p className="text-white text-base sm:text-lg md:text-2xl mb-8 md:mb-12 px-2">
          Champions Rise. Legends Are Made. Victory Is Ours.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
          <Button 
            onClick={() => scrollToSection('history')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-5 md:px-8 md:py-6 w-full sm:w-auto"
          >
            Our Legacy
          </Button>
          <Button 
            onClick={() => window.open('https://instagram.com/team_momen_tarek', '_blank')}
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-5 md:px-8 md:py-6 w-full sm:w-auto"
          >
            <Instagram className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Follow Us
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-red-600 h-8 w-8" />
        </div>
      </div>
    </section>
  );
}
