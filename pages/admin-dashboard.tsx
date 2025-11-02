import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

type DeviceStatus = "Active" | "Offline";

type Device = {
  id: string;
  status: DeviceStatus;
  location: string;
  lastOnline: string;
};

type Feedback = {
  name: string;
  comment: string;
};

function StatsCard({
  title,
  value,
  subtext,
}: {
  title: string;
  value: string | number;
  subtext?: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm">
      <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
      <div className="mt-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        {value}
      </div>
      {subtext ? (
        <div className="mt-1 text-xs text-gray-400 dark:text-gray-500">
          {subtext}
        </div>
      ) : null}
    </div>
  );
}

function SimpleLineChart({
  data,
  labels,
  className,
}: {
  data: number[];
  labels: string[];
  className?: string;
}) {
  const width = 560;
  const height = 200;
  const padding = 32;

  const { pathD, points, yTicks } = useMemo(() => {
    const safeData = data.length ? data : [0];
    const minVal = Math.min(...safeData);
    const maxVal = Math.max(...safeData);
    const span = maxVal - minVal || 1;
    const innerW = width - padding * 2;
    const innerH = height - padding * 2;

    const xs = safeData.map((_, i) =>
      safeData.length === 1
        ? padding + innerW / 2
        : padding + (i * innerW) / (safeData.length - 1)
    );
    const ys = safeData.map(
      (v) => padding + innerH - ((v - minVal) / span) * innerH
    );

    const d = xs.map((x, i) => `${i === 0 ? "M" : "L"} ${x} ${ys[i]}`).join(" ");

    const tickCount = 4;
    const ticks = new Array(tickCount + 1).fill(0).map((_, i) => {
      const tVal = minVal + (i * span) / tickCount;
      const y = padding + innerH - ((tVal - minVal) / span) * innerH;
      return { y, label: Math.round(tVal) };
    });

    return {
      pathD: d,
      points: xs.map((x, i) => ({ x, y: ys[i] })),
      yTicks: ticks,
    };
  }, [data]);

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-52"
        role="img"
        aria-label="Daily charging sessions over the past week"
      >
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          className="fill-white dark:fill-gray-900"
          rx="12"
        />

        <rect
          x={padding}
          y={padding}
          width={width - padding * 2}
          height={height - padding * 2}
          className="fill-none stroke-gray-200 dark:stroke-gray-800"
          rx="8"
        />

        {yTicks.map((t, idx) => (
          <g key={idx}>
            <line
              x1={padding}
              x2={width - padding}
              y1={t.y}
              y2={t.y}
              className="stroke-gray-100 dark:stroke-gray-800"
            />
            <text
              x={padding - 8}
              y={t.y}
              textAnchor="end"
              dominantBaseline="middle"
              className="fill-gray-400 dark:fill-gray-500 text-[10px]"
            >
              {t.label}
            </text>
          </g>
        ))}

        {labels.map((label, i) => (
          <text
            key={label}
            x={padding + ((labels.length === 1 ? padding : (width - padding * 2)) * i) / (labels.length - 1 || 1)}
            y={height - padding + 16}
            textAnchor="middle"
            className="fill-gray-400 dark:fill-gray-500 text-[10px]"
          >
            {label}
          </text>
        ))}

        <path
          d={pathD}
          className="fill-none stroke-indigo-500 dark:stroke-indigo-400"
          strokeWidth={2}
        />

        {data.map((_, i) => {
          const x =
            data.length === 1
              ? padding + (width - padding * 2) / 2
              : padding + (i * (width - padding * 2)) / (data.length - 1);
          const safeData = data.length ? data : [0];
          const minVal = Math.min(...safeData);
          const maxVal = Math.max(...safeData);
          const span = maxVal - minVal || 1;
          const innerH = height - padding * 2;
          const y =
            padding +
            innerH -
            ((data[i] - minVal) / span) * innerH;

          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={3}
              className="fill-indigo-500 dark:fill-indigo-400"
            />
          );
        })}
      </svg>
    </div>
  );
}

function StatusBadge({ status }: { status: DeviceStatus }) {
  const color =
    status === "Active"
      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
      : "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300";
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
      {status}
    </span>
  );
}

