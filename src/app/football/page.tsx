import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Football() {
  // Use the same background color as Home and Padel for consistency
  const bgColor = '#748a5f';

  return (
    <div className="min-h-screen bg-gray-100">
      <Header backgroundColor={bgColor} />
      <Hero
        backgroundColor={bgColor}
        title="Discover Football at Pafos Sports Center"
        description="Join our top-tier football facilities and vibrant community in the heart of Pafos."
        primaryButtonText="Book a Pitch"
        primaryButtonLink="/booking"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/football/about"
        imageSrc="/assets/logos/mwpMED-football.png" // Ensure this image exists in public/assets/logos/
        imageAlt="Pafos Sports Center Football Image"
        imageWidth={225}
        imageHeight={75}
      />
      <Footer backgroundColor={bgColor} />
    </div>
  );
}