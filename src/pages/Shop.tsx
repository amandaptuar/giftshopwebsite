import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = !categoryFilter || p.category === categoryFilter;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 space-y-3">
          <h1 className="section-heading">Shop All Gifts 🛍️</h1>
          <p className="section-subheading">Browse our collection of personalized gifts</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-center">
          <input
            type="text"
            placeholder="Search gifts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 px-5 py-3 rounded-full bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <div className="flex flex-wrap gap-2 justify-center">
            <a
              href="/shop"
              className={`px-4 py-2 rounded-full text-xs font-body font-medium transition-colors ${
                !categoryFilter ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </a>
            {categories.map((c) => (
              <a
                key={c.name}
                href={`/shop?category=${encodeURIComponent(c.name)}`}
                className={`px-4 py-2 rounded-full text-xs font-body font-medium transition-colors ${
                  categoryFilter === c.name
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.icon} {c.name}
              </a>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No gifts found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
