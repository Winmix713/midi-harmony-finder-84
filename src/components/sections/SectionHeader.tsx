import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader = React.memo(({ title, description }: SectionHeaderProps) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
    <p className="text-muted-foreground">{description}</p>
  </div>
));

SectionHeader.displayName = 'SectionHeader';