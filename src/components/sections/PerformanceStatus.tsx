import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap } from 'lucide-react';

interface PerformanceStatusProps {
  performanceStats: {
    filesLoaded: number;
    midiDataReady: number;
    canCompare: boolean;
    processingState: string;
  };
}

export const PerformanceStatus = React.memo(({ performanceStats }: PerformanceStatusProps) => {
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <Card className="p-2 bg-muted/20 border-dashed">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Files: {performanceStats.filesLoaded}/2</span>
        <span>MIDI: {performanceStats.midiDataReady}/2</span>
        <span>Status: {performanceStats.processingState}</span>
        <div className="flex items-center gap-1">
          <Zap className="w-3 h-3" />
          Optimized
        </div>
      </div>
    </Card>
  );
});

PerformanceStatus.displayName = 'PerformanceStatus';