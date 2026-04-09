import { useParams, Link } from "react-router-dom";
import { products } from "@/lib/products";
import { getWhatsAppOrderUrl, getWhatsAppEnquiryUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen bg-background">
        <p className="text-muted-foreground text-lg">Product not found.</p>
        <Link to="/shop" className="text-primary underline mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm mb-8">
          <ArrowLeft size={16} /> Back to Shop
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <div className="rounded-3xl overflow-hidden">
            <img src={product.image} alt={product.name} width={800} height={800} className="w-full aspect-square object-cover" />
          </div>
          <div className="space-y-6 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-medium w-fit">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">{product.name}</h1>
            <p className="text-muted-foreground font-body text-base leading-relaxed">{product.description}</p>
            <p className="font-display text-3xl font-bold text-primary">₹{product.price}</p>

            {product.customizable && (
              <div className="space-y-3 p-5 rounded-2xl bg-secondary/50 border border-border">
                <h3 className="font-display font-semibold text-foreground">Customize Your Gift</h3>
                <input
                  type="text"
                  placeholder="Enter name / text to print"
                  className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  type="text"
                  placeholder="Special message (optional)"
                  className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={getWhatsAppOrderUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center px-8 py-3.5 text-base flex-1"
              >
                <WhatsAppIcon size={20} />
                Order on WhatsApp
              </a>
              <a
                href={getWhatsAppEnquiryUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enquiry justify-center px-8 py-3.5 text-base flex-1"
              >
                <WhatsAppIcon size={20} />
                Enquiry on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
