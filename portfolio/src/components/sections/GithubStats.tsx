import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BsFire } from "react-icons/bs";
import { FiActivity, FiCalendar, FiAlertCircle } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { siteConfig } from "@/data/social";

// Uses the community github-readme-stats service for the language breakdown,
// and the public (no-auth-required) github-contributions-api for real,
// live-computed contribution + streak data — no static badge image involved.
// TODO: siteConfig.githubUsername controls all the data below — update it once.

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionsResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

function computeStreaks(days: ContributionDay[]) {
  if (!days.length) return { current: 0, longest: 0, total: 0 };

  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
  const total = sorted.reduce((sum, d) => sum + d.count, 0);

  // Longest streak: sliding pass over all days.
  let longest = 0;
  let running = 0;
  for (const d of sorted) {
    if (d.count > 0) {
      running += 1;
      longest = Math.max(longest, running);
    } else {
      running = 0;
    }
  }

  // Current streak: walk backwards from the most recent day. If today has no
  // contributions yet, that's fine — we just start counting from yesterday.
  let current = 0;
  for (let i = sorted.length - 1; i >= 0; i--) {
    if (sorted[i].count > 0) {
      current += 1;
    } else if (i === sorted.length - 1) {
      continue; // today may simply not have activity yet
    } else {
      break;
    }
  }

  return { current, longest, total };
}

const LEVEL_COLORS = ["rgba(255,255,255,0.06)", "#1e3a3a", "#155e56", "#0e9488", "#22d3ee"];

export default function GithubStats() {
  const username = siteConfig.githubUsername;
  const [data, setData] = useState<ContributionsResponse | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch contributions");
        return res.json();
      })
      .then((json: ContributionsResponse) => {
        if (cancelled) return;
        setData(json);
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  const stats = useMemo(() => computeStreaks(data?.contributions ?? []), [data]);

  // Last ~53 weeks, grouped into columns for a GitHub-style heatmap.
  const weeks = useMemo(() => {
    const days = data?.contributions ?? [];
    if (!days.length) return [];
    const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
    const cols: ContributionDay[][] = [];
    for (let i = 0; i < sorted.length; i += 7) {
      cols.push(sorted.slice(i, i + 7));
    }
    return cols;
  }, [data]);

  return (
    <section id="github" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="GitHub Activity"
          title="Contributions & streak"
          description="A live look at my open-source activity, contribution graph and coding streak, pulled directly from GitHub."
        />

        {status === "error" && (
          <GlassCard className="p-6 mb-6 flex items-center gap-3 text-white/60 text-sm">
            <FiAlertCircle className="text-aurora-purple shrink-0" size={18} />
            Couldn't load live contribution data right now — you can view the full activity directly on{" "}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-aurora-cyan hover:underline"
            >
              GitHub
            </a>
            .
          </GlassCard>
        )}

        <div className="grid sm:grid-cols-3 gap-6 mb-6">
          <GlassCard className="p-6 flex items-center gap-4" custom={0}>
            <span className="w-11 h-11 rounded-xl bg-aurora-gradient/20 grid place-items-center text-aurora-cyan shrink-0">
              <FiActivity size={20} />
            </span>
            <div>
              <p className="text-2xl font-bold text-white">
                {status === "loading" ? "—" : stats.total.toLocaleString()}
              </p>
              <p className="text-xs text-white/50 font-mono uppercase tracking-widest">
                Total Contributions
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-6 flex items-center gap-4" custom={1}>
            <span className="w-11 h-11 rounded-xl bg-aurora-gradient/20 grid place-items-center text-orange-400 shrink-0">
              <BsFire size={20} />
            </span>
            <div>
              <p className="text-2xl font-bold text-white">
                {status === "loading" ? "—" : stats.current}
                <span className="text-sm font-normal text-white/40 ml-1">days</span>
              </p>
              <p className="text-xs text-white/50 font-mono uppercase tracking-widest">
                Current Streak
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-6 flex items-center gap-4" custom={2}>
            <span className="w-11 h-11 rounded-xl bg-aurora-gradient/20 grid place-items-center text-aurora-purple shrink-0">
              <FiCalendar size={20} />
            </span>
            <div>
              <p className="text-2xl font-bold text-white">
                {status === "loading" ? "—" : stats.longest}
                <span className="text-sm font-normal text-white/40 ml-1">days</span>
              </p>
              <p className="text-xs text-white/50 font-mono uppercase tracking-widest">
                Longest Streak
              </p>
            </div>
          </GlassCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <GlassCard className="p-6">
            <h3 className="text-sm font-mono uppercase tracking-widest text-white/40 mb-5">
              Contribution Graph — past year
            </h3>

            {status === "loading" && (
              <div className="h-28 grid place-items-center text-white/30 text-sm">
                Loading contribution graph…
              </div>
            )}

            {status === "ready" && weeks.length > 0 && (
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-[3px] w-max">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((day) => (
                        <div
                          key={day.date}
                          title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                          className="w-[10px] h-[10px] rounded-[2px]"
                          style={{ background: LEVEL_COLORS[day.level] }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="h-28 grid place-items-center text-white/30 text-sm">
                Contribution graph unavailable.
              </div>
            )}
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
}
