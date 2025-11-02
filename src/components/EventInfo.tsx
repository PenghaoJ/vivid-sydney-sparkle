import { Card } from "@/components/ui/card";
import { Clock, DollarSign, Navigation } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EventInfo = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-primary/20">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("开放时间", "Opening Hours")}</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg">{t("周日至周四：6:00 PM - 11:00 PM", "Sun-Thu: 6:00 PM - 11:00 PM")}</p>
                <p className="text-lg">{t("周五至周六：6:00 PM - 11:30 PM", "Fri-Sat: 6:00 PM - 11:30 PM")}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-secondary transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-secondary/20">
                <DollarSign className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("票价信息", "Ticket Info")}</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg">{t("大部分展区免费参观", "Most areas are free")}</p>
                <p className="text-lg">{t("特定展览需要购票", "Tickets required for select shows")}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-accent transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-accent/20">
                <Navigation className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("主要地点", "Key Locations")}</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg">{t("环形码头", "Circular Quay")}</p>
                <p className="text-lg">{t("达令港", "Darling Harbour")}</p>
                <p className="text-lg">{t("悉尼歌剧院", "Sydney Opera House")}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
