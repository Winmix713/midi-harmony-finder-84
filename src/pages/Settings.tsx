import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Settings as SettingsIcon, Palette, Zap, Music } from 'lucide-react';

export default function Settings() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <SettingsIcon className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">Configure your MIDI analysis preferences</p>
          </div>
        </div>

        <div className="space-y-6">

          {/* Analysis Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <CardTitle>Analysis Settings</CardTitle>
              </div>
              <CardDescription>
                Configure how MIDI files are processed and analyzed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Processing Mode</Label>
                  <div className="text-sm text-muted-foreground">
                    Choose between client-side or server-side processing
                  </div>
                </div>
                <Select defaultValue="client">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client">Client</SelectItem>
                    <SelectItem value="server">Server</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Auto-Compare Files</Label>
                  <div className="text-sm text-muted-foreground">
                    Automatically start comparison when both files are loaded
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base">Analysis Sensitivity</Label>
                  <span className="text-sm text-muted-foreground">75%</span>
                </div>
                <Slider
                  defaultValue={[75]}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="text-sm text-muted-foreground">
                  Higher sensitivity detects more subtle musical patterns
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Audio Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-primary" />
                <CardTitle>Audio Settings</CardTitle>
              </div>
              <CardDescription>
                Configure audio playback and synthesis options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Audio Synthesis</Label>
                  <div className="text-sm text-muted-foreground">
                    Choose the audio synthesis engine for MIDI playback
                  </div>
                </div>
                <Select defaultValue="tone">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tone">Tone.js</SelectItem>
                    <SelectItem value="webaudio">Web Audio</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base">Master Volume</Label>
                  <span className="text-sm text-muted-foreground">60%</span>
                </div>
                <Slider
                  defaultValue={[60]}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>

            </CardContent>
          </Card>

          {/* Interface Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                <CardTitle>Interface Settings</CardTitle>
              </div>
              <CardDescription>
                Customize the appearance and behavior of the interface
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Theme</Label>
                  <div className="text-sm text-muted-foreground">
                    Choose your preferred color theme
                  </div>
                </div>
                <Select defaultValue="system">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Show Advanced Options</Label>
                  <div className="text-sm text-muted-foreground">
                    Display additional configuration options
                  </div>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Enable Animations</Label>
                  <div className="text-sm text-muted-foreground">
                    Show smooth transitions and visual effects
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

            </CardContent>
          </Card>

          {/* Save Settings */}
          <div className="flex justify-end pt-6">
            <div className="flex gap-3">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Settings</Button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}