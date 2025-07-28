import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Star, Users, Calendar, Shield } from 'lucide-react';

const About = () => {
  const steps = [
    {
      step: '1',
      title: 'Choose Your Service',
      description: 'Select from Pandit booking, online consultation, horoscope reading, or home pooja services.',
      icon: Calendar
    },
    {
      step: '2',
      title: 'Select Date & Time',
      description: 'Pick your preferred date and time slot that works best for your schedule and muhurat.',
      icon: CheckCircle
    },
    {
      step: '3',
      title: 'Choose Your Pandit',
      description: 'Browse through verified pandits, check their ratings, and select the one that matches your needs.',
      icon: Users
    },
    {
      step: '4',
      title: 'Confirm & Pay',
      description: 'Review your booking details, make secure payment, and receive confirmation with pandit details.',
      icon: Shield
    }
  ];

  const stats = [
    { number: '500+', label: 'Verified Pandits' },
    { number: '10,000+', label: 'Happy Clients' },
    { number: '4.8/5', label: 'Average Rating' },
    { number: '50+', label: 'Cities Covered' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 spiritual-text-gradient">
            About PanditConnect
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We are India's leading platform connecting devotees with verified pandits for authentic spiritual services. 
            Our mission is to preserve and promote traditional Vedic practices while making them accessible to everyone.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="spiritual-gradient p-6 rounded-2xl mb-4">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
              </div>
              <p className="font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to book your spiritual services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-16 h-16 spiritual-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-card rounded-2xl p-8 shadow-lg mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At PanditConnect, we believe that everyone deserves access to authentic spiritual guidance and traditional ceremonies. 
                Our platform bridges the gap between ancient wisdom and modern convenience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Preserve traditional Vedic practices</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Connect devotees with verified experts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Make spiritual services accessible to all</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Maintain authenticity and quality</span>
                </li>
              </ul>
            </div>
            <div className="spiritual-gradient rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="h-6 w-6 mr-3" />
                  <span>Verified & experienced pandits</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 mr-3" />
                  <span>Secure booking & payment</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 mr-3" />
                  <span>Flexible scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 spiritual-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-muted-foreground">
                We ensure all rituals and practices follow traditional Vedic guidelines and mantras.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 spiritual-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust</h3>
              <p className="text-muted-foreground">
                Every pandit on our platform is thoroughly verified for experience and authenticity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 spiritual-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground">
                Building a connected spiritual community where traditions are preserved and shared.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;