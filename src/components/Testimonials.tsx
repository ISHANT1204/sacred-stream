
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Amazing experience! The pandit was very knowledgeable and performed the wedding ceremony beautifully. Highly recommended!',
      service: 'Wedding Ceremony'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Online consultation was very convenient. Got detailed horoscope reading and valuable guidance for my career.',
      service: 'Online Consultation'
    },
    {
      id: 3,
      name: 'Meera Patel',
      location: 'Ahmedabad',
      rating: 5,
      text: 'Home pooja service was excellent. The pandit brought all necessary materials and conducted the ceremony with great devotion.',
      service: 'Home Pooja'
    },
    {
      id: 4,
      name: 'Arun Nair',
      location: 'Bangalore',
      rating: 5,
      text: 'Very professional service. The pandit was punctual and performed the graha pravesh ceremony perfectly.',
      service: 'Pandit Booking'
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold spiritual-text-gradient mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from thousands of satisfied customers who found spiritual guidance through our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/20 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 mb-1">{testimonial.location}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
