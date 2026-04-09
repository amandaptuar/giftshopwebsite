import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya S.", rating: 5, text: "The personalized photo frame was absolutely beautiful! My husband loved it. Best anniversary gift ever!", avatar: "PS" },
  { name: "Rahul M.", rating: 5, text: "Ordered a custom moon lamp for my girlfriend. The quality exceeded expectations. Will order again!", avatar: "RM" },
  { name: "Ananya K.", rating: 5, text: "The gift hamper was so well curated. Every item felt premium and the personalization was perfect.", avatar: "AK" },
  { name: "Vikram T.", rating: 4, text: "Great couple gifts! The keychain set was exactly what I wanted. Fast delivery too!", avatar: "VT" },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14 space-y-3">
        <span className="text-primary font-body text-sm font-semibold tracking-wider uppercase">Reviews</span>
        <h2 className="section-heading">What Our Customers Say 💬</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="glass-card rounded-2xl p-6 space-y-4"
            style={{ animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both` }}
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={16} className={j < t.rating ? "fill-accent text-accent" : "text-border"} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm">
                {t.avatar}
              </div>
              <span className="font-body font-semibold text-sm text-foreground">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
