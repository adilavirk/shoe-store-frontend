import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import product1 from "../../public/p1.png";
import product2 from "../../public/p2.png";
import product3 from "../../public/p3.png";
import product4 from "../../public/p4.png";
import product5 from "../../public/p5.png";
import product6 from "../../public/p6.png";
import product7 from "../../public/p7.png";

export const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

export const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

// footer data

export const footerServices = [
  { title: "Find a store" },
  { title: "become a partner" },
  { title: "sign up for email" },
  { title: "send us feedback" },
  { title: "student discount" },
];

export const footerFeatureSection = [
  { title: "Order Status" },
  { title: "Delivery" },
  { title: "Returns" },
  { title: "Payment Options" },
  { title: "Contact Us" },
];
export const aboutNike = [
  { title: "News" },
  { title: "Careers" },
  { title: "Investors" },
  { title: "Sustainability" },
];

export const footerIcons = [
  {
    icon: <FaFacebookF size={20} />,
  },
  {
    icon: <FaTwitter size={20} />,
  },
  {
    icon: <FaYoutube size={20} />,
  },
  {
    icon: <FaInstagram size={20} />,
  },
];

export const footerTermsAndGuides = [
  { title: "Guides" },
  { title: "Terms of Sale" },
  { title: "Terms of Use" },
  { title: "Privacy Policy" },
];

// productDetails images

export const images = [
  { image: product1 },
  { image: product2 },
  { image: product3 },
  { image: product4 },
  { image: product5 },
  { image: product6 },
  { image: product7 },
];
