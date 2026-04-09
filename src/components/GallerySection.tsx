import photoFrame from "@/assets/product-photo-frame.jpg";
import customMug from "@/assets/product-custom-mug.jpg";
import ledLamp from "@/assets/product-led-lamp.jpg";
import giftHamper from "@/assets/product-gift-hamper.jpg";
import coupleGift from "@/assets/product-couple-gift.jpg";
import musicBox from "@/assets/product-music-box.jpg";
import tshirt from "@/assets/product-tshirt.jpg";
import cushion from "@/assets/product-cushion.jpg";
import photoPrint from "@/assets/product-photo-print.jpg";
import waterBottle from "@/assets/product-water-bottle.jpg";
import corporate from "@/assets/product-corporate.jpg";
import nameGift from "@/assets/product-name-gift.jpg";

const images = [photoFrame, customMug, ledLamp, giftHamper, coupleGift, musicBox, tshirt, cushion, photoPrint, waterBottle, corporate, nameGift];

const GallerySection = () => (
  <section className="py-20 md:py-28 bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14 space-y-3">
        <span className="text-primary font-body text-sm font-semibold tracking-wider uppercase">Gallery</span>
        <h2 className="section-heading">Our Creations 📸</h2>
        <p className="section-subheading">Real products, real happiness</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl group"
            style={{ animation: `scaleIn 0.5s ease-out ${i * 0.06}s both` }}
          >
            <img
              src={img}
              alt={`Gallery image ${i + 1}`}
              loading="lazy"
              width={800}
              height={800}
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
