import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SportCarousel from '@/components/SportCarousel';

export default function Pickleball() {
  const bgColor = '#851535';

  return (
    <div className="min-h-screen bg-gray-100">
      <Header backgroundColor={bgColor} />
      <div className="hidden sm:block">
        <Hero
          backgroundColor={bgColor}
          title="Discover Pickleball at Pafos Sports Center"
          description="Experience the excitement of pickleball with our state-of-the-art facilities in Pafos."
          primaryButtonText="Book a Court"
          primaryButtonLink="/booking"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/pickleball/about"
          imageSrc="/assets/logos/mwpMED-pickleball3.png"
          imageAlt="Pafos Sports Center Pickleball Image"
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