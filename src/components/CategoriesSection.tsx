import { categories } from "@/lib/products";
import { Link } from "react-router-dom";

const CategoriesSection = () => (
  <section className="py-20 md:py-28 bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14 space-y-3">
        <span className="text-primary font-body text-sm font-semibold tracking-wider uppercase">Browse</span>
        <h2 className="section-heading">Featured Categories</h2>
        <p className="section-subheading">Find the perfect personalized gift for every occasion</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat, i) => (
          <Link
            key={cat.name}
            to={`/shop?category=${encodeURIComponent(cat.name)}`}
            className="glass-card rounded-2xl p-6 md:p-8 text-center group hover:-translate-y-2 transition-all duration-500"
            style={{ animation: `fadeInUp 0.5s ease-out ${i * 0.08}s both` }}
          >
            <span className="text-4xl md:text-5xl block mb-3">{cat.icon}</span>
            <h3 className="font-display text-sm md:text-base font-semibold text-foreground">{cat.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{cat.count}+ items</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
