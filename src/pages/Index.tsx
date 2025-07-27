
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, Clock, MapPin, Phone, Mail, Menu, X, User, Heart, BookOpen, Home } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import BookingModal from '@/components/BookingModal';
import PanditCard from '@/components/PanditCard';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const services = [
    {
      id: 'pandit-booking',
      title: 'Book Pandit',
      description: 'Connect with experienced pandits for various religious ceremonies and rituals',
      icon: User,
      color: 'spiritual-orange',
      features: ['Home visits', 'Temple ceremonies', 'Wedding rituals', 'Graha pravesh']
    },
    {
      id: 'online-consultation',
      title: 'Online Consultation',
      description: 'Get spiritual guidance and consultation from the comfort of your home',
      icon: BookOpen,
      color: 'spiritual-saffron',
      features: ['Video calls', 'Instant messaging', 'Recorded sessions', 'Follow-up support']
    },
    {
      id: 'horoscope-reading',
      title: 'Horoscope Reading',
      description: 'Detailed astrological analysis and predictions for your future',
      icon: Star,
      color: 'spiritual-red',
      features: ['Birth chart analysis', 'Match making', 'Career guidance', 'Health predictions']
    },
    {
      id: 'home-pooja',
      title: 'Home Pooja',
      description: 'Traditional pooja services conducted at your home with all arrangements',
      icon: Home,
      color: 'spiritual-gold',
      features: ['All materials included', 'Experienced pandits', 'Multiple languages', 'Flexible timing']
    }
  ];

  const featuredPandits = [
    {
      id: 1,
      name: 'Pandit Raj Kumar Sharma',
      speciality: 'Vedic Rituals & Astrology',
      rating: 4.9,
      reviews: 245,
      experience: '15 years',
      languages: ['Hindi', 'English', 'Sanskrit'],
      image: '/placeholder.svg',
      price: '₹500/hour'
    },
    {
      id: 2,
      name: 'Pandit Arun Shastri',
      speciality: 'Wedding Ceremonies',
      rating: 4.8,
      reviews: 189,
      experience: '12 years',
      languages: ['Hindi', 'Gujarati', 'English'],
      image: '/placeholder.svg',
      price: '₹750/hour'
    },
    {
      id: 3,
      name: 'Pandit Mohan Bhatt',
      speciality: 'Horoscope & Kundli',
      rating: 4.7,
      reviews: 156,
      experience: '20 years',
      languages: ['Hindi', 'English', 'Marathi'],
      image: '/placeholder.svg',
      price: '₹400/hour'
    }
  ];

  const handleBookService = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Hero onBookService={handleBookService} />
      
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold spiritual-text-gradient mb-4">
              Our Sacred Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bringing traditional spiritual services to your doorstep with modern convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBook={() => handleBookService(service.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pandits */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold spiritual-text-gradient mb-4">
              Featured Pandits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with highly rated and experienced pandits for all your spiritual needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPandits.map((pandit) => (
              <PanditCard
                key={pandit.id}
                pandit={pandit}
                onBook={() => handleBookService('pandit-booking')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold spiritual-text-gradient mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to connect with spiritual guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Service</h3>
              <p className="text-muted-foreground">Select from our range of spiritual services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Select Pandit</h3>
              <p className="text-muted-foreground">Choose from our verified pandits</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book & Pay</h3>
              <p className="text-muted-foreground">Secure booking with flexible payment options</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-muted-foreground">Get connected with your chosen pandit</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      <Footer />
      
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
};

export default Index;
