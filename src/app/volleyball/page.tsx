import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Volleyball() {
  // Use the same background color as Home, Padel, and Football for consistency
  const bgColor = '#851535';

  return (
    <div className="min-h-screen bg-gray-100">
      <Header backgroundColor={bgColor} />
      <Hero
        backgroundColor={bgColor}
        title="Discover Volleyball at Pafos Sports Center"
        description="Enjoy premier volleyball courts and a dynamic community in the heart of Pafos."
        primaryButtonText="Book a Court"
        primaryButtonLink="/booking"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/volleyball/about"
        imageSrc="/assets/logos/mwpMED-volleyball3.png" // Ensure this image exists in public/assets/logos/
        imageAlt="Pafos Sports Center Volleyball Image"
        imageWidth={225}
        imageHeight={75}
      />
      <Footer backgroundColor={bgColor} />
    </div>
  );
}