import ProductCard from '../ProductCard';
import productImage from '@assets/generated_images/Gourmet_gift_basket_9f76f878.png';

export default function ProductCardExample() {
  return (
    <div className="max-w-sm p-4">
      <ProductCard
        id="1"
        name="Gourmet Gift Basket"
        category="Premium"
        price="From $99"
        image={productImage}
        description="Artisanal foods, premium chocolates, specialty coffee, and fine wine elegantly presented."
        onView={(id) => console.log('View product', id)}
        onEnquire={(id) => console.log('Enquire about product', id)}
      />
    </div>
  );
}
