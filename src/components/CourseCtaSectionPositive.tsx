import { Card, CardContent } from "@/components/ui/card";
import { Check, Calendar, Video, ClipboardCheck, ArrowDown } from "lucide-react";

const CourseCtaSectionPositive = () => {
  return (
    <section id="learning-format" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center justify-center gap-4 text-foreground">
            Формат обучения
            <ArrowDown className="w-8 h-8 text-foreground" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">
                  Понедельник - Пятница
                </h3>
                <div className="text-muted-foreground">
                  <div className="text-center mb-2">
                    Самостоятельная работа над проектами и заданиями
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Video className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">
                  Пятница 17:00
                </h3>
                <div className="text-muted-foreground">
                  <div className="text-center">
                    Еженедельная онлайн-встреча для разбора вопросов
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <ClipboardCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">
                  Проверка заданий
                </h3>
                <div className="text-muted-foreground">
                  <div className="text-center">
                    Система Peer-to-Peer (p2p) проверки заданий
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCtaSectionPositive;