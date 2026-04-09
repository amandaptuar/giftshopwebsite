import photoFrame from "@/assets/product-photo-frame.jpg";
import customMug from "@/assets/product-custom-mug.jpg";
import ledLamp from "@/assets/product-led-lamp.jpg";
import giftHamper from "@/assets/product-gift-hamper.jpg";
import coupleGift from "@/assets/product-couple-gift.jpg";
import musicBox from "@/assets/product-music-box.jpg";
import tshirt from "@/assets/product-tshirt.jpg";
import cushion from "@/assets/product-cushion.jpg";
import photoPrint from "@/assets/product-photo-print.jpg";
import nameGift from "@/assets/product-name-gift.jpg";
import waterBottle from "@/assets/product-water-bottle.jpg";
import corporate from "@/assets/product-corporate.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  customizable: boolean;
  bestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Personalized Photo Frame",
    description: "Beautiful wooden frame with custom engraving for your cherished memories.",
    price: 799,
    image: photoFrame,
    category: "Personalized Gifts",
    customizable: true,
    bestSeller: true,
  },
  {
    id: "2",
    name: "Custom Name Mug",
    description: "Premium ceramic mug with your name and a heartfelt message printed.",
    price: 499,
    image: customMug,
    category: "Mug Printing",
    customizable: true,
    bestSeller: true,
  },
  {
    id: "3",
    name: "Personalized Moon Lamp",
    description: "3D moon lamp with custom name engraving, warm & cool light modes.",
    price: 1299,
    image: ledLamp,
    category: "Personalized Gifts",
    customizable: true,
    bestSeller: true,
  },
  {
    id: "4",
    name: "Premium Gift Hamper",
    description: "Luxury curated hamper with chocolates, flowers & personalized touches.",
    price: 2499,
    image: giftHamper,
    category: "Personalized Gifts",
    customizable: true,
    bestSeller: true,
  },
  {
    id: "5",
    name: "Couple Keychain & Bracelet Set",
    description: "Matching gold-toned keychain & bracelet set with couple initials.",
    price: 699,
    image: coupleGift,
    category: "Gifts with Name",
    customizable: true,
  },
  {
    id: "6",
    name: "Engraved Music Box",
    description: "Handcrafted wooden music box with custom melody & engraving.",
    price: 1599,
    image: musicBox,
    category: "Personalized Gifts",
    customizable: true,
  },
  {
    id: "7",
    name: "Custom Printed T-Shirt",
    description: "Premium cotton t-shirt with your custom design, text, or photo printed.",
    price: 599,
    image: tshirt,
    category: "T-Shirt Printing",
    customizable: true,
    bestSeller: true,
  },
  {
    id: "8",
    name: "Photo Cushion Cover",
    description: "Soft satin cushion cover with your favourite photo & name printed.",
    price: 449,
    image: cushion,
    category: "Cushion Printing",
    customizable: true,
    bestSeller: true,
  },
  {
    id: "9",
    name: "Premium Photo Prints",
    description: "High-quality photo prints in multiple sizes with glossy or matte finish.",
    price: 199,
    image: photoPrint,
    category: "Photo Printing",
    customizable: true,
  },
  {
    id: "10",
    name: "Engraved Name Gift Set",
    description: "Elegant gift set with engraved keychain, pen & card holder with custom name.",
    price: 999,
    image: nameGift,
    category: "Gifts with Name",
    customizable: true,
  },
  {
    id: "11",
    name: "Personalized Water Bottle",
    description: "Stainless steel insulated bottle with custom name & motivational quote.",
    price: 699,
    image: waterBottle,
    category: "Water Bottle",
    customizable: true,
  },
  {
    id: "12",
    name: "Corporate Branding Gift Set",
    description: "Professional branded gift set with logo-printed diary, pen, mug & bag.",
    price: 1999,
    image: corporate,
    category: "Corporate Gifts",
    customizable: true,
  },
];

export const categories = [
  { name: "Personalized Gifts", icon: "🎁", count: 25 },
  { name: "T-Shirt Printing", icon: "👕", count: 15 },
  { name: "Mug Printing", icon: "☕", count: 18 },
  { name: "Cushion Printing", icon: "🛋️", count: 10 },
  { name: "Photo Printing", icon: "📸", count: 20 },
  { name: "Gifts with Name", icon: "✍️", count: 14 },
  { name: "Water Bottle", icon: "🧴", count: 8 },
  { name: "Corporate Gifts", icon: "💼", count: 12 },
];
