import Hero from './Hero';

interface SportHeroProps {
  bgColor: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function SportHero({ bgColor, title, description, imageSrc, imageAlt }: SportHeroProps) {
  return (
    <Hero
      backgroundColor={bgColor}
      title={title}
      description={description}
      primaryButtonText="Book a Court"
      primaryButtonLink="/booking"
      secondaryButtonText="Learn More"
      secondaryButtonLink={`/${title.toLowerCase().replace('discover ', '')}/about`}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      imageWidth={225}
      imageHeight={75}
      showSwipeHint={true} // Enable swipe hint for sports pages
    />
  );
}