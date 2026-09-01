import { useState } from "react";
import { Activity, ArrowUpRight, Plus, Target, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Metric {
  label: string;
  value: string;
  trend: number;
  unit?: string;
  color?: string;
}

export interface Goal {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface ActivityCardProps {
  category?: string;
  title?: string;
  metrics?: Metric[];
  dailyGoals?: Goal[];
  onAddGoal?: () => void;
  onToggleGoal?: (goalId: string) => void;
  onViewDetails?: () => void;
  className?: string;
}

function Ring({ metric, active }: { metric: Metric; active: boolean }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, metric.trend));
  const color = metric.color ?? "var(--neon)";

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-28 w-28">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c - (c * pct) / 100}
            style={{
              transition: "stroke-dashoffset .8s ease",
              filter: active ? "drop-shadow(0 0 8px rgba(255,234,0,.6))" : undefined,
            }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-xl font-bold text-foreground">{metric.value}</span>
          <span className="text-[11px] text-muted-foreground">{metric.unit}</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-foreground">{metric.label}</p>
        <p className="text-xs text-muted-foreground">{pct}%</p>
      </div>
    </div>
  );
}

export function ActivityCard({
  category = "Atividade",
  title = "Progresso de hoje",
  metrics = [],
  dailyGoals = [],
  onAddGoal,
  onToggleGoal,
  onViewDetails,
  className,
}: ActivityCardProps) {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className={cn("card-glow rounded-3xl p-7", className)}>
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl border border-primary/40 bg-background">
          <Activity className="h-5 w-5 text-neon" />
        </span>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">{category}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {metrics.map((m) => (
          <div
            key={m.label}
            onMouseEnter={() => setHover(m.label)}
            onMouseLeave={() => setHover(null)}
          >
            <Ring metric={m} active={hover === m.label} />
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-primary/15 pt-6">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-medium">
            <Target className="h-4 w-4 text-neon" /> Metas do dia
          </p>
          {onAddGoal ? (
            <button
              type="button"
              onClick={onAddGoal}
              aria-label="Adicionar meta"
              className="grid h-8 w-8 place-items-center rounded-full border border-primary/30 text-neon transition-colors hover:border-neon"
            >
              <Plus className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        <div className="mt-4 space-y-2">
          {dailyGoals.map((goal) => (
            <button
              key={goal.id}
              type="button"
              onClick={() => onToggleGoal?.(goal.id)}
              className="flex w-full items-center gap-3 rounded-xl border border-primary/15 bg-background/60 p-3 text-left transition-colors hover:border-primary/40"
            >
              <CheckCircle2
                className={cn(
                  "h-5 w-5 shrink-0",
                  goal.isCompleted ? "text-neon" : "text-muted-foreground",
                )}
              />
              <span
                className={cn(
                  "text-sm",
                  goal.isCompleted ? "text-muted-foreground line-through" : "text-foreground",
                )}
              >
                {goal.title}
              </span>
            </button>
          ))}
        </div>

        {onViewDetails ? (
          <button
            type="button"
            onClick={onViewDetails}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-neon hover:underline"
          >
            Ver detalhes <ArrowUpRight className="h-4 w-4" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
