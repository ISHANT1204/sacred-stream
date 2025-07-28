import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PanditCard from '@/components/PanditCard';
import BookingModal from '@/components/BookingModal';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

const Pandits = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');

  const pandits = [
    {
      id: '1',
      name: 'Pandit Rajesh Sharma',
      specialty: 'Vedic Rituals & Marriage Ceremonies',
      rating: 4.9,
      reviews: 156,
      experience: 15,
      languages: ['Hindi', 'Sanskrit', 'English'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      price: 1500
    },
    {
      id: '2',
      name: 'Pandit Suresh Kumar',
      specialty: 'Astrology & Horoscope Reading',
      rating: 4.8,
      reviews: 203,
      experience: 20,
      languages: ['Hindi', 'Bengali', 'English'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      price: 1200
    },
    {
      id: '3',
      name: 'Pandit Mahesh Gupta',
      specialty: 'Grih Pravesh & House Warming',
      rating: 4.7,
      reviews: 89,
      experience: 12,
      languages: ['Hindi', 'Gujarati', 'English'],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
      price: 1800
    },
    {
      id: '4',
      name: 'Pandit Vikram Singh',
      specialty: 'Pooja & Spiritual Guidance',
      rating: 4.9,
      reviews: 134,
      experience: 18,
      languages: ['Hindi', 'Punjabi', 'English'],
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
      price: 1400
    },
    {
      id: '5',
      name: 'Pandit Ashok Pandey',
      specialty: 'Death Rituals & Ceremonies',
      rating: 4.8,
      reviews: 98,
      experience: 22,
      languages: ['Hindi', 'Sanskrit', 'English'],
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      price: 2000
    },
    {
      id: '6',
      name: 'Pandit Deepak Joshi',
      specialty: 'Vastu Consultation & Remedies',
      rating: 4.6,
      reviews: 67,
      experience: 10,
      languages: ['Hindi', 'Marathi', 'English'],
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
      price: 1600
    }
  ];

  const specialties = [
    'all',
    'Vedic Rituals & Marriage Ceremonies',
    'Astrology & Horoscope Reading',
    'Grih Pravesh & House Warming',
    'Pooja & Spiritual Guidance',
    'Death Rituals & Ceremonies',
    'Vastu Consultation & Remedies'
  ];

  const filteredPandits = pandits.filter(pandit => {
    const matchesSearch = pandit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pandit.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialtyFilter === 'all' || pandit.specialty === specialtyFilter;
    return matchesSearch && matchesSpecialty;
  });

  const handleBookPandit = (panditId: string) => {
    setSelectedService(panditId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 spiritual-text-gradient">
            Find Your Perfect Pandit
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse through our verified pandits and choose the one that best matches your spiritual needs
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-card rounded-2xl p-6 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="md:w-64">
              <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty === 'all' ? 'All Specialties' : specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredPandits.length} pandit{filteredPandits.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
            {specialtyFilter !== 'all' && ` in ${specialtyFilter}`}
          </p>
        </div>

        {/* Pandits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPandits.map((pandit) => (
            <PanditCard
              key={pandit.id}
              pandit={pandit}
              onBook={() => handleBookPandit(pandit.id)}
            />
          ))}
        </div>

        {filteredPandits.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">No pandits found matching your criteria</p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSpecialtyFilter('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
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

export default Pandits;