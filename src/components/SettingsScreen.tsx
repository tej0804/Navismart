import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mic2, Bell, Shield, LogOut, ChevronRight } from "lucide-react";

export function SettingsScreen() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 rounded-b-3xl mb-6">
        <h2 className="text-white">Settings & Personalization</h2>
      </div>

      <div className="p-6 space-y-4 pb-24">
        {/* Voice Preferences */}
        <Card className="p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Mic2 className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-primary">Voice Preferences</h3>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="text-sm text-muted-foreground mb-2 block">
                Voice Language
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
                Voice Gender
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

            <div>
              <Label className="text-sm text-muted-foreground mb-2 block">
                Voice Tone
              </Label>
              <Select defaultValue="friendly">
                <SelectTrigger className="rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-primary">Notifications</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-primary text-sm">Budget Alerts</p>
                <p className="text-xs text-muted-foreground">
                  Get notified when you exceed your budget
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-primary text-sm">Bill Reminders</p>
                <p className="text-xs text-muted-foreground">
                  Remind me before bills are due
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-primary text-sm">Savings Goals</p>
                <p className="text-xs text-muted-foreground">
                  Updates on savings goal progress
                </p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-primary text-sm">Weekly Summary</p>
                <p className="text-xs text-muted-foreground">
                  Get weekly spending summaries
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>

        {/* Privacy & Security */}
        <Card className="p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-primary">Privacy & Security</h3>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 hover:bg-accent/5 rounded-xl transition-colors">
              <p className="text-primary text-sm">Voice Data Usage</p>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>

            <button className="w-full flex items-center justify-between p-3 hover:bg-accent/5 rounded-xl transition-colors">
              <p className="text-primary text-sm">Data Sharing Preferences</p>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>

            <button className="w-full flex items-center justify-between p-3 hover:bg-accent/5 rounded-xl transition-colors">
              <p className="text-primary text-sm">Clear Voice History</p>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </Card>

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full rounded-xl h-12 border-destructive text-destructive hover:bg-destructive hover:text-white"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
}
