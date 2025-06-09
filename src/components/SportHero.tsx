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
    <div>
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
      />
      <p className="text-xs text-white text-center mt-2 sm:hidden">Swipe to the next sport</p>
    </div>
  );
}