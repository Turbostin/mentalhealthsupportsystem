import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const [journalEntry, setJournalEntry] = useState("");

  return (
    <div className="min-h-screen bg-background p-4 font-chaos">
      {/* Intentionally terrible header */}
      <header className="outdated-gradient p-6 mb-8 random-transform">
        <h1 className="text-4xl font-bold text-shadow-terrible blink-text mb-2 misaligned">
          🌈 MINDWELL DASHBOARD 🌈
        </h1>
        <nav className="flex space-x-2 inconsistent-spacing">
          <Button variant="secondary" className="bouncing random-transform">HOME</Button>
          <Button variant="destructive" className="misaligned text-xs">Profile</Button>
          <Button variant="outline" className="text-2xl border-chaos">Resources</Button>
          <Button className="font-serif bg-muted text-muted-foreground">??? Help ???</Button>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Mood Tracker - Poorly placed */}
        <Card className="col-span-2 random-transform border-chaos inconsistent-spacing">
          <CardHeader className="bg-card text-card-foreground">
            <CardTitle className="text-3xl font-serif misaligned">
              🎭 Today's Mood Tracker! 🎭
            </CardTitle>
          </CardHeader>
          <CardContent className="bg-primary text-primary-foreground p-8">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Button className="bg-secondary text-secondary-foreground h-20 text-lg random-transform">
                😄 AMAZING!!!
              </Button>
              <Button className="bg-destructive text-destructive-foreground h-12 text-xs misaligned">
                okay i guess
              </Button>
              <Button className="bg-accent text-accent-foreground h-16 font-mono text-xl border-chaos">
                NOT GREAT
              </Button>
              <Button className="bg-muted text-muted-foreground h-24 text-2xl bouncing">
                💀 TERRIBLE 💀
              </Button>
            </div>
            <div className="text-right">
              <Badge className="bg-popover text-popover-foreground text-lg p-3 random-transform">
                Last Updated: Never??? 🤔
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Random sidebar - Misaligned */}
        <div className="space-y-4 misaligned">
          <Card className="border-chaos bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="text-center font-mono blink-text">
                QUICK STATS!!!
              </CardTitle>
            </CardHeader>
            <CardContent className="inconsistent-spacing">
              <div className="space-y-3">
                <div className="text-destructive font-bold text-2xl random-transform">
                  Days Active: 42.7
                </div>
                <div className="text-accent text-xs misaligned">
                  Mood Average: Purple
                </div>
                <div className="text-muted-foreground font-serif text-lg">
                  Streaks: ¯\_(ツ)_/¯
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-accent text-accent-foreground border-chaos">
            <CardContent className="p-2">
              <h3 className="font-bold text-center text-xl terrible-font-mix">
                🎵 Motivational Quote 🎵
              </h3>
              <p className="text-sm mt-2 random-transform inconsistent-spacing">
                "Life is like a box of chocolates... but the box is on fire and the chocolates are actually vegetables."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Journal Section - Poorly designed form */}
        <Card className="col-span-full bg-popover text-popover-foreground border-chaos inconsistent-spacing">
          <CardHeader className="random-transform">
            <CardTitle className="text-5xl font-mono text-shadow-terrible blink-text">
              📝 JOURNAL ENTRY TIME! 📝
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-6">
              <div className="col-span-1 misaligned">
                <label className="font-serif text-2xl text-destructive">Your Name:</label>
                <Input 
                  className="mt-2 border-chaos bg-input text-foreground font-chaos" 
                  placeholder="WHO ARE YOU???"
                />
              </div>
              <div className="col-span-1">
                <label className="font-mono text-xs text-accent">Date (maybe?):</label>
                <Input 
                  className="mt-1 bg-muted text-muted-foreground random-transform" 
                  type="date"
                />
              </div>
              <div className="col-span-2 inconsistent-spacing">
                <label className="font-chaos text-lg text-primary bouncing">Feeling Level:</label>
                <select className="w-full mt-2 p-3 bg-card text-card-foreground border-chaos font-serif text-xl">
                  <option>Choose Your Fighter</option>
                  <option>Confused</option>
                  <option>Slightly Less Confused</option>
                  <option>Maximum Confusion</option>
                  <option>What is happening</option>
                </select>
              </div>
            </div>

            <div className="mt-8 random-transform">
              <label className="text-3xl font-bold text-secondary terrible-font-mix blink-text">
                TELL US YOUR DEEPEST SECRETS:
              </label>
              <Textarea
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                className="mt-4 h-32 bg-background text-foreground border-chaos font-chaos text-lg"
                placeholder="Type your feelings here... or don't... we're not your boss... or are we? 🤔"
              />
            </div>

            <div className="flex justify-between items-center mt-6 inconsistent-spacing">
              <Button className="bg-destructive text-destructive-foreground font-serif text-2xl bouncing">
                SAVE MY SOUL
              </Button>
              <Button className="bg-accent text-accent-foreground text-xs misaligned random-transform">
                delete everything
              </Button>
              <Button className="bg-secondary text-secondary-foreground font-mono text-lg border-chaos">
                ??? Submit ???
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Resources section - Completely chaotic layout */}
        <div className="col-span-full grid grid-cols-5 gap-4 mt-8">
          <Card className="bg-muted text-muted-foreground misaligned random-transform">
            <CardContent className="p-2">
              <h4 className="font-bold blink-text">Meditation</h4>
              <p className="text-xs">Breathe... or don't</p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary text-primary-foreground border-chaos col-span-2 inconsistent-spacing">
            <CardContent className="p-6">
              <h4 className="text-3xl font-serif">🧘‍♀️ YOGA TIME 🧘‍♀️</h4>
              <p className="font-mono text-sm mt-2">
                Stretch your body and your patience
              </p>
            </CardContent>
          </Card>

          <Card className="bg-accent text-accent-foreground random-transform">
            <CardContent className="p-1">
              <h4 className="font-chaos text-lg">therapy</h4>
              <p className="text-xs">maybe helpful?</p>
            </CardContent>
          </Card>

          <Card className="bg-destructive text-destructive-foreground bouncing border-chaos">
            <CardContent className="p-4">
              <h4 className="font-bold text-xl">CRISIS HELP</h4>
              <p className="text-sm">Call someone... anyone...</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer - Absolutely chaotic */}
      <footer className="mt-16 bg-card text-card-foreground p-8 random-transform border-chaos">
        <div className="text-center">
          <p className="text-2xl font-serif blink-text text-shadow-terrible">
            © 2024 MindWell - Your Mental Health is Our... Business? 🤷‍♀️
          </p>
          <div className="mt-4 space-x-8">
            <a href="#" className="text-primary text-xs misaligned">Privacy Policy (Good Luck Finding It)</a>
            <a href="#" className="text-secondary font-mono text-lg bouncing">Terms of Service</a>
            <a href="#" className="text-accent text-2xl random-transform">Contact Us... Maybe</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;