import { Card } from "@/components/ui/card";
import { Clock, DollarSign, Navigation } from "lucide-react";

const EventInfo = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-primary/20">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">开放时间</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg">周日至周四：6:00 PM - 11:00 PM</p>
                <p className="text-lg">周五至周六：6:00 PM - 11:30 PM</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-secondary transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-secondary/20">
                <DollarSign className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">票价信息</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg">大部分展区免费参观</p>
                <p className="text-lg">特定展览需要购票</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-accent transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-accent/20">
                <Navigation className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">主要地点</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg">环形码头</p>
                <p className="text-lg">达令港</p>
                <p className="text-lg">悉尼歌剧院</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
