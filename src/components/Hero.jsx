import HeroIlustration from '../assets/images/hero-illustration.svg';

const Hero = () => {
  return (
    <div className='section py-[4rem] px-[2rem] md:px-[15rem] md:py-[7rem] flex flex-col lg:flex-row justify-beteween items-center'>
      <div className='flex-1'>
        <h1 className='text-xl md:text-2xl text-primary-darkText mb-[2rem] text-center lg:text-left'>
          Want anything to be easy with{' '}
          <span className='font-bold'>LaslesVPN</span>
        </h1>
        <div className='flex justify-center w-full'>
          <p className='mb-[5rem] text-center lg:text-left w-[70%] lg:w-full'>
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
        </div>
        <button className='btn w-[25rem] hidden lg:block'>Get Started</button>
      </div>

      <div className='flex-1'>
        <div className='max-w-[60rem]'>
          <img
            src={HeroIlustration}
            alt='illustration'
            className='w-full no-highlight'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
