import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mic, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface OnboardingScreenProps {
  onGetStarted: () => void;
}

export function OnboardingScreen({ onGetStarted }: OnboardingScreenProps) {
  return (
    <div className="min-h-screen bg-background p-6 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full">
        <div className="mb-8 relative">
          <div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
            <Mic className="w-16 h-16 text-accent" />
          </div>
          <Sparkles className="w-6 h-6 text-accent absolute top-0 right-12 animate-pulse" />
        </div>

        <h1 className="text-primary mb-2 text-center">Welcome to NaviSmart!</h1>
        <p className="text-muted-foreground text-center mb-8">
          Your personal voice-assisted finance companion
        </p>

        <Card className="w-full p-6 mb-8 rounded-2xl shadow-sm">
          <h3 className="text-primary mb-4">Voice Setup</h3>
          
          <div className="space-y-4">
            <div>
              <Label className="text-sm text-muted-foreground mb-2 block">
                Preferred Language
              </Label>
              <Select defaultValue="english">
                <SelectTrigger className="rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="marathi">Marathi</SelectItem>
                  <SelectItem value="tamil">Tamil</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm text-muted-foreground mb-2 block">
                Voice Preference
              </Label>
              <Select defaultValue="female">
                <SelectTrigger className="rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="female">Female Voice</SelectItem>
                  <SelectItem value="male">Male Voice</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        <Button 
          onClick={onGetStarted}
          className="w-full rounded-xl h-12 bg-primary hover:bg-primary/90"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
