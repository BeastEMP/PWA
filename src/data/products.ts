export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  inStock: boolean;
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    price: 89.99,
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics",
    image: "https://plus.unsplash.com/premium_photo-1679513691485-711d030f7e94?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.5, count: 120 },
    inStock: true,
    tags: ["wireless", "bluetooth", "headphones", "audio"]
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 199.99,
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1629339837617-7069ce9e7f6b?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.2, count: 89 },
    inStock: true,
    tags: ["smartwatch", "fitness", "health", "wearable"]
  },
  {
    id: 3,
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
    category: "Clothing",
    image: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.7, count: 234 },
    inStock: true,
    tags: ["organic", "cotton", "t-shirt", "sustainable"]
  },
  {
    id: 4,
    title: "Leather Backpack",
    price: 79.99,
    description: "Stylish leather backpack perfect for work or travel with multiple compartments.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.3, count: 67 },
    inStock: true,
    tags: ["leather", "backpack", "travel", "work"]
  },
  {
    id: 5,
    title: "Ceramic Coffee Mug Set",
    price: 24.99,
    description: "Set of 3 handcrafted ceramic mugs perfect for your morning coffee.",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1733046892137-3ebdc29e54c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.8, count: 156 },
    inStock: true,
    tags: ["ceramic", "mugs", "coffee", "kitchen"]
  },
  {
    id: 6,
    title: "Wireless Phone Charger",
    price: 39.99,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1617975316514-69cd7e16c2a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.1, count: 98 },
    inStock: false,
    tags: ["wireless", "charger", "phone", "fast-charging"]
  },
  {
    id: 7,
    title: "Running Shoes",
    price: 129.99,
    description: "Lightweight running shoes with superior cushioning and breathable mesh.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.6, count: 203 },
    inStock: true,
    tags: ["running", "shoes", "sports", "fitness"]
  },
  {
    id: 8,
    title: "Scented Candle Collection",
    price: 34.99,
    description: "Set of premium scented candles with relaxing fragrances.",
    category: "Home & Kitchen",
    image: "https://plus.unsplash.com/premium_photo-1736517208034-0383a26f855d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: { rate: 4.4, count: 78 },
    inStock: true,
    tags: ["candles", "scented", "relaxation", "home"]
  }
];

export const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Accessories",
  "Home & Kitchen",
  "Sports"
];
