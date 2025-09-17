import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GamepadIcon, Target, Zap, Heart, Trophy, Timer } from "lucide-react";

const games = [
  {
    id: "breathing",
    name: "Breathing Bubble",
    description: "Follow the bubble to practice deep breathing",
    icon: Heart,
    difficulty: "Easy",
    duration: "2 min",
    category: "Relaxation"
  },
  {
    id: "memory",
    name: "Mindful Memory",
    description: "Memory card game with calming images",
    icon: Target,
    difficulty: "Medium",
    duration: "5 min",
    category: "Focus"
  },
  {
    id: "mood",
    name: "Mood Matcher",
    description: "Match emotions with coping strategies",
    icon: Zap,
    difficulty: "Easy",
    duration: "3 min",
    category: "Learning"
  },
  {
    id: "gratitude",
    name: "Gratitude Garden",
    description: "Plant flowers by listing things you're grateful for",
    icon: Trophy,
    difficulty: "Easy",
    duration: "4 min",
    category: "Positivity"
  }
];

const BreathingGame = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [countdown, setCountdown] = useState(4);
  const [cycle, setCycle] = useState(0);
  const totalCycles = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          if (phase === "inhale") {
            setPhase("hold");
            return 4;
          } else if (phase === "hold") {
            setPhase("exhale");
            return 4;
          } else {
            setPhase("inhale");
            setCycle((prevCycle) => {
              const newCycle = prevCycle + 1;
              if (newCycle >= totalCycles) {
                clearInterval(timer);
                setTimeout(onComplete, 1000);
              }
              return newCycle;
            });
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, onComplete]);

  const getPhaseColor = () => {
    switch (phase) {
      case "inhale": return "bg-primary";
      case "hold": return "bg-warning";
      case "exhale": return "bg-secondary";
    }
  };

  const getPhaseText = () => {
    switch (phase) {
      case "inhale": return "Breathe In";
      case "hold": return "Hold";
      case "exhale": return "Breathe Out";
    }
  };

  return (
    <div className="text-center space-y-6 p-6">
      <div className="space-y-2">
        <div className={`w-32 h-32 rounded-full mx-auto ${getPhaseColor()} transition-all duration-1000 animate-pulse`} />
        <h3 className="text-xl font-semibold">{getPhaseText()}</h3>
        <p className="text-3xl font-bold">{countdown}</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Cycle {cycle + 1} of {totalCycles}</p>
        <Progress value={(cycle / totalCycles) * 100} className="w-full" />
      </div>
    </div>
  );
};

const WellnessGames = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [completedGames, setCompletedGames] = useState<string[]>([]);

  const startGame = (gameId: string) => {
    setActiveGame(gameId);
  };

  const completeGame = () => {
    if (activeGame) {
      setCompletedGames(prev => [...prev, activeGame]);
    }
    setActiveGame(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success text-white";
      case "Medium": return "bg-warning text-white";
      case "Hard": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  if (activeGame === "breathing") {
    return (
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            Breathing Bubble
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BreathingGame onComplete={completeGame} />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GamepadIcon className="h-6 w-6 text-primary" />
          Interactive Wellness Games
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {games.map((game) => (
            <Card key={game.id} className="hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <game.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold flex items-center gap-2">
                      {game.name}
                      {completedGames.includes(game.id) && (
                        <Trophy className="h-4 w-4 text-yellow-500" />
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{game.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className={getDifficultyColor(game.difficulty)}>
                        {game.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Timer className="h-3 w-3 mr-1" />
                        {game.duration}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {game.category}
                      </Badge>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => startGame(game.id)}
                      disabled={activeGame !== null}
                    >
                      {completedGames.includes(game.id) ? "Play Again" : "Start Game"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {completedGames.length > 0 && (
          <Card className="mt-6 bg-primary/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <h3 className="font-semibold">Your Progress</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                You've completed {completedGames.length} out of {games.length} wellness games today!
              </p>
              <Progress value={(completedGames.length / games.length) * 100} className="w-full" />
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};

export default WellnessGames;