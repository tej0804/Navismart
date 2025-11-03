import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Mic, ShoppingBag, Zap, Train, Coffee, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const spendingData = [
  { name: "Food", value: 4500, color: "#22D3EE" },
  { name: "Bills", value: 3200, color: "#1E3A8A" },
  { name: "Travel", value: 2800, color: "#818cf8" },
  { name: "Shopping", value: 2100, color: "#f59e0b" },
  { name: "Others", value: 1400, color: "#ec4899" },
];

const transactions = [
  { id: 1, name: "Swiggy", category: "Food", amount: -450, icon: Coffee, color: "#22D3EE" },
  { id: 2, name: "Electricity Bill", category: "Bills", amount: -1200, icon: Zap, color: "#1E3A8A" },
  { id: 3, name: "Metro Card", category: "Travel", amount: -500, icon: Train, color: "#818cf8" },
];

interface DashboardScreenProps {
  onVoiceClick: () => void;
}

export function DashboardScreen({ onVoiceClick }: DashboardScreenProps) {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-primary text-white p-6 rounded-b-3xl">
        <p className="opacity-90 mb-1">Good evening,</p>
        <h2 className="text-white mb-3">Riya</h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-sm opacity-90 mb-1">This month's savings</p>
          <div className="flex items-baseline gap-2">
            <span className="text-white">₹3,200</span>
            <TrendingUp className="w-4 h-4 text-accent" />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Spending Analytics */}
        <Card className="p-6 rounded-2xl shadow-sm">
          <h3 className="text-primary mb-4">Spending Analytics</h3>
          
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie
                    data={spendingData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {spendingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex-1 space-y-2">
              {spendingData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground flex-1">{item.name}</span>
                  <span className="text-sm">₹{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Latest Transactions */}
        <Card className="p-6 rounded-2xl shadow-sm">
          <h3 className="text-primary mb-4">Latest Transactions</h3>
          
          <div className="space-y-3">
            {transactions.map((transaction) => {
              const Icon = transaction.icon;
              return (
                <div key={transaction.id} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${transaction.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: transaction.color }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-primary">{transaction.name}</p>
                    <p className="text-xs text-muted-foreground">{transaction.category}</p>
                  </div>
                  <span className="text-primary">₹{Math.abs(transaction.amount)}</span>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Savings Goals */}
        <Card className="p-6 rounded-2xl shadow-sm">
          <h3 className="text-primary mb-4">Savings Goals</h3>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Travel Fund</span>
                <span className="text-sm text-primary">₹6,000 / ₹10,000</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Emergency Fund</span>
                <span className="text-sm text-primary">₹15,000 / ₹50,000</span>
              </div>
              <Progress value={30} className="h-2" />
            </div>
          </div>
        </Card>
      </div>

      {/* Floating Voice Button */}
      <Button
        onClick={onVoiceClick}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-accent hover:bg-accent/90 shadow-lg"
      >
        <Mic className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
}
