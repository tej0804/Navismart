import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mic, X, Sparkles } from "lucide-react";

const suggestions = [
  "What's my current spending for October?",
  "Set a goal to save ₹10,000 this month",
  "Show my food expenses this week",
  "When is my next bill due?",
];

interface VoiceAssistantScreenProps {
  onClose: () => void;
}

export function VoiceAssistantScreen({ onClose }: VoiceAssistantScreenProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const handleMicClick = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setTranscript("What's my current spending for October?");
        setIsListening(false);
      }, 2000);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setTranscript(suggestion);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Close button */}
      <Button
        onClick={onClose}
        variant="ghost"
        className="absolute top-4 right-4 w-10 h-10 rounded-full"
      >
        <X className="w-5 h-5" />
      </Button>

      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="max-w-md w-full">
          {/* Greeting */}
          <div className="text-center mb-12">
            <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
            <h2 className="text-primary mb-2">Hi! How can I help you today?</h2>
            <p className="text-muted-foreground text-sm">
              Tap the mic or choose a suggestion below
            </p>
          </div>

          {/* Microphone Button */}
          <div className="flex justify-center mb-12">
            <button
              onClick={handleMicClick}
              className={`w-32 h-32 rounded-full flex items-center justify-center transition-all ${
                isListening
                  ? "bg-accent animate-pulse shadow-lg shadow-accent/50"
                  : "bg-accent/10 hover:bg-accent/20"
              }`}
            >
              <Mic className={`w-16 h-16 ${isListening ? "text-white" : "text-accent"}`} />
            </button>
          </div>

          {/* Waveform animation when listening */}
          {isListening && (
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-accent rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 40 + 20}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Transcript */}
          {transcript && (
            <Card className="p-4 rounded-2xl shadow-sm mb-8">
              <p className="text-sm text-muted-foreground mb-1">You said:</p>
              <p className="text-primary">{transcript}</p>
            </Card>
          )}

          {/* Suggestions */}
          {!transcript && (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-3">Try asking:</p>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left p-4 bg-card rounded-xl hover:bg-accent/5 transition-colors border border-border"
                >
                  <p className="text-sm text-primary">{suggestion}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
