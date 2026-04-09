import { Product } from "@/lib/products";
import { getWhatsAppOrderUrl, getWhatsAppEnquiryUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  showButtons?: boolean;
}

const ProductCard = ({ product, showButtons = true }: ProductCardProps) => (
  <div className="product-card group">
    <Link to={`/product/${product.id}`} className="block overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={800}
        height={800}
        className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </Link>
    <div className="p-4 md:p-5 space-y-3">
      <Link to={`/product/${product.id}`}>
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
      </Link>
      <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      <p className="font-display text-xl font-bold text-primary">₹{product.price}</p>
      {showButtons && (
        <div className="flex flex-col sm:flex-row gap-2 pt-1">
          <a
            href={getWhatsAppOrderUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp justify-center text-xs flex-1"
          >
            <WhatsAppIcon size={16} />
            Order on WhatsApp
          </a>
          <a
            href={getWhatsAppEnquiryUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enquiry justify-center text-xs flex-1"
          >
            <WhatsAppIcon size={16} />
            Enquiry
          </a>
        </div>
      )}
    </div>
  </div>
);

export default ProductCard;
