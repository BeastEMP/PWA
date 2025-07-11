
import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ProductDetail } from '@/components/ProductDetail';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { products, categories, Product } from '@/data/products';
import { registerServiceWorker, requestNotificationPermission, showInstallPrompt } from '@/utils/pwa';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [notificationPermission, setNotificationPermission] = useState(false);

  useEffect(() => {
    // Initialize PWA features
    registerServiceWorker();
    showInstallPrompt();
    
    // Check notification permission
    if ('Notification' in window) {
      setNotificationPermission(Notification.permission === 'granted');
    }
  }, []);

  const handleNotificationClick = async () => {
    if (!notificationPermission) {
      const granted = await requestNotificationPermission();
      setNotificationPermission(granted);
      
      if (granted) {
        toast({
          title: "Notifications Enabled",
          description: "You'll now receive updates about sales and offers!"
        });
        
        // Send a test notification
        new Notification('Welcome to SwiftShop!', {
          body: 'You\'ll now receive notifications about amazing deals and offers.',
          icon: '/icons/icon-192x192.png'
        });
      }
    } else {
      // Send a sample notification
      new Notification('SwiftShop Sale Alert!', {
        body: 'Check out our amazing deals - Up to 50% off on electronics!',
        icon: '/icons/icon-192x192.png'
      });
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getProductCounts = () => {
    const counts: Record<string, number> = {};
    categories.forEach(category => {
      if (category === 'All') {
        counts[category] = products.length;
      } else {
        counts[category] = products.filter(p => p.category === category).length;
      }
    });
    return counts;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNotificationClick={handleNotificationClick}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to SwiftShop
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover amazing products with our Progressive Web App. Shop online and offline with seamless experience.
          </p>
          
          {!notificationPermission && (
            <Button
              onClick={handleNotificationClick}
              className="mb-8 gap-2"
              variant="outline"
            >
              <Bell className="h-4 w-4" />
              Enable Notifications for Deals
            </Button>
          )}
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            productCounts={getProductCounts()}
          />
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Found {filteredProducts.length} results for "{searchQuery}"
            </p>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={setSelectedProduct}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* PWA Features Info */}
        <div className="mt-16 p-8 bg-card/50 backdrop-blur-sm rounded-lg border">
          <h2 className="text-2xl font-bold mb-4 text-center">PWA Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold mb-2">🔄 Offline Support</h3>
              <p className="text-sm text-muted-foreground">
                Browse products even when you're offline
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🔔 Push Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Get notified about sales and offers
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📱 Install as App</h3>
              <p className="text-sm text-muted-foreground">
                Add to your home screen for app-like experience
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
