
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Languages } from 'lucide-react';

interface Pandit {
  id: string | number;
  name: string;
  specialty?: string;
  speciality?: string;
  rating: number;
  reviews: number;
  experience: string | number;
  languages: string[];
  image: string;
  price: string | number;
}

interface PanditCardProps {
  pandit: Pandit;
  onBook: () => void;
}

const PanditCard: React.FC<PanditCardProps> = ({ pandit, onBook }) => {
  const { name, specialty, speciality, rating, reviews, experience, languages, image, price } = pandit;
  const displaySpecialty = specialty || speciality;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <CardTitle className="text-xl font-bold mb-1">{name}</CardTitle>
        <CardDescription className="text-primary font-medium">
          {displaySpecialty}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Rating */}
        <div className="flex items-center justify-center space-x-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">{rating}</span>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>

        {/* Experience */}
        <div className="flex items-center justify-center space-x-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{experience} experience</span>
        </div>

        {/* Languages */}
        <div className="flex flex-wrap gap-1 justify-center">
          {languages.map((lang, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {lang}
            </Badge>
          ))}
        </div>

        {/* Price */}
        <div className="text-center">
          <span className="text-lg font-bold text-primary">{price}</span>
        </div>

        {/* Book Button */}
        <Button 
          onClick={onBook}
          className="w-full spiritual-gradient hover:opacity-90 transition-opacity"
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default PanditCard;
