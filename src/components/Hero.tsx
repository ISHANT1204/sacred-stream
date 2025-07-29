
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Star, MapPin, Users } from 'lucide-react';

interface HeroProps {
  onBookService: (serviceId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onBookService }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 spiritual-gradient opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Connect with
              <span className="spiritual-text-gradient block">
                Spiritual Guidance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Book experienced pandits for home visits, online consultations, horoscope readings, 
              and traditional ceremonies. Bringing ancient wisdom to modern life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="spiritual-gradient text-lg px-8 py-6"
                onClick={() => onBookService('pandit-booking')}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Pandit Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => onBookService('online-consultation')}
              >
                Online Consultation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold spiritual-text-gradient">500+</div>
                <div className="text-sm text-muted-foreground">Verified Pandits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold spiritual-text-gradient">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold spiritual-text-gradient">4.9</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow float-animation">
                  <div className="flex items-center mb-3">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="font-semibold">4.9 Rating</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Highly rated pandits with verified reviews
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow float-animation" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-semibold">Home Service</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pandits available for home visits across India
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow float-animation" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="font-semibold">Flexible Timing</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Book services at your convenient time
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow float-animation" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 text-purple-500 mr-2" />
                    <span className="font-semibold">Expert Pandits</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Experienced in various rituals and ceremonies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
