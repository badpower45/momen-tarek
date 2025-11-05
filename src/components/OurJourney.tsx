import { ImageWithFallback } from './figma/ImageWithFallback';
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export function OurJourney() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1725813961320-151288b4c4db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjM2NjY4OHww&ixlib=rb-4.1.0&q=80&w=1080',
      label: 'Training Session'
    },
    {
      src: 'https://images.unsplash.com/photo-1708134019801-829d760b5fff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtbWElMjBmaWdodGVyJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYyMzI5MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      label: 'Team Spirit'
    },
    {
      src: 'https://images.unsplash.com/photo-1689007669034-9ef988d89742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBhdGhsZXRlfGVufDF8fHx8MTc2MjM3NDUyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      label: 'Victory Moment'
    },
    {
      src: 'https://images.unsplash.com/photo-1676220672943-5100a727ba36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdXxlbnwxfHx8fDE3NjIzNzQ1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      label: 'Strength Training'
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl mb-3 md:mb-4 px-2">
            OUR <span className="text-red-600">JOURNEY</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg px-4">
            Follow us on Instagram to see our latest training sessions, achievements, and team moments.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <ImageWithFallback
                src={image.src}
                alt={image.label}
                className="w-full h-48 md:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm md:text-xl mb-1 md:mb-2">{image.label}</div>
                  <div className="text-red-400 text-xs md:text-sm">TMT</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <Button 
            onClick={() => window.open('https://instagram.com/team_momen_tarek', '_blank')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg w-full sm:w-auto"
          >
            <Instagram className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            View More on Instagram
            <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
