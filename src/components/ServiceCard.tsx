
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
  onBook: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBook }) => {
  const { title, description, icon: Icon, features } = service;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
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

export default ServiceCard;
