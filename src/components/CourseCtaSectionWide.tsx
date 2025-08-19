import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";

const CourseCtaSectionWide = () => {
  return (
    <section id="not-for-you" className="py-20 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <X className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">
                Вам сюда не надо, если
              </h3>
              <div className="text-muted-foreground mb-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <X className="w-5 h-5 text-destructive" />
                  Вы не любите/не хотите/не умеете программировать
                </div>
                <div className="mb-2">(не можете написать вложенный цикл на Python)</div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <X className="w-5 h-5 text-destructive" />
                  Общение с людьми - не ваше
                </div>
                <div className="flex items-center justify-center gap-2">
                  <X className="w-5 h-5 text-destructive" />
                  У вас нет 80 часов в течении двух месяцев
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseCtaSectionWide;