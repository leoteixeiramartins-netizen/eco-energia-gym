import { createFileRoute } from "@tanstack/react-router";
import {
  Zap,
  Sun,
  BatteryCharging,
  Cpu,
  Leaf,
  Activity,
  Bike,
  Footprints,
  Dumbbell,
  Gauge,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import heroImg from "@/assets/hero-energyfit.jpg";

const title = "EnergyFit — Academia Sustentável de Geração Energética";
const description =
  "Academia onde cada passo vira energia: equipamentos fitness geradores, sistema solar fotovoltaico e gestão inteligente transformam treino em eletricidade limpa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "EnergyFit — Academia Sustentável de Geração Energética",
          description,
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

const sistemas = [
  {
    icon: Zap,
    titulo: "Equipamentos Geradores",
    texto:
      "Esteiras, bicicletas e elípticos acoplados a dínamos e geradores de indução convertem o movimento humano em corrente elétrica contínua, retificada e estabilizada.",
  },
  {
    icon: Sun,
    titulo: "Sistema Solar Fotovoltaico",
    texto:
      "Painéis solares na cobertura complementam a geração humana e garantem produção constante durante todo o dia, mesmo fora do horário de pico de treinos.",
  },
  {
    icon: BatteryCharging,
    titulo: "Armazenamento em Banco de Baterias",
    texto:
      "A energia gerada é armazenada em baterias de lítio de alta densidade, prontas para alimentar iluminação, climatização e equipamentos da academia.",
  },
  {
    icon: Cpu,
    titulo: "Gestão Inteligente (EMS)",
    texto:
      "Um sistema de gerenciamento monitora geração, consumo e carga em tempo real, distribuindo a energia de forma otimizada e enviando o excedente à rede.",
  },
];

const etapas = [
  { n: "01", t: "Você treina", d: "Cada pedalada, passo e repetição movimenta o gerador acoplado ao equipamento." },
  { n: "02", t: "Conversão", d: "O movimento mecânico vira energia elétrica, retificada e estabilizada por inversores." },
  { n: "03", t: "Armazenamento", d: "A carga é somada à geração solar e guardada no banco de baterias inteligente." },
  { n: "04", t: "Consumo limpo", d: "A academia se alimenta da própria energia e devolve o excedente à rede elétrica." },
];

const equipamentos = [
  { icon: Bike, nome: "Bike Geradora", saida: "150 W/h", desc: "Pico de até 200 W em treinos de alta intensidade." },
  { icon: Footprints, nome: "Esteira Cinética", saida: "120 W/h", desc: "Piso cinético que aproveita cada impacto do passo." },
  { icon: Activity, nome: "Elíptico Híbrido", saida: "100 W/h", desc: "Movimento contínuo de baixo impacto e geração estável." },
  { icon: Dumbbell, nome: "Estação de Força", saida: "60 W/h", desc: "Resistência magnética regenerativa em cada repetição." },
];

const metricas = [
  { valor: "38%", label: "da demanda energética suprida pelos usuários" },
  { valor: "62%", label: "complementados pelo sistema solar fotovoltaico" },
  { valor: "18 t", label: "de CO₂ evitadas por ano por unidade" },
  { valor: "R$ 0", label: "de custo com energia da rede em dias de pico" },
];

const beneficios = [
  { icon: Leaf, t: "Impacto ambiental positivo", d: "Redução direta da pegada de carbono e uso de matriz 100% renovável." },
  { icon: Gauge, t: "Treino com propósito", d: "O app mostra quantos watts-hora você gerou e o quanto isso representa em CO₂ evitado." },
  { icon: BatteryCharging, t: "Autonomia energética", d: "Operação estável mesmo em falhas de fornecimento, com backup em baterias." },
  { icon: Cpu, t: "Dados em tempo real", d: "Dashboard inteligente com geração, consumo e eficiência atualizados a cada segundo." },
];

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Sistemas />
        <ComoFunciona />
        <Dashboard />
        <Equipamentos />
        <Impacto />
        <Beneficios />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#como-funciona", label: "Missões" },
  { href: "#impacto", label: "Destinos" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#dashboard", label: "Reservar Voo" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto max-w-[1200px]">
        <nav className="nav-glass flex h-[52px] items-center justify-between gap-6 rounded-full pr-1.5 pl-2 sm:pl-4">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="text-nav-muted grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors hover:text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setActive(l.href)}
                  className={
                    active === l.href
                      ? "nav-item-active inline-flex items-center rounded-full px-4 py-2 text-sm transition-colors"
                      : "text-nav-muted inline-flex items-center rounded-full px-4 py-2 text-sm transition-colors duration-300 hover:text-white"
                  }
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="bg-nav-cta text-nav-cta-foreground inline-flex shrink-0 items-center gap-1.5 rounded-full px-6 py-[10px] text-sm font-medium transition-transform duration-300 hover:scale-[1.04]"
          >
            Reservar Assento <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>

        {open ? (
          <ul className="nav-glass mt-2 flex flex-col gap-1 rounded-3xl p-3 md:hidden">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => {
                    setActive(l.href);
                    setOpen(false);
                  }}
                  className={
                    active === l.href
                      ? "nav-item-active block rounded-full px-4 py-2.5 text-sm"
                      : "text-nav-muted block rounded-full px-4 py-2.5 text-sm transition-colors hover:text-white"
                  }
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pulse-orb absolute top-[-10rem] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "var(--gradient-energy)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-neon uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Energia cinética + solar
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
          Transformando <span className="text-energy">Movimento</span> em Energia
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          A EnergyFit converte o esforço físico de cada aluno em
          eletricidade limpa, integrando equipamentos geradores, energia solar fotovoltaica e um
          sistema inteligente de armazenamento e gerenciamento.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#como-funciona"
            className="bg-energy glow hover:glow-strong inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-primary-foreground transition-shadow"
          >
            Conheça a tecnologia <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#impacto"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-neon hover:text-neon"
          >
            Ver impacto ambiental
          </a>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-primary/25 shadow-[0_0_80px_-20px_rgba(255,234,0,0.5)]">
          <img
            src={heroImg}
            alt="Interior de academia futurista com equipamentos conectados por trilhas de energia verde e painéis solares"
            width={1600}
            height={1008}
            className="w-full object-cover"
          />
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metricas.map((m) => (
            <div key={m.label} className="card-glow rounded-2xl p-5">
              <dt className="text-energy font-display text-3xl font-bold">{m.valor}</dt>
              <dd className="mt-2 text-xs text-muted-foreground sm:text-sm">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SectionTitle({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <span className="text-xs font-semibold tracking-[0.2em] text-neon uppercase">{tag}</span>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
      {sub ? <p className="mt-4 text-muted-foreground">{sub}</p> : null}
      <div className="energy-line mt-6 w-32 rounded-full" />
    </div>
  );
}

function Sistemas() {
  return (
    <section id="tecnologia" className="relative py-24" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          tag="Arquitetura do sistema"
          title="Quatro camadas integradas de geração inteligente"
          sub="Cada componente da EnergyFit trabalha em conjunto para capturar, converter, armazenar e distribuir energia limpa."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {sistemas.map((s) => (
            <article key={s.titulo} className="card-glow rounded-3xl p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/40 bg-background">
                <s.icon className="h-6 w-6 text-neon" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{s.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          tag="Fluxo energético"
          title="Do primeiro passo à rede elétrica"
          sub="O ciclo completo da energia dentro da EnergyFit, em quatro etapas contínuas."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {etapas.map((e) => (
            <li key={e.n} className="card-glow relative rounded-3xl p-7">
              <span className="text-energy font-display text-5xl font-bold opacity-70">{e.n}</span>
              <h3 className="mt-5 text-lg font-semibold">{e.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
            </li>
          ))}
        </ol>
        <div className="energy-line mt-12 rounded-full" />
      </div>
    </section>
  );
}

const barras = [
  { h: 38, l: "Seg" },
  { h: 52, l: "Ter" },
  { h: 44, l: "Qua" },
  { h: 71, l: "Qui" },
  { h: 88, l: "Sex" },
  { h: 96, l: "Sáb" },
  { h: 61, l: "Dom" },
];

function Dashboard() {
  return (
    <section id="dashboard" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          tag="Monitoramento em tempo real"
          title="Um painel inteligente para cada watt gerado"
          sub="O sistema de gerenciamento energético acompanha produção, consumo e eficiência — e cada aluno vê a própria contribuição."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="card-glow rounded-3xl p-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  Geração semanal
                </p>
                <p className="text-energy font-display mt-1 text-4xl font-bold">412 kWh</p>
              </div>
              <span className="rounded-full border border-primary/40 px-3 py-1 text-xs text-neon">
                +14% vs. semana anterior
              </span>
            </div>
            <div className="mt-10 flex h-52 items-end gap-3">
              {barras.map((b) => (
                <div key={b.l} className="flex flex-1 flex-col items-center gap-3">
                  <div
                    className="bg-energy w-full rounded-t-lg shadow-[0_0_18px_rgba(255,234,0,0.4)]"
                    style={{ height: `${b.h}%` }}
                  />
                  <span className="text-[11px] text-muted-foreground">{b.l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            {[
              { l: "Eficiência do EMS", v: "94%", w: "94%" },
              { l: "Carga do banco de baterias", v: "78%", w: "78%" },
              { l: "Excedente enviado à rede", v: "26%", w: "26%" },
            ].map((k) => (
              <div key={k.l} className="card-glow rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{k.l}</p>
                  <p className="font-display text-xl font-bold text-neon">{k.v}</p>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-background">
                  <div className="bg-energy h-full rounded-full" style={{ width: k.w }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Equipamentos() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          tag="Equipamentos"
          title="Máquinas que devolvem energia ao prédio"
          sub="Toda a linha de treino é equipada com geradores acoplados e telemetria integrada."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipamentos.map((e) => (
            <article key={e.nome} className="card-glow rounded-3xl p-7">
              <e.icon className="h-7 w-7 text-neon" />
              <h3 className="mt-6 text-lg font-semibold">{e.nome}</h3>
              <p className="text-energy font-display mt-2 text-2xl font-bold">{e.saida}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impacto() {
  return (
    <section id="impacto" className="relative overflow-hidden py-24" style={{ background: "var(--surface)" }}>
      <div
        className="pulse-orb absolute right-[-8rem] bottom-[-8rem] h-96 w-96 rounded-full opacity-25 blur-[110px]"
        style={{ background: "var(--gradient-energy)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionTitle
          tag="Impacto ambiental"
          title="Sustentabilidade que se mede em números"
          sub="A operação da EnergyFit reduz o consumo da rede convencional e transforma hábitos de saúde em ganho ambiental coletivo."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { t: "Matriz 100% renovável", d: "Combinação de energia cinética humana e geração solar elimina a dependência de fontes fósseis." },
            { t: "Economia circular", d: "O excedente energético é injetado na rede, beneficiando o entorno e reduzindo perdas de distribuição." },
            { t: "Educação ambiental", d: "Painéis públicos mostram em tempo real quanto CO₂ a comunidade deixou de emitir treinando." },
          ].map((i) => (
            <article key={i.t} className="card-glow rounded-3xl p-8">
              <Leaf className="h-7 w-7 text-neon" />
              <h3 className="mt-6 text-xl font-semibold">{i.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle tag="Benefícios" title="Por que treinar na EnergyFit" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {beneficios.map((b) => (
            <article key={b.t} className="card-glow flex gap-5 rounded-3xl p-7">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-primary/40 bg-background">
                <b.icon className="h-5 w-5 text-neon" />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">{b.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 p-10 text-center sm:p-16" style={{ background: "var(--card)" }}>
          <div
            className="pulse-orb absolute inset-x-0 top-[-6rem] mx-auto h-64 w-64 rounded-full opacity-30 blur-[100px]"
            style={{ background: "var(--gradient-energy)" }}
            aria-hidden
          />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-5xl">
              Seu treino pode <span className="text-energy">acender a cidade</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Faça parte da primeira academia que devolve energia limpa ao mundo. Agende uma visita
              e acompanhe ao vivo a geração do seu primeiro watt.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:contato@energyfit.eco"
                className="bg-energy glow hover:glow-strong inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-primary-foreground transition-shadow"
              >
                Agendar visita <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-primary/15 py-12" style={{ background: "var(--surface)" }}>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-energy grid h-8 w-8 place-items-center rounded-lg">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display font-bold">EnergyFit</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            EnergyFit — movimento humano convertido em energia
            elétrica limpa.
          </p>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-neon" /> contato@energyfit.eco
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-neon" /> +55 (11) 4000-0000
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-neon" /> São Paulo, Brasil
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
          <a href="#tecnologia" className="hover:text-neon">Tecnologia</a>
          <a href="#como-funciona" className="hover:text-neon">Como funciona</a>
          <a href="#dashboard" className="hover:text-neon">Dashboard</a>
          <a href="#impacto" className="hover:text-neon">Impacto</a>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} EnergyFit. Todos os direitos reservados.
      </p>
    </footer>
  );
}
