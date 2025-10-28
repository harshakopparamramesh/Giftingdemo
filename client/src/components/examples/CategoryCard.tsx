import CategoryCard from '../CategoryCard';
import categoryImage from '@assets/generated_images/Employee_appreciation_gift_set_6548d5da.png';

export default function CategoryCardExample() {
  return (
    <div className="max-w-md p-4">
      <CategoryCard
        title="Employee Appreciation"
        description="Show your team they're valued with thoughtfully curated gift sets"
        image={categoryImage}
        itemCount={24}
        onClick={() => console.log('Category clicked')}
      />
    </div>
  );
}
