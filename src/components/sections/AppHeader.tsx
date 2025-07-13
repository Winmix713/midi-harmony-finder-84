import React from 'react';
import { Card } from '@/components/ui/card';
import { Music, AudioLines } from 'lucide-react';

export const AppHeader = React.memo(() => (
  <Card className="p-4 sm:p-8 bg-gradient-card border-border text-center">
    <div className="flex items-center justify-center mb-4">
      <div className="relative">
        <Music className="w-12 h-12 text-primary" />
        <AudioLines className="w-6 h-6 text-primary-glow absolute -top-1 -right-1" />
      </div>
    </div>
    <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
      MIDI Comparison Studio
    </h1>
    <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
      Analyze and compare MIDI files to discover musical similarities, extract common patterns, 
      and generate new compositions from shared musical elements.
    </p>
  </Card>
));

AppHeader.displayName = 'AppHeader';