import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  // Define the background color (light blue)
  const bgColor = '#851535';

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Pass bgColor to Header */}
      <Header backgroundColor={bgColor} />
      {/* Pass bgColor to Hero + other props */}
      <Hero
        backgroundColor={bgColor}
        title="Welcome to Pafos Sports Center"
        description="Join us for sports, fun, and community in the heart of Pafos!"
        primaryButtonText="Sign Up"
        primaryButtonLink="/signup"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
        imageSrc="/assets/logos/mwpMED-2xl.png" // Ensure this image exists in public/assets/logos/
        imageAlt="Pafos Sports Center Hero Image"
        imageWidth={225}
        imageHeight={75}
      />
      {/* Pass bgColor to Footer */}
      <Footer backgroundColor={bgColor} />
    </div>
  );
}