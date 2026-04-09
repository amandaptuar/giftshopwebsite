import ProductCard from "./ProductCard";
import { products } from "@/lib/products";

const PersonalizedSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14 space-y-3">
        <span className="text-primary font-body text-sm font-semibold tracking-wider uppercase">Our Specials</span>
        <h2 className="section-heading">Personalized Gifts 🎁</h2>
        <p className="section-subheading">
          Each gift is uniquely crafted and customized just for you. Order directly via WhatsApp!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product, i) => (
          <div key={product.id} style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PersonalizedSection;
