import { Link, useParams, Navigate } from "react-router-dom";
import { brands } from "@/data/products";

const BrandPage = () => {
  const { brandSlug } = useParams();
  const brand = brands.find((b) => b.slug === brandSlug);

  if (!brand) return <Navigate to="/apparaten" replace />;

  return (
    <div className="container py-16">
      <Link to="/apparaten" className="text-sm text-muted-foreground hover:text-foreground">
        ← Alle merken
      </Link>
      <div className="mt-6 flex items-center gap-4">
        <span className="text-5xl">{brand.icon}</span>
        <h1 className="text-4xl font-bold">{brand.name}</h1>
      </div>
      <p className="mt-2 text-muted-foreground">Kies een productcategorie.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {brand.categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/apparaten/${brand.slug}/${cat.slug}`}
            className="group rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold">{cat.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {cat.products.length} modellen beschikbaar
            </p>
            <div className="mt-4 flex gap-2">
              {(["low", "mid", "high"] as const).map((tier) => (
                <span
                  key={tier}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    tier === "low" ? "bg-tier-low/15 text-tier-low" :
                    tier === "mid" ? "bg-tier-mid/15 text-tier-mid" :
                    "bg-tier-high/15 text-tier-high"
                  }`}
                >
                  {tier.charAt(0).toUpperCase() + tier.slice(1)}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
