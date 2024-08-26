import { Button, ButtonHighlight } from '../button';
import { Hero, HeroSubtitle, HeroTitle } from '../hero';
import { HeroImage } from '../heroImage';
import { ChevronRight } from '../icons/chevronRight';

export const HomePageHero = () => {
  return (
    <Hero>
      <Button
        className='translate-y-[-1rem] animate-fade-in opacity-0'
        href='/'
        variant='secondary'
        size='small'
      >
        Instructa Case Studies Coming Soon
        <ButtonHighlight className='-mr-2 ml-2'>→</ButtonHighlight>
      </Button>
      <div className='px-6 md:px-8'>
        <HeroTitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
          Instructa is a smarter way <br className='hidden md:block' /> to power your
          field operations
        </HeroTitle>
        <HeroSubtitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]'>
        Experience the future of field operations. Leverage Augmented Reality to create guided work instructions, {' '}
          <br className='hidden md:block' />
          automate tasks, add intelligence to workflows, and supercharge visual guides and SOPs.
        </HeroSubtitle>
      </div>
      <Button
        href='https://forms.gle/Ya6r6iTAcAd66cPQ7'
        variant='primary'
        size='large'
        className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]'
      >
        Contact us for a free 30 min consultation call <ChevronRight className='ml-2' />
      </Button>
      <HeroImage />
    </Hero>
  );
};
