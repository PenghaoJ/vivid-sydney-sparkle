import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-vivid bg-clip-text text-transparent mb-4">
              VIVID SYDNEY
            </h3>
            <p className="text-muted-foreground">
              世界最大的光影音乐创意节
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">快速链接</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">活动地图</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">演出时间表</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">购票信息</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">常见问题</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">关注我们</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 Vivid Sydney. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
