import { Link } from "react-router-dom";
import { brands } from "@/data/products";

const BrandsPage = () => (
  <div className="container py-16">
    <h1 className="text-4xl font-bold">Kies een merk</h1>
    <p className="mt-2 text-muted-foreground">Selecteer een merk om de producten te bekijken.</p>
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {brands.map((brand) => (
        <Link
          key={brand.slug}
          to={`/apparaten/${brand.slug}`}
          className="group flex flex-col items-center rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
        >
          <span className="text-6xl transition-transform group-hover:scale-110">{brand.icon}</span>
          <span className="mt-4 text-xl font-bold">{brand.name}</span>
          <span className="mt-1 text-sm text-muted-foreground">
            {brand.categories.length} {brand.categories.length === 1 ? "categorie" : "categorieën"}
          </span>
        </Link>
      ))}
    </div>
  </div>
);

export default BrandsPage;
