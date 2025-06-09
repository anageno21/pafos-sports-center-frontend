import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Basketball() {
  // Use the same background color as other pages for consistency
  const bgColor = '#851535';

  return (
    <div className="min-h-screen bg-gray-100">
      <Header backgroundColor={bgColor} />
      <Hero
        backgroundColor={bgColor}
        title="Discover Basketball at Pafos Sports Center"
        description="Experience top-notch basketball courts and a vibrant community in the heart of Pafos."
        primaryButtonText="Book a Court"
        primaryButtonLink="/booking"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/basketball/about"
        imageSrc="/assets/logos/mwpMED-basketball3.png" // Ensure this image exists in public/assets/logos/
        imageAlt="Pafos Sports Center Basketball Image"
        imageWidth={225}
        imageHeight={75}
      />
      <Footer backgroundColor={bgColor} />
    </div>
  );
}