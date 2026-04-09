const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export const getWhatsAppOrderUrl = (productName: string) => {
  const message = encodeURIComponent(
    `Hi, I want to order ${productName}. Please guide me.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const getWhatsAppEnquiryUrl = (productName: string) => {
  const message = encodeURIComponent(
    `Hi, I have a question about ${productName}. Please provide details.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const getWhatsAppGeneralUrl = () => {
  const message = encodeURIComponent("Hi, I'm interested in your personalized gifts!");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
