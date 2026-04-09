import ProductCard from "./ProductCard";
import { products } from "@/lib/products";
import { Link } from "react-router-dom";

const BestSellersSection = () => {
  const bestSellers = products.filter((p) => p.bestSeller);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-3">
          <span className="text-primary font-body text-sm font-semibold tracking-wider uppercase">Most Loved</span>
          <h2 className="section-heading">Best Sellers 🔥</h2>
          <p className="section-subheading">Our customers' most loved personalized gifts</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {bestSellers.map((product, i) => (
            <div key={product.id} style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
