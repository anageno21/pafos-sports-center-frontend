import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Pickleball() {
  // Use the same background color as other pages for consistency
  const bgColor = '#851535';

  return (
    <div className="min-h-screen bg-gray-100">
      <Header backgroundColor={bgColor} />
      <Hero
        backgroundColor={bgColor}
        title="Discover Pickleball at Pafos Sports Center"
        description="Experience the excitement of pickleball with our state-of-the-art facilities in Pafos."
        primaryButtonText="Book a Court"
        primaryButtonLink="/booking"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/pickleball/about"
        imageSrc="/assets/logos/mwpMED-pickleball.png" // Ensure this image exists in public/assets/logos/
        imageAlt="Pafos Sports Center Pickleball Image"
        imageWidth={225}
        imageHeight={75}
      />
      <Footer backgroundColor={bgColor} />
    </div>
  );
}