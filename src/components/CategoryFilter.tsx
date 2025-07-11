
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/products';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  productCounts: Record<string, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
  productCounts
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-2 pb-2 min-w-max">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className="whitespace-nowrap gap-2 shrink-0"
          >
            {category}
            <Badge variant="secondary" className="ml-1">
              {productCounts[category] || 0}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  );
};
