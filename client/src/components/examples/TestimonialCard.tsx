import TestimonialCard from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <div className="max-w-md p-4">
      <TestimonialCard
        name="Sarah Johnson"
        company="Tech Solutions Inc"
        role="HR Director"
        content="GiftCorp has been our go-to partner for corporate gifting for 3 years. Their attention to detail and quality of products is unmatched. Our employees love the customized gift sets!"
        rating={5}
      />
    </div>
  );
}
