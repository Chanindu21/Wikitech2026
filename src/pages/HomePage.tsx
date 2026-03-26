import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomePage = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden bg-primary py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)),transparent_70%)]" />
      </div>
      <div className="container relative text-center">
        <h1 className="text-5xl font-bold tracking-tight text-primary-foreground md:text-6xl animate-fade-in">
          Wiki Tech
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Technologie begrijpelijk voor iedereen. Vind betrouwbare informatie over laptops, telefoons, tablets en meer.
        </p>
        <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
            <Link to="/apparaten">Bekijk apparaten →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="container py-20">
      <h2 className="text-center text-3xl font-bold">Wat kun je hier vinden?</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: "📖", title: "Informatiepagina's", desc: "Gedetailleerde uitleg over laptops, telefoons, tablets en meer." },
          { icon: "🔧", title: "Probleemoplossingen", desc: "Stap-voor-stap uitleg voor veelvoorkomende problemen." },
          { icon: "⚖️", title: "Vergelijkingen", desc: "Vergelijk apparaten om te bepalen welke het beste bij je past." },
          { icon: "🤓", title: "Nerd-modus", desc: "Diepgaande specificaties voor de echte tech-liefhebber." },
        ].map((f) => (
          <div key={f.title} className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg">
            <span className="text-3xl">{f.icon}</span>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default HomePage;
