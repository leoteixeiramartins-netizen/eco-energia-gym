import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Droplets, Wheat, Beef, Flame, Nut, Zap } from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { ActivityCard, type Goal } from "@/components/ui/activity-card";

const title = "Simulador Nutricional — EnergyFit";
const description =
  "Calcule água, carboidratos, proteínas, gorduras e calorias diárias ideais a partir do seu peso, nível de atividade e objetivo de treino na EnergyFit.";

export const Route = createFileRoute("/simulador")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Simulador,
});

const niveis = [
  { id: "leve", label: "Leve", fator: 1.2, agua: 33 },
  { id: "moderado", label: "Moderado", fator: 1.45, agua: 38 },
  { id: "intenso", label: "Intenso", fator: 1.7, agua: 45 },
] as const;

const objetivos = [
  { id: "definir", label: "Definição", kcal: -0.12, prot: 2.0, carb: 3.5, gord: 0.8 },
  { id: "manter", label: "Manutenção", kcal: 0, prot: 1.6, carb: 4.5, gord: 1.0 },
  { id: "ganhar", label: "Hipertrofia", kcal: 0.15, prot: 2.2, carb: 6.0, gord: 1.2 },
] as const;

function Simulador() {
  const [peso, setPeso] = useState(70);
  const [nivel, setNivel] = useState<(typeof niveis)[number]["id"]>("moderado");
  const [objetivo, setObjetivo] = useState<(typeof objetivos)[number]["id"]>("manter");

  const n = niveis.find((x) => x.id === nivel)!;
  const o = objetivos.find((x) => x.id === objetivo)!;

  const r = useMemo(() => {
    const p = Math.max(30, Math.min(200, peso || 0));
    const agua = (p * n.agua) / 1000;
    const proteina = p * o.prot;
    const carbo = p * o.carb;
    const gordura = p * o.gord;
    const kcalMacros = proteina * 4 + carbo * 4 + gordura * 9;
    const kcal = Math.round(kcalMacros * n.fator * (1 + o.kcal) * 0.62);
    const watts = Math.round(p * 1.8 * n.fator);
    return {
      agua: agua.toFixed(1),
      proteina: Math.round(proteina),
      carbo: Math.round(carbo),
      gordura: Math.round(gordura),
      kcal,
      watts,
    };
  }, [peso, n, o]);

  const [goals, setGoals] = useState<Goal[]>([
    { id: "1", title: "Beber água antes e depois do treino", isCompleted: true },
    { id: "2", title: "Refeição pré-treino com carboidrato", isCompleted: false },
    { id: "3", title: "Proteína em todas as refeições", isCompleted: false },
  ]);

  const cards = [
    { icon: Droplets, label: "Água", valor: `${r.agua} L`, desc: "hidratação diária recomendada" },
    { icon: Beef, label: "Proteínas", valor: `${r.proteina} g`, desc: "recuperação e massa muscular" },
    { icon: Wheat, label: "Carboidratos", valor: `${r.carbo} g`, desc: "combustível para gerar energia" },
    { icon: Nut, label: "Gorduras boas", valor: `${r.gordura} g`, desc: "hormônios e saúde metabólica" },
    { icon: Flame, label: "Calorias", valor: `${r.kcal} kcal`, desc: "meta calórica estimada" },
    { icon: Zap, label: "Geração estimada", valor: `${r.watts} Wh`, desc: "energia produzida por semana" },
  ];

  return (
    <div className="min-h-screen">
      <SiteNavbar />
      <main className="pt-32 pb-24 sm:pt-40">
        <div className="mx-auto max-w-7xl px-5">
          <span className="text-xs font-semibold tracking-[0.2em] text-neon uppercase">
            Simulador nutricional
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
            Quanto seu corpo precisa para <span className="text-energy">gerar energia</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Informe seu peso, o nível de treino e o objetivo. O simulador calcula água,
            macronutrientes e calorias diárias — além da energia que você pode gerar treinando na
            EnergyFit.
          </p>
          <div className="energy-line mt-6 w-32 rounded-full" />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="card-glow rounded-3xl p-7">
              <label htmlFor="peso" className="text-sm font-medium">
                Seu peso
              </label>
              <div className="mt-3 flex items-end gap-3">
                <input
                  id="peso"
                  type="number"
                  min={30}
                  max={200}
                  value={peso}
                  onChange={(e) => setPeso(Number(e.target.value))}
                  className="w-32 rounded-xl border border-primary/30 bg-background px-4 py-3 font-display text-2xl font-bold text-neon outline-none focus:border-neon"
                />
                <span className="pb-3 text-muted-foreground">kg</span>
              </div>
              <input
                type="range"
                min={30}
                max={200}
                value={peso}
                onChange={(e) => setPeso(Number(e.target.value))}
                aria-label="Peso em quilogramas"
                className="mt-5 w-full accent-[var(--neon)]"
              />

              <p className="mt-8 text-sm font-medium">Nível de treino</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {niveis.map((x) => (
                  <button
                    key={x.id}
                    type="button"
                    onClick={() => setNivel(x.id)}
                    className={
                      nivel === x.id
                        ? "rounded-full bg-energy px-5 py-2 text-sm font-semibold text-primary-foreground"
                        : "rounded-full border border-primary/30 px-5 py-2 text-sm text-muted-foreground transition-colors hover:border-neon hover:text-neon"
                    }
                  >
                    {x.label}
                  </button>
                ))}
              </div>

              <p className="mt-8 text-sm font-medium">Objetivo</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {objetivos.map((x) => (
                  <button
                    key={x.id}
                    type="button"
                    onClick={() => setObjetivo(x.id)}
                    className={
                      objetivo === x.id
                        ? "rounded-full bg-energy px-5 py-2 text-sm font-semibold text-primary-foreground"
                        : "rounded-full border border-primary/30 px-5 py-2 text-sm text-muted-foreground transition-colors hover:border-neon hover:text-neon"
                    }
                  >
                    {x.label}
                  </button>
                ))}
              </div>

              <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
                Estimativas educativas baseadas em faixas por quilo de peso corporal. Não substituem
                acompanhamento de nutricionista.
              </p>
            </div>

            <ActivityCard
              category="Metas nutricionais"
              title="Seu dia na EnergyFit"
              metrics={[
                { label: "Água", value: r.agua, unit: "L", trend: Math.min(100, Math.round((Number(r.agua) / 4) * 100)) },
                { label: "Proteína", value: String(r.proteina), unit: "g", trend: Math.min(100, Math.round((r.proteina / 220) * 100)) },
                { label: "Carbo", value: String(r.carbo), unit: "g", trend: Math.min(100, Math.round((r.carbo / 600) * 100)) },
              ]}
              dailyGoals={goals}
              onToggleGoal={(id) =>
                setGoals((prev) =>
                  prev.map((g) => (g.id === id ? { ...g, isCompleted: !g.isCompleted } : g)),
                )
              }
            />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <article key={c.label} className="card-glow rounded-3xl p-7">
                <c.icon className="h-7 w-7 text-neon" />
                <h2 className="mt-6 text-lg font-semibold">{c.label}</h2>
                <p className="text-energy font-display mt-2 text-3xl font-bold">{c.valor}</p>
                <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
