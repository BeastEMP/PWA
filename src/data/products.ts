
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
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    rating: { rate: 4.3, count: 67 },
    inStock: true,
    tags: ["leather", "backpack", "travel", "work"]
  },
  {
    id: 5,
    title: "Ceramic Coffee Mug Set",
    price: 24.99,
    description: "Set of 4 handcrafted ceramic mugs perfect for your morning coffee.",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1609592917795-4b8c8495e05c?w=300&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    rating: { rate: 4.6, count: 203 },
    inStock: true,
    tags: ["running", "shoes", "sports", "fitness"]
  },
  {
    id: 8,
    title: "Scented Candle Collection",
    price: 34.99,
    description: "Set of 3 premium scented candles with relaxing fragrances.",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1602874801006-24c8ac5f8b7b?w=300&h=300&fit=crop",
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
