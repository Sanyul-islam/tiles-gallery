import { Bath, ChefHat, Home, Sofa, TreePine } from "lucide-react";
export const TilesData = async () => {
  const res = await fetch(
    "https://tiles-gallery-lilac-seven.vercel.app/data.json",
    {
      cache: "no-store",
    },
  );

  const tiles = await res.json();
  return tiles;
};

export const tileCategories = [
  {
    name: "Floor Tiles",
    description: "Durable designs for beautiful floors",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Wall Tiles",
    description: "Transform your walls with style",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bathroom",
    description: "Create a relaxing bathroom space",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kitchen",
    description: "Modern tiles for your kitchen",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Marble",
    description: "Elegant marble-inspired designs",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Decorative",
    description: "Add personality to your space",
    image:
      "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=800&q=80",
  },
];

export const tileStyles = [
  "Modern",
  "Minimalist",
  "Luxury",
  "Rustic",
  "Geometric",
  "Classic",
];


export const inspirations = [
  {
    title: "Modern Kitchen",
    description: "Create a clean and stylish kitchen with modern tile designs.",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&q=80",
    icon: ChefHat,
  },
  {
    title: "Luxury Bathroom",
    description: "Turn your bathroom into a relaxing and elegant space.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&q=80",
    icon: Bath,
  },
  {
    title: "Minimalist Living Room",
    description:
      "Discover simple tile designs for a calm and modern living space.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=80",
    icon: Sofa,
  },
  {
    title: "Elegant Interiors",
    description: "Explore timeless tile combinations for beautiful interiors.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80",
    icon: Home,
  },
  {
    title: "Outdoor Spaces",
    description: "Find durable and stylish tiles for patios and outdoor areas.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80",
    icon: TreePine,
  },
];