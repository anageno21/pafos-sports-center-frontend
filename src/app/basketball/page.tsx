import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SportCarousel from '@/components/SportCarousel';

export default function Basketball() {
  const bgColor = '#851535';

  return (
    <div className="min-h-screen bg-gray-100">
      <Header backgroundColor={bgColor} />
      <div className="hidden sm:block">
        <Hero
          backgroundColor={bgColor}
          title="Discover Basketball at Pafos Sports Center"
          description="Experience top-notch basketball courts and a vibrant community in the heart of Pafos."
          primaryButtonText="Book a Court"
          primaryButtonLink="/booking"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/basketball/about"
          imageSrc="/assets/logos/mwpMED-basketball3.png"
          imageAlt="Pafos Sports Center Basketball Image"
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