function DeviceTable({ devices }: { devices: Device[] }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          Devices
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-950/50 text-gray-500 dark:text-gray-400">
            <tr>
              <th className="text-left px-4 py-2 font-medium">Device ID</th>
              <th className="text-left px-4 py-2 font-medium">Status</th>
              <th className="text-left px-4 py-2 font-medium">Location</th>
              <th className="text-left px-4 py-2 font-medium">Last Online</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {devices.map((device) => (
              <tr key={device.id} className="text-gray-700 dark:text-gray-200">
                <td className="px-4 py-2 font-mono">{device.id}</td>
                <td className="px-4 py-2">
                  <StatusBadge status={device.status} />
                </td>
                <td className="px-4 py-2">{device.location}</td>
                <td className="px-4 py-2">{device.lastOnline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FeedbackPanel({ items }: { items: Feedback[] }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          Recent Feedback
        </h3>
      </div>
      <ul className="divide-y divide-gray-100 dark:divide-gray-800">
        {items.map((entry, i) => (
          <li key={`${entry.name}-${i}`} className="px-4 py-3">
            <div className="text-sm font-medium text-gray-800 dark:text-gray-100">
              {entry.name}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {entry.comment}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatRelativeTime(timestamp: number) {
  const diffMs = Date.now() - timestamp;
  const minutes = Math.round(diffMs / 60000);
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  return `${days}d ago`;
}

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const preferred =
      stored ||
      (typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme((preferred as "light" | "dark") || "light");
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return { theme, setTheme };
}

export default function AdminDashboardPage() {
  const { theme, setTheme } = useTheme();

  const [activeChargers, setActiveChargers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [sessionsToday, setSessionsToday] = useState(0);
  const [avgSessionMins, setAvgSessionMins] = useState(0);
  const [dailySessions, setDailySessions] = useState<number[]>([]);
  const [dailyLabels, setDailyLabels] = useState<string[]>([]);
  const [devices, setDevices] = useState<Device[]>([]);
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  const randomize = () => {
    const ac = 8 + Math.floor(Math.random() * 8);
    const tu = 1200 + Math.floor(Math.random() * 400);
    const st = 30 + Math.floor(Math.random() * 40);
    const avg = 20 + Math.floor(Math.random() * 30);
    setActiveChargers(ac);
    setTotalUsers(tu);
    setSessionsToday(st);
    setAvgSessionMins(avg);

    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const values = labels.map(() => 20 + Math.floor(Math.random() * 60));
    setDailyLabels(labels);
    setDailySessions(values);

    const now = Date.now();
    const newDevices: Device[] = new Array(8).fill(null).map((_, i) => {
      const status: DeviceStatus = Math.random() > 0.2 ? "Active" : "Offline";
      const deltaMin = Math.floor(Math.random() * 600);
      return {
        id: `CHG-${(1000 + i).toString()}`,
        status,
        location: [
          "Sydney CBD",
          "Barangaroo",
          "Darling Harbour",
          "North Sydney",
          "Newtown",
          "Parramatta",
        ][i % 6],
        lastOnline:
          status === "Active" ? "Online" : formatRelativeTime(now - deltaMin * 60000),
      };
    });
    setDevices(newDevices);

    const sampleFeedback: Feedback[] = [
      { name: "Ava", comment: "Smooth session, easy to find a free spot." },
      { name: "Lucas", comment: "Payment felt snappy. Would love Apple Pay support." },
      { name: "Mia", comment: "Station 1004 went offline briefly around 3pm." },
      { name: "Noah", comment: "Great UI and clear pricing." },
    ].sort(() => (Math.random() > 0.5 ? 1 : -1));
    setFeedback(sampleFeedback);
  };

  useEffect(() => {
    randomize();
  }, []);

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <header className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Admin Dashboard
            </h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="inline-flex items-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
                type="button"
              >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
              <button
                onClick={randomize}
                className="inline-flex items-center rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 text-sm"
                type="button"
              >
                Refresh Data
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-6">
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <StatsCard title="Active Chargers" value={activeChargers} />
            <StatsCard title="Total Users" value={totalUsers} />
            <StatsCard title="Charging Sessions Today" value={sessionsToday} />
            <StatsCard title="Avg Session Time" value={`${avgSessionMins} mins`} />
          </section>

          <section className="mt-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                Daily Charging Sessions (Past 7 Days)
              </h3>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Range:{" "}
                {Math.min(...(dailySessions.length ? dailySessions : [0]))} -{" "}
                {Math.max(...(dailySessions.length ? dailySessions : [0]))}
              </div>
            </div>
            <SimpleLineChart data={dailySessions} labels={dailyLabels} />
          </section>

          <section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <DeviceTable devices={devices} />
            </div>
            <div>
              <FeedbackPanel items={feedback} />
            </div>
          </section>

          <section className="mt-8 text-xs text-gray-500 dark:text-gray-400">
            {/* Integration hint: swap mock data for live API calls.
                Suggested endpoints:
                - GET /api/metrics -> { activeChargers, totalUsers, sessionsToday, avgSessionMins }
                - GET /api/sessions/daily?days=7 -> number[]
                - GET /api/devices -> Device[]
                - GET /api/feedback?limit=5 -> Feedback[]
                Consider SWR or React Query for caching and refetching. */}
            <p>
              Note: All values are simulated. Replace these with backend data
              once your APIs are ready.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
