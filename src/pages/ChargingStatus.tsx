import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ChargingStatus = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        const next = Math.min(prev + 5, 100);
        if (next >= 100) {
          clearInterval(interval);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { circumference, strokeDashoffset } = useMemo(() => {
    const radius = 72;
    const circleCircumference = 2 * Math.PI * radius;
    return {
      circumference: circleCircumference,
      strokeDashoffset: circleCircumference * (1 - progress / 100),
    };
  }, [progress]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/80 to-background flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl mx-auto bg-card/80 backdrop-blur-lg border border-border rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 px-6 py-8 md:px-12 md:py-14">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground text-center">
            Charging Station Status
          </h1>
        </div>

        <div className="px-6 py-10 md:px-12 md:py-16 flex flex-col items-center gap-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full animate-pulse" />
            <svg
              className="w-60 h-60 md:w-72 md:h-72 transform -rotate-90"
              viewBox="0 0 200 200"
              role="img"
              aria-label={`Charging progress ${progress}%`}
            >
              <circle
                cx="100"
                cy="100"
                r="72"
                stroke="hsl(var(--muted))"
                strokeWidth="18"
                fill="transparent"
                className="opacity-40"
              />
              <circle
                cx="100"
                cy="100"
                r="72"
                stroke="url(#charging-gradient)"
                strokeWidth="18"
                strokeLinecap="round"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-[stroke-dashoffset] duration-500 ease-out"
              />
              <defs>
                <linearGradient id="charging-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="50%" stopColor="hsl(var(--secondary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Charging</p>
              <p className="text-4xl md:text-5xl font-bold text-foreground mt-2">{progress}%</p>
              <p className="text-xs text-muted-foreground mt-1">Estimated time remaining: {Math.max(0, Math.ceil((100 - progress) / 5))} min</p>
            </div>
          </div>

          <div className="space-y-3 text-center">
            <p className="text-lg text-muted-foreground">
              {progress < 100 ? `Charging... ${progress}%` : "Fully charged and ready to go!"}
            </p>
            <p className="text-sm text-muted-foreground/80 max-w-xl mx-auto">
              {/* Main logic lives inside the useEffect above. Replace the interval with a real-time API subscription or polling method to reflect live station data in production environments. */}
              The real-time update logic is handled with <code>useEffect</code>, making it easy to swap the simulated timer with data from a live charging API later on.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild size="lg" className="shadow-glow">
              <Link to="/">Back to Home</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-dashed border-primary/40 text-primary hover:text-primary-foreground hover:bg-primary"
              onClick={() => setProgress(0)}
            >
              Restart Simulation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargingStatus;
