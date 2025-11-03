import { useState } from "react";
import { OnboardingScreen } from "./components/OnboardingScreen";
import { DashboardScreen } from "./components/DashboardScreen";
import { VoiceAssistantScreen } from "./components/VoiceAssistantScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { Home, Mic, Settings, Menu } from "lucide-react";

type Screen = "onboarding" | "dashboard" | "voice" | "settings";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("onboarding");
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleGetStarted = () => {
    setShowOnboarding(false);
    setCurrentScreen("dashboard");
  };

  const handleVoiceClick = () => {
    setCurrentScreen("voice");
  };

  const handleCloseVoice = () => {
    setCurrentScreen("dashboard");
  };

  const renderScreen = () => {
    if (showOnboarding) {
      return <OnboardingScreen onGetStarted={handleGetStarted} />;
    }

    switch (currentScreen) {
      case "dashboard":
        return <DashboardScreen onVoiceClick={handleVoiceClick} />;
      case "voice":
        return <VoiceAssistantScreen onClose={handleCloseVoice} />;
      case "settings":
        return <SettingsScreen />;
      default:
        return <DashboardScreen onVoiceClick={handleVoiceClick} />;
    }
  };

  return (
    <div className="relative">
      {/* Mobile app container with max width */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative">
        {renderScreen()}

        {/* Bottom Navigation - Only show after onboarding */}
        {!showOnboarding && currentScreen !== "voice" && (
          <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-border">
            <div className="flex items-center justify-around p-4">
              <button
                onClick={() => setCurrentScreen("dashboard")}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${
                  currentScreen === "dashboard"
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Home className="w-6 h-6" />
                <span className="text-xs">Home</span>
              </button>

              <button
                onClick={handleVoiceClick}
                className="flex flex-col items-center gap-1 p-2 rounded-xl transition-colors text-accent"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-1 -mt-6 shadow-lg">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs">Voice</span>
              </button>

              <button
                onClick={() => setCurrentScreen("settings")}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${
                  currentScreen === "settings"
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Settings className="w-6 h-6" />
                <span className="text-xs">Settings</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
