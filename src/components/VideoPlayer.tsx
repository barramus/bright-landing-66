import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Volume2, ArrowDown } from "lucide-react";

const VideoPlayer = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            <Play className="w-4 h-4 mr-2" />
            Как работает AI-агент
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Вы сможете сделать
            <br />
            <span className="flex items-center justify-center gap-3">
              такого же AI-агента
              <ArrowDown className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Посмотрите детальный обзор примера вашего будущего pet-проекта
          </p>
        </div>

        <div className="max-w-xs mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-primary/20 to-secondary/20">
                <video 
                  className="w-full h-full object-contain rounded-lg"
                  controls
                  preload="metadata"
                  playsInline
                  webkit-playsinline="true"
                  style={{ objectFit: 'contain' }}
                  onError={(e) => console.log('Video error:', e)}
                  onLoadStart={() => console.log('Video loading started')}
                >
                  <source src="/course-video.mp4" type="video/mp4" />
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;