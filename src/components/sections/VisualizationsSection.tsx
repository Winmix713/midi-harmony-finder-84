import React from 'react';
import { MidiVisualizer } from '@/components/MidiVisualizer';
import { SectionHeader } from './SectionHeader';

interface VisualizationsSectionProps {
  midiData1: any;
  midiData2: any;
}

export const VisualizationsSection = React.memo(({ midiData1, midiData2 }: VisualizationsSectionProps) => {
  if (!midiData1 && !midiData2) return null;

  return (
    <div className="space-y-6">
      <SectionHeader 
        title="MIDI Visualizations"
        description="Interactive piano roll displays of your uploaded MIDI files"
      />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {midiData1 && (
          <MidiVisualizer 
            midiData={midiData1} 
            title="MIDI File 1"
          />
        )}
        {midiData2 && (
          <MidiVisualizer 
            midiData={midiData2} 
            title="MIDI File 2"
          />
        )}
      </div>
    </div>
  );
});

VisualizationsSection.displayName = 'VisualizationsSection';