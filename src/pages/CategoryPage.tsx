import { Link, useParams, Navigate } from "react-router-dom";
import { brands, type Tier } from "@/data/products";

const tierLabels: Record<Tier, { label: string; desc: string }> = {
  low: { label: "Low", desc: "Budget / Basis" },
  mid: { label: "Mid", desc: "All-round / Studenten" },
  high: { label: "High", desc: "Power users / Professionals" },
};

const tierColors: Record<Tier, string> = {
  low: "border-tier-low hover:bg-tier-low/10",
  mid: "border-tier-mid hover:bg-tier-mid/10",
  high: "border-tier-high hover:bg-tier-high/10",
};

const CategoryPage = () => {
  const { brandSlug, categorySlug } = useParams();
  const brand = brands.find((b) => b.slug === brandSlug);
  const category = brand?.categories.find((c) => c.slug === categorySlug);

  if (!brand || !category) return <Navigate to="/apparaten" replace />;

  return (
    <div className="container py-16">
      <Link to={`/apparaten/${brand.slug}`} className="text-sm text-muted-foreground hover:text-foreground">
        ← {brand.name}
      </Link>
      <h1 className="mt-6 text-4xl font-bold">{brand.name} {category.name}</h1>
      <p className="mt-2 text-muted-foreground">Kies een tier op basis van je budget en behoeften.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {(["low", "mid", "high"] as const).map((tier) => {
          const product = category.products.find((p) => p.tier === tier);
          if (!product) return null;
          const { label, desc } = tierLabels[tier];

          return (
            <Link
              key={tier}
              to={`/apparaten/${brand.slug}/${category.slug}/${tier}`}
              className={`group rounded-2xl border-2 bg-card p-8 transition-all hover:shadow-xl hover:-translate-y-1 ${tierColors[tier]}`}
            >
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                tier === "low" ? "bg-tier-low/15 text-tier-low" :
                tier === "mid" ? "bg-tier-mid/15 text-tier-mid" :
                "bg-tier-high/15 text-tier-high"
              }`}>
                {label}
              </span>
              <h2 className="mt-4 text-xl font-bold">{product.model}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              <p className="mt-4 text-sm">{product.specs}</p>
              <p className="mt-2 text-xs text-muted-foreground">Voor: {product.targetAudience}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
