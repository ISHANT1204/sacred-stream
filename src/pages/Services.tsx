import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import BookingModal from '@/components/BookingModal';
import { Star, Calendar, Users, Clock } from 'lucide-react';

const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const services = [
    {
      id: 'pandit-booking',
      title: 'Pandit Booking',
      description: 'Book verified and experienced pandits for your religious ceremonies and rituals.',
      icon: Star,
      color: 'from-orange-500 to-red-500',
      features: ['Verified Pandits', 'Home Service', 'Flexible Timing', 'All Rituals']
    },
    {
      id: 'online-consultation',
      title: 'Online Consultation',
      description: 'Get spiritual guidance and astrological advice from expert pandits via video call.',
      icon: Calendar,
      color: 'from-blue-500 to-purple-500',
      features: ['Video Consultation', 'Instant Connect', 'Expert Advice', 'Confidential']
    },
    {
      id: 'horoscope-reading',
      title: 'Horoscope Reading',
      description: 'Detailed horoscope analysis and predictions based on Vedic astrology principles.',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      features: ['Vedic Astrology', 'Detailed Report', 'Future Predictions', 'Remedies']
    },
    {
      id: 'home-pooja',
      title: 'Home Pooja',
      description: 'Complete pooja arrangements at your home with all necessary items and rituals.',
      icon: Clock,
      color: 'from-purple-500 to-pink-500',
      features: ['Complete Setup', 'Sacred Items', 'Traditional Rituals', 'Blessed Prasad']
    }
  ];

  const handleBookService = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 spiritual-text-gradient">
            Our Sacred Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with verified pandits and spiritual experts for authentic religious ceremonies, 
            consultations, and guidance rooted in ancient traditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={() => handleBookService(service.id)}
            />
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-muted-foreground">
              We ensure authentic spiritual experiences with verified professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 spiritual-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Verified Experts</h3>
              <p className="text-sm text-muted-foreground">All our pandits are thoroughly verified and experienced</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 spiritual-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-muted-foreground">Book services according to your convenience and muhurat</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 spiritual-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Trusted Platform</h3>
              <p className="text-sm text-muted-foreground">Join thousands of satisfied devotees who trust our services</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        serviceId={selectedService}
      />
    </div>
  );
};

export default Services;