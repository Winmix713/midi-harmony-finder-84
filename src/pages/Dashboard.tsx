import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, BarChart3, FileMusic, Settings, Zap } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Music className="w-16 h-16 text-primary" />
              <Zap className="w-8 h-8 text-primary-glow absolute -top-1 -right-1" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            MIDI Harmony Finder
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced MIDI analysis and comparison platform for musicians, composers, and music researchers
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Advanced Analysis</CardTitle>
              <CardDescription>
                Compare MIDI files with sophisticated harmonic, rhythmic, and melodic analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/analysis">
                <Button className="w-full">
                  Start Analysis
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileMusic className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>File Library</CardTitle>
              <CardDescription>
                Organize and manage your MIDI files with advanced search and categorization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/library">
                <Button variant="outline" className="w-full">
                  Browse Library
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Customize analysis parameters and configure your workspace preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/settings">
                <Button variant="outline" className="w-full">
                  Configure
                </Button>
              </Link>
            </CardContent>
          </Card>

        </div>

        {/* Quick Start Section */}
        <Card className="bg-gradient-card border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Quick Start</CardTitle>
            <CardDescription>
              Get started with MIDI analysis in just a few steps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">
                  1
                </div>
                <h3 className="font-semibold mb-2">Upload MIDI Files</h3>
                <p className="text-sm text-muted-foreground">
                  Select two MIDI files or convert audio to MIDI
                </p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">
                  2
                </div>
                <h3 className="font-semibold mb-2">Analyze & Compare</h3>
                <p className="text-sm text-muted-foreground">
                  Run advanced harmonic and structural analysis
                </p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">
                  3
                </div>
                <h3 className="font-semibold mb-2">Export Results</h3>
                <p className="text-sm text-muted-foreground">
                  Download analysis reports and common patterns
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/analysis">
                <Button size="lg" className="bg-gradient-primary">
                  Start Your First Analysis
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}