import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const ticketTypes = [
    {
      title: t('普通票', 'General Ticket'),
      price: 59,
      features: [
        t('观赏所有灯光装置', 'Access to all light installations'),
        t('参与互动体验', 'Interactive experiences'),
        t('活动期间任意日期入场', 'Valid any day during the event'),
        t('数字门票', 'Digital ticket'),
      ]
    },
    {
      title: t('VIP会员票', 'VIP Member Ticket'),
      price: 89,
      featured: true,
      features: [
        t('所有普通票权益', 'All General Ticket benefits'),
        t('优先进场通道', 'Priority entrance'),
        t('独家观赏区域', 'Exclusive viewing areas'),
        t('免费活动手册', 'Free event brochure'),
        t('纪念品礼包', 'Souvenir gift pack'),
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="mb-8 text-primary hover:text-primary-glow"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t('返回主页', 'Back to Home')}
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-vivid bg-clip-text text-transparent">
            {t('购买门票', 'Buy Tickets')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('选择适合您的票型，开启精彩旅程', 'Choose your ticket and start the journey')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ticketTypes.map((ticket, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:shadow-glow ${
                ticket.featured 
                  ? 'border-primary shadow-glow-cyan scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {ticket.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-vivid text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    {t('推荐', 'Recommended')}
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl mb-2">{ticket.title}</CardTitle>
                <CardDescription className="text-4xl font-bold text-foreground">
                  ${ticket.price} {t('澳元', 'AUD')}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {ticket.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full ${
                    ticket.featured 
                      ? 'bg-primary hover:bg-primary-glow shadow-glow' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  {t('立即购买', 'Buy Now')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          <p className="text-sm">
            {t('* 所有门票一经售出，概不退换', '* All tickets are non-refundable')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
