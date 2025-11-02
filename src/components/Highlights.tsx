import { Card } from "@/components/ui/card";
import { Lightbulb, Music, Palette, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getHighlights = (t: (zh: string, en: string) => string) => [
  {
    icon: Lightbulb,
    title: t("灯光装置", "Light Installations"),
    description: t("欣赏世界级的灯光艺术装置，点亮悉尼的夜空", "Admire world-class light art installations illuminating Sydney's night sky"),
    color: "text-primary",
    shadow: "shadow-glow",
  },
  {
    icon: Music,
    title: t("音乐表演", "Music Performances"),
    description: t("享受来自全球顶尖艺术家的精彩现场表演", "Enjoy spectacular live performances from world-class artists"),
    color: "text-secondary",
    shadow: "shadow-glow-cyan",
  },
  {
    icon: Palette,
    title: t("创意展示", "Creative Showcases"),
    description: t("探索前沿的数字艺术和互动体验", "Explore cutting-edge digital art and interactive experiences"),
    color: "text-accent",
    shadow: "shadow-glow-pink",
  },
  {
    icon: Sparkles,
    title: t("建筑投影", "Building Projections"),
    description: t("见证悉尼地标建筑的华丽光影变身", "Witness Sydney's iconic buildings transformed by spectacular projections"),
    color: "text-primary-glow",
    shadow: "shadow-glow",
  },
];

const Highlights = () => {
  const { t } = useLanguage();
  const highlights = getHighlights(t);
  
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-vivid bg-clip-text text-transparent">
          {t("活动亮点", "Event Highlights")}
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          {t("探索Vivid Sydney的精彩内容", "Discover the magic of Vivid Sydney")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className={`p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 ${highlight.shadow} hover:${highlight.shadow}`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-4 rounded-full bg-muted ${highlight.color}`}>
                  <highlight.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
