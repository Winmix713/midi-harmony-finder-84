import React, { useCallback, useMemo } from 'react';
import { toast } from 'sonner';
import { FileUpload } from './FileUpload';
import { ComparisonResults } from './ComparisonResults';
import { EnhancedComparisonResults } from './EnhancedComparisonResults';
import { EnhancedProgressIndicator } from './EnhancedProgressIndicator';
import { AppHeader } from './sections/AppHeader';
import { PerformanceStatus } from './sections/PerformanceStatus';
import { ControlsSection } from './sections/ControlsSection';
import { AudioPlayersSection } from './sections/AudioPlayersSection';
import { VisualizationsSection } from './sections/VisualizationsSection';
import { useMidiApp } from '@/hooks/useMidiApp';
import { useMidiComparison } from '@/hooks/useMidiComparison';


export function MidiComparatorOptimized() {
  const midiApp = useMidiApp();
  const { 
    comparisonResult, 
    enhancedResult, 
    isProcessing: isComparing, 
    downloadUrl,
    compareFiles, 
    resetResults, 
    handleDownload 
  } = useMidiComparison();

  // Optimized file selection handler
  const handleFilesSelected = useCallback(async (newFile1: File | null, newFile2: File | null) => {
    midiApp.updateFiles(newFile1, newFile2);
    resetResults();

    try {
      let data1 = midiApp.midiData.data1;
      let data2 = midiApp.midiData.data2;

      // Process new files
      if (newFile1 && newFile1 !== midiApp.files.file1) {
        data1 = await midiApp.loadMidiFile(newFile1, 1);
      } else if (!newFile1) {
        midiApp.clearSlot(1);
        data1 = null;
      }

      if (newFile2 && newFile2 !== midiApp.files.file2) {
        data2 = await midiApp.loadMidiFile(newFile2, 2);
      } else if (!newFile2) {
        midiApp.clearSlot(2);
        data2 = null;
      }

      // Auto-compare if both files are loaded
      if (data1 && data2) {
        await compareFiles(data1, data2, midiApp.ui.processingMode);
      }
    } catch (error) {
      console.error('Error processing MIDI files:', error);
      toast.error('Failed to process MIDI files. Please check the file format.');
    }
  }, [midiApp, compareFiles, resetResults]);

  // Optimized MIDI generation handler
  const handleMidiGenerated = useCallback(async (midiFile: File, slot: 1 | 2) => {
    try {
      const midiData = await midiApp.loadMidiFile(midiFile, slot);
      
      // Auto-compare if we have both files
      const otherData = slot === 1 ? midiApp.midiData.data2 : midiApp.midiData.data1;
      if (otherData) {
        const data1 = slot === 1 ? midiData : midiApp.midiData.data1!;
        const data2 = slot === 1 ? midiApp.midiData.data2! : midiData;
        await compareFiles(data1, data2, midiApp.ui.processingMode);
      }
      
      toast.success(`Audio converted to MIDI and loaded in slot ${slot}!`);
    } catch (error) {
      console.error('Error processing generated MIDI:', error);
      toast.error('Failed to process generated MIDI file.');
    }
  }, [midiApp, compareFiles]);

  // Memoized processing mode handler
  const handleModeChange = useCallback((mode: 'client' | 'server') => {
    midiApp.setProcessingMode(mode);
    resetResults();
  }, [midiApp, resetResults]);

  // Memoized download handler
  const handleDownloadClick = useCallback(() => {
    if (midiApp.files.file1 && midiApp.files.file2) {
      handleDownload(midiApp.files.file1, midiApp.files.file2);
    }
  }, [midiApp.files.file1, midiApp.files.file2, handleDownload]);

  // Performance monitoring
  const performanceStats = useMemo(() => ({
    filesLoaded: midiApp.fileCount,
    midiDataReady: midiApp.midiDataCount,
    canCompare: midiApp.canCompare,
    processingState: midiApp.ui.isProcessing || isComparing ? 'busy' : 'idle'
  }), [midiApp, isComparing]);

  const isProcessing = midiApp.ui.isProcessing || isComparing;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <AppHeader />

        {/* Performance Status (Development Mode) */}
        <PerformanceStatus performanceStats={performanceStats} />

        {/* Controls Section */}
        <ControlsSection
          processingMode={midiApp.ui.processingMode}
          onModeChange={handleModeChange}
          isProcessing={isProcessing}
          fileCount={midiApp.fileCount}
          comparisonResult={comparisonResult}
          onResetAll={midiApp.resetAll}
        />

        {/* File Upload */}
        <FileUpload 
          onFilesSelected={handleFilesSelected} 
          onMidiGenerated={handleMidiGenerated}
          isLoading={isProcessing}
          file1={midiApp.files.file1}
          file2={midiApp.files.file2}
          processMidiFile={midiApp.processMidiFile}
        />

        {/* Enhanced Progress Indicator */}
        <EnhancedProgressIndicator isVisible={isProcessing} />

        {/* Results Section */}
        {comparisonResult && (
          <ComparisonResults
            similarity={comparisonResult.similarity}
            commonNotes={comparisonResult.commonNotes}
            totalNotes1={comparisonResult.totalNotes1}
            totalNotes2={comparisonResult.totalNotes2}
            downloadUrl={downloadUrl || undefined}
            onDownload={handleDownloadClick}
            isGenerating={isProcessing}
          />
        )}

        {/* Enhanced Results Section */}
        {enhancedResult && (
          <EnhancedComparisonResults
            similarity={enhancedResult.similarity}
            commonNotes={enhancedResult.commonNotes}
            totalNotes1={enhancedResult.totalNotes1}
            totalNotes2={enhancedResult.totalNotes2}
            harmonicSimilarity={enhancedResult.harmonicSimilarity}
            rhythmSimilarity={enhancedResult.rhythmSimilarity}
            keySimilarity={enhancedResult.keySimilarity}
            analysisDetails={enhancedResult.analysisDetails}
            downloadUrl={downloadUrl || undefined}
            onDownload={handleDownloadClick}
            isGenerating={isProcessing}
          />
        )}

        {/* Audio Players */}
        <AudioPlayersSection 
          midiData1={midiApp.midiData.data1}
          midiData2={midiApp.midiData.data2}
        />

        {/* MIDI Visualizations */}
        <VisualizationsSection 
          midiData1={midiApp.midiData.data1}
          midiData2={midiApp.midiData.data2}
        />
      </div>
    </div>
  );
}