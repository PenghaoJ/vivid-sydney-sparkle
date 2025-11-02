import { Card } from "@/components/ui/card";
import { Lightbulb, Music, Palette, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "灯光装置",
    description: "欣赏世界级的灯光艺术装置，点亮悉尼的夜空",
    color: "text-primary",
    shadow: "shadow-glow",
  },
  {
    icon: Music,
    title: "音乐表演",
    description: "享受来自全球顶尖艺术家的精彩现场表演",
    color: "text-secondary",
    shadow: "shadow-glow-cyan",
  },
  {
    icon: Palette,
    title: "创意展示",
    description: "探索前沿的数字艺术和互动体验",
    color: "text-accent",
    shadow: "shadow-glow-pink",
  },
  {
    icon: Sparkles,
    title: "建筑投影",
    description: "见证悉尼地标建筑的华丽光影变身",
    color: "text-primary-glow",
    shadow: "shadow-glow",
  },
];

const Highlights = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-vivid bg-clip-text text-transparent">
          活动亮点
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          探索Vivid Sydney的精彩内容
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
