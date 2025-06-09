import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SportCarousel from '@/components/SportCarousel';

export default function Football() {
  const bgColor = '#851535';

  return (
    <div className="min-h-screen bg-gray-100">
      <Header backgroundColor={bgColor} />
      <div className="hidden sm:block">
        <Hero
          backgroundColor={bgColor}
          title="Discover Football at Pafos Sports Center"
          description="Join our top-tier football facilities and vibrant community in the heart of Pafos."
          primaryButtonText="Book a Pitch"
          primaryButtonLink="/booking"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/football/about"
          imageSrc="/assets/logos/mwpMED-football3.png"
          imageAlt="Pafos Sports Center Football Image"
          imageWidth={225}
          imageHeight={75}
        />
      </div>
      <div className="sm:hidden">
        <SportCarousel />
      </div>
      <Footer backgroundColor={bgColor} />
    </div>
  );
}