import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SportCarousel from '@/components/SportCarousel';

export default function Padel() {
  const bgColor = '#851535';

  return (
    <div className="min-h-screen bg-gray-100">
      <Header backgroundColor={bgColor} />
      <div className="hidden sm:block">
        <Hero
          backgroundColor={bgColor}
          title="Discover Padel at Pafos Sports Center"
          description="Experience world-class padel courts and a vibrant community in the heart of Pafos."
          primaryButtonText="Book a Court"
          primaryButtonLink="/booking"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/padel/about"
          imageSrc="/assets/logos/mwpMED-padel.png"
          imageAlt="Pafos Sports Center Padel Image"
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