import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { brands, type Tier } from "@/data/products";
import { Button } from "@/components/ui/button";

const DevicePage = () => {
  const { brandSlug, categorySlug, tier } = useParams<{
    brandSlug: string;
    categorySlug: string;
    tier: string;
  }>();
  const [showNerd, setShowNerd] = useState(false);

  const brand = brands.find((b) => b.slug === brandSlug);
  const category = brand?.categories.find((c) => c.slug === categorySlug);
  const product = category?.products.find((p) => p.tier === tier as Tier);

  if (!brand || !category || !product) return <Navigate to="/apparaten" replace />;

  const tierColor =
    product.tier === "low" ? "bg-tier-low" :
    product.tier === "mid" ? "bg-tier-mid" :
    "bg-tier-high";

  return (
    <div className="container py-16">
      <Link
        to={`/apparaten/${brand.slug}/${category.slug}`}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← {brand.name} {category.name}
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-5">
        {/* Main info */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-3">
            <span className={`inline-block h-3 w-3 rounded-full ${tierColor}`} />
            <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {product.tier} tier
            </span>
          </div>
          <h1 className="mt-3 text-4xl font-bold">{product.model}</h1>
          <p className="mt-2 text-muted-foreground">{brand.name} · {category.name}</p>

          <div className="mt-8 space-y-6">
            <InfoBlock label="Release" value={product.release} />
            <InfoBlock label="Voor wie?" value={product.targetAudience} />
            <InfoBlock label="Wat kun je ermee?" value={product.usage} />
            <InfoBlock label="Basis specs" value={product.specs} />
          </div>

          <div className="mt-10">
            <Button
              onClick={() => setShowNerd(!showNerd)}
              variant={showNerd ? "default" : "outline"}
              size="lg"
              className="gap-2"
            >
              🤓 {showNerd ? "Verberg" : "Bekijk"} nerd specs
            </Button>
          </div>
        </div>

        {/* Sidebar quick specs */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="font-bold text-lg mb-4">Snel overzicht</h3>
            <dl className="space-y-3">
              <QuickSpec label="Model" value={product.model} />
              <QuickSpec label="Tier" value={product.tier.toUpperCase()} />
              <QuickSpec label="Release" value={product.release} />
              <QuickSpec label="Doelgroep" value={product.targetAudience} />
            </dl>
          </div>
        </div>
      </div>

      {/* Nerd specs */}
      {showNerd && (
        <div className="mt-10 animate-fade-in rounded-2xl border-2 border-primary/20 bg-card p-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            🤓 Nerd Specs
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Alle technische details voor de {product.model}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {Object.entries(product.nerdSpecs).map(([key, value]) => (
              <div key={key} className="rounded-xl bg-secondary/50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {key}
                </dt>
                <dd className="mt-1 text-sm font-medium">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const InfoBlock = ({ label, value }: { label: string; value: string }) => (
  <div>
    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</dt>
    <dd className="mt-1 text-lg">{value}</dd>
  </div>
);

const QuickSpec = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between border-b border-border/50 pb-2">
    <dt className="text-sm text-muted-foreground">{label}</dt>
    <dd className="text-sm font-medium">{value}</dd>
  </div>
);

export default DevicePage;
