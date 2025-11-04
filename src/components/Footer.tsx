import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-vivid bg-clip-text text-transparent mb-4">
              VIVID SYDNEY
            </h3>
            <p className="text-muted-foreground">
              {t("世界最大的光影音乐创意节", "World's Largest Festival of Light, Music & Ideas")}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">{t("快速链接", "Quick Links")}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://www.google.com/maps?q=-33.858611,151.214167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {t("活动地图", "Event Map")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t("演出时间表", "Schedule")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t("购票信息", "Tickets")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">{t("关注我们", "Follow Us")}</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-muted hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
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
