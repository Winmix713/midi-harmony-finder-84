import React from 'react';
import { AudioPlayer } from '@/components/AudioPlayer';
import { Separator } from '@/components/ui/separator';
import { SectionHeader } from './SectionHeader';

interface AudioPlayersSectionProps {
  midiData1: any;
  midiData2: any;
}

export const AudioPlayersSection = React.memo(({ midiData1, midiData2 }: AudioPlayersSectionProps) => {
  if (!midiData1 && !midiData2) return null;

  return (
    <div className="space-y-6">
      <Separator className="my-8" />
      <SectionHeader 
        title="Audio Playback"
        description="Listen to your MIDI files with real-time audio synthesis"
      />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {midiData1 && (
          <AudioPlayer 
            midiData={midiData1} 
            className="w-full"
          />
        )}
        {midiData2 && (
          <AudioPlayer 
            midiData={midiData2} 
            className="w-full"
          />
        )}
      </div>
    </div>
  );
});

AudioPlayersSection.displayName = 'AudioPlayersSection';