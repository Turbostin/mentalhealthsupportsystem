import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Star, Video, Phone, MessageCircle } from "lucide-react";

const counselors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Anxiety & Depression",
    rating: 4.9,
    experience: "8 years",
    avatar: "SJ",
    available: ["Today 2:00 PM", "Tomorrow 10:00 AM", "Friday 3:30 PM"],
    sessionTypes: ["Video", "Phone", "Chat"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Trauma & PTSD",
    rating: 4.8,
    experience: "12 years",
    avatar: "MC",
    available: ["Today 4:00 PM", "Thursday 1:00 PM", "Friday 11:00 AM"],
    sessionTypes: ["Video", "Phone"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Relationship Counseling",
    rating: 4.7,
    experience: "6 years",
    avatar: "ER",
    available: ["Tomorrow 9:00 AM", "Wednesday 2:00 PM", "Friday 4:00 PM"],
    sessionTypes: ["Video", "Chat"]
  },
  {
    id: 4,
    name: "Dr. James Williams",
    specialty: "Stress Management",
    rating: 4.9,
    experience: "10 years",
    avatar: "JW",
    available: ["Today 5:00 PM", "Thursday 11:00 AM", "Saturday 10:00 AM"],
    sessionTypes: ["Video", "Phone", "Chat"]
  }
];

const CounselorBooking = () => {
  const [selectedCounselor, setSelectedCounselor] = useState<number | null>(null);

  const getSessionIcon = (type: string) => {
    switch (type) {
      case "Video": return <Video className="h-4 w-4" />;
      case "Phone": return <Phone className="h-4 w-4" />;
      case "Chat": return <MessageCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-primary" />
          Book a Counselor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {counselors.map((counselor) => (
            <Card 
              key={counselor.id} 
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedCounselor === counselor.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedCounselor(counselor.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {counselor.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{counselor.name}</h3>
                    <p className="text-sm text-muted-foreground">{counselor.specialty}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{counselor.rating}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {counselor.experience}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Next Available:</p>
                  <div className="flex flex-wrap gap-1">
                    {counselor.available.slice(0, 2).map((time, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {time}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-1 mt-2">
                    {counselor.sessionTypes.map((type) => (
                      <Badge key={type} className="text-xs bg-accent text-accent-foreground">
                        {getSessionIcon(type)}
                        <span className="ml-1">{type}</span>
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedCounselor === counselor.id && (
                  <Button className="w-full mt-3" size="sm">
                    Book Appointment
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CounselorBooking;