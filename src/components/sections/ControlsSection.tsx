import React from 'react';
import { Button } from '@/components/ui/button';
import { ProcessingModeToggle } from '@/components/ProcessingModeToggle';
import { RotateCcw } from 'lucide-react';

interface ControlsSectionProps {
  processingMode: 'client' | 'server';
  onModeChange: (mode: 'client' | 'server') => void;
  isProcessing: boolean;
  fileCount: number;
  comparisonResult: any;
  onResetAll: () => void;
}

export const ControlsSection = React.memo(({ 
  processingMode, 
  onModeChange, 
  isProcessing, 
  fileCount, 
  comparisonResult, 
  onResetAll 
}: ControlsSectionProps) => (
  <div className="flex items-center justify-between">
    <ProcessingModeToggle 
      mode={processingMode}
      onModeChange={onModeChange}
      disabled={isProcessing}
    />
    
    {/* Quick Reset Button */}
    {(fileCount > 0 || comparisonResult) && (
      <Button
        variant="outline"
        size="sm"
        onClick={onResetAll}
        disabled={isProcessing}
        className="flex items-center gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Reset All
      </Button>
    )}
  </div>
));

ControlsSection.displayName = 'ControlsSection';