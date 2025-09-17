import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, User, BookOpen, Heart, Brain, Zap } from "lucide-react";

const videoResources = [
  {
    id: 1,
    title: "5-Minute Anxiety Relief Meditation",
    instructor: "Dr. Sarah Wellness",
    duration: "5:23",
    category: "Meditation",
    thumbnail: "🧘‍♀️",
    description: "Quick meditation to calm anxiety and center yourself",
    views: "12.5K",
    icon: Heart
  },
  {
    id: 2,
    title: "Understanding Depression: Signs & Support",
    instructor: "Mental Health Alliance",
    duration: "8:45",
    category: "Education",
    thumbnail: "🧠",
    description: "Educational video about recognizing depression symptoms",
    views: "8.2K",
    icon: Brain
  },
  {
    id: 3,
    title: "Progressive Muscle Relaxation",
    instructor: "Calm Minds Studio",
    duration: "12:10",
    category: "Relaxation",
    thumbnail: "💆‍♀️",
    description: "Full body relaxation technique for stress relief",
    views: "15.8K",
    icon: Zap
  },
  {
    id: 4,
    title: "Building Healthy Relationships",
    instructor: "Dr. Emma Rodriguez",
    duration: "6:33",
    category: "Relationships",
    thumbnail: "👥",
    description: "Tips for maintaining positive relationships",
    views: "9.7K",
    icon: Heart
  },
  {
    id: 5,
    title: "Sleep Hygiene for Better Mental Health",
    instructor: "Sleep Science Institute",
    duration: "7:12",
    category: "Sleep",
    thumbnail: "😴",
    description: "How quality sleep impacts your mental wellbeing",
    views: "11.3K",
    icon: Brain
  },
  {
    id: 6,
    title: "Grounding Techniques for Panic Attacks",
    instructor: "Crisis Support Network",
    duration: "4:56",
    category: "Crisis Support",
    thumbnail: "🆘",
    description: "Immediate techniques to manage panic attacks",
    views: "7.9K",
    icon: Zap
  }
];

const categories = ["All", "Meditation", "Education", "Relaxation", "Relationships", "Sleep", "Crisis Support"];

const ResourceVideos = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filteredVideos = selectedCategory === "All" 
    ? videoResources 
    : videoResources.filter(video => video.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Meditation": "bg-purple-100 text-purple-800",
      "Education": "bg-blue-100 text-blue-800",
      "Relaxation": "bg-green-100 text-green-800",
      "Relationships": "bg-pink-100 text-pink-800",
      "Sleep": "bg-indigo-100 text-indigo-800",
      "Crisis Support": "bg-red-100 text-red-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          Resource Videos
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="text-xs"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="hover:shadow-md transition-all group">
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-t-lg cursor-pointer group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                  <span className="text-4xl">{video.thumbnail}</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all">
                    <Button
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Play
                    </Button>
                  </div>
                  <Badge className="absolute top-2 right-2 bg-black/50 text-white text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </Badge>
                </div>

                {/* Video Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{video.instructor}</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Badge className={getCategoryColor(video.category)}>
                      <video.icon className="h-3 w-3 mr-1" />
                      {video.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {video.views} views
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Player Modal Placeholder */}
        {playingVideo && (
          <Card className="fixed inset-4 z-50 bg-black/90 text-white flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">
                {videoResources.find(v => v.id === playingVideo)?.thumbnail}
              </div>
              <h2 className="text-xl font-semibold">
                {videoResources.find(v => v.id === playingVideo)?.title}
              </h2>
              <p className="text-white/70">
                Video player would be embedded here
              </p>
              <Button
                variant="secondary"
                onClick={() => setPlayingVideo(null)}
              >
                Close Video
              </Button>
            </div>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};

export default ResourceVideos;