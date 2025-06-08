import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Test() {
  // Use the same background color as other pages for consistency
  const bgColor = '#6cafd9';

  return (
    <div className="min-h-screen bg-gray-100">
      <Header backgroundColor={bgColor} />
      <Hero
        backgroundColor={bgColor}
        title="My Pickleball" // Title will be styled as "My Pickleball" in two lines
        description="Experience the excitement of pickleball with our state-of-the-art facilities in Pafos."
        primaryButtonText="Join Now"
        primaryButtonLink="/signup"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/test/about"
      />
      <Footer backgroundColor={bgColor} />
    </div>
  );
}