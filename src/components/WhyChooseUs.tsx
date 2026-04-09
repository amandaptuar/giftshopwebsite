import { Award, Truck, Palette, BadgeIndianRupee } from "lucide-react";

const features = [
  { icon: Award, title: "Premium Quality", desc: "Only the finest materials for lasting memories" },
  { icon: Truck, title: "Fast Delivery", desc: "Quick & reliable shipping across India" },
  { icon: Palette, title: "100% Customization", desc: "Every gift uniquely crafted to your vision" },
  { icon: BadgeIndianRupee, title: "Affordable Price", desc: "Luxury gifts without breaking the bank" },
];

const WhyChooseUs = () => (
  <section className="py-20 md:py-28 bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14 space-y-3">
        <span className="text-primary font-body text-sm font-semibold tracking-wider uppercase">Why Us</span>
        <h2 className="section-heading">Why Choose Us ✨</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="glass-card rounded-2xl p-8 text-center group hover:-translate-y-2 transition-all duration-500"
            style={{ animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both` }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <f.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
