import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageSquare, Heart, AlertTriangle, Clock, MapPin } from "lucide-react";

const emergencyContacts = [
  {
    name: "Crisis Text Line",
    number: "Text HOME to 741741",
    description: "24/7 crisis support via text",
    icon: MessageSquare,
    type: "text",
    severity: "crisis"
  },
  {
    name: "National Suicide Prevention Lifeline",
    number: "988",
    description: "Free, confidential 24/7 support",
    icon: Phone,
    type: "call",
    severity: "crisis"
  },
  {
    name: "SAMHSA National Helpline",
    number: "1-800-662-4357",
    description: "Mental health and substance abuse",
    icon: Phone,
    type: "call",
    severity: "support"
  },
  {
    name: "Emergency Services",
    number: "911",
    description: "Immediate emergency assistance",
    icon: AlertTriangle,
    type: "call",
    severity: "emergency"
  }
];

const quickTools = [
  {
    name: "5-4-3-2-1 Grounding",
    description: "5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste",
    icon: Heart,
    color: "bg-primary"
  },
  {
    name: "Box Breathing",
    description: "Breathe in 4, hold 4, out 4, hold 4",
    icon: Clock,
    color: "bg-secondary"
  },
  {
    name: "Safe Space Locator",
    description: "Find nearby mental health facilities",
    icon: MapPin,
    color: "bg-accent"
  }
];

const EmergencyToolkit = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "crisis": return "bg-destructive text-destructive-foreground";
      case "emergency": return "bg-red-600 text-white";
      case "support": return "bg-info text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="shadow-soft border-l-4 border-l-destructive">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-destructive">
          <AlertTriangle className="h-6 w-6" />
          Emergency Toolkit
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Emergency Contacts */}
        <div>
          <h3 className="font-semibold mb-3">Crisis Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="border-l-4 border-l-destructive/50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <contact.icon className="h-5 w-5 text-destructive mt-1" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{contact.name}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{contact.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge className={getSeverityColor(contact.severity)}>
                          {contact.number}
                        </Badge>
                        <Button size="sm" variant="outline" className="h-6 text-xs">
                          {contact.type === "call" ? "Call" : "Text"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Coping Tools */}
        <div>
          <h3 className="font-semibold mb-3">Quick Coping Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {quickTools.map((tool, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-4 flex-col items-start text-left hover:shadow-md"
              >
                <div className={`p-2 rounded-full ${tool.color} text-white mb-2`}>
                  <tool.icon className="h-4 w-4" />
                </div>
                <h4 className="font-medium text-sm mb-1">{tool.name}</h4>
                <p className="text-xs text-muted-foreground">{tool.description}</p>
              </Button>
            ))}
          </div>
        </div>

        {/* Safety Plan Reminder */}
        <Card className="bg-muted/30">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="h-4 w-4 text-primary" />
              <h4 className="font-medium text-sm">Remember Your Safety Plan</h4>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              If you're having thoughts of self-harm, follow your personal safety plan or reach out for help immediately.
            </p>
            <Button size="sm" className="w-full">
              View My Safety Plan
            </Button>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default EmergencyToolkit;