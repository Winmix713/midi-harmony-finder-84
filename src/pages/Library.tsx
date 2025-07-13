import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { FileMusic, Search, Upload, Calendar, Clock } from 'lucide-react';

export default function Library() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">MIDI Library</h1>
            <p className="text-muted-foreground">Organize and manage your MIDI files</p>
          </div>
          <Button className="flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Upload Files
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Search & Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search MIDI files..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  All Files
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Recent
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Analyzed
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* File Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Placeholder File Cards */}
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileMusic className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">MIDI</Badge>
                </div>
                <CardTitle className="text-lg">sample-track-{index}.mid</CardTitle>
                <CardDescription>
                  Classical piano composition • 2.3 MB
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    2024-01-15
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    3:42
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1">
                    Analyze
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Upload New File Card */}
          <Card className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center h-full min-h-[200px] text-center">
              <Upload className="w-12 h-12 text-muted-foreground mb-4" />
              <CardTitle className="text-lg mb-2">Upload New File</CardTitle>
              <CardDescription>
                Drag and drop MIDI files here or click to browse
              </CardDescription>
              <Button variant="outline" className="mt-4">
                Browse Files
              </Button>
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
}