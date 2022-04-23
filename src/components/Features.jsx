import FeaturesIllustration from '../assets/images/features-illustration.svg';
import CheckMark from '../assets/images/check-mark.svg';

const Features = () => {
  return (
    <div className='section px-[2rem] pb-[4rem] md:px-[15rem] md:py-[7rem] flex flex-col md:flex-row md:justify-between'>
      <div className='flex-1 flex justify-center md:mr-[18rem] mb-[4rem] md:mb-0'>
        <div className='max-w-[50rem]'>
          <img
            src={FeaturesIllustration}
            alt='illustration'
            className='w-full no-highlight'
          />
        </div>
      </div>
      <div className='flex-1'>
        <h2 className='text-lg sm:text-xl font-medium mb-[2rem] text-primary-darkText text-center sm:text-left'>
          We Provide Many Features You Can Use
        </h2>
        <p className='mb-[2rem]'>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul>
          <li className='flex items-center mb-[1.6rem]'>
            <img
              src={CheckMark}
              alt='check-icon'
              className='w-[2.4rem] no-highlight'
            />
            <span className='text-sm ml-[1rem]'>
              Powerful online protection.
            </span>
          </li>
          <li className='flex items-center mb-[1.6rem]'>
            <img
              src={CheckMark}
              alt='check-icon'
              className='w-[2.4rem] no-highlight'
            />
            <span className='text-sm ml-[1rem]'>Internet without borders.</span>
          </li>
          <li className='flex items-center mb-[1.6rem] '>
            <img
              src={CheckMark}
              alt='check-icon'
              className='w-[2.4rem] no-highlight'
            />
            <span className='text-sm ml-[1rem]'>Supercharged VPN</span>
          </li>
          <li className='flex items-center'>
            <img
              src={CheckMark}
              alt='check-icon'
              className='w-[2.4rem] no-highlight'
            />
            <span className='text-sm ml-[1rem]'>No specific time limits.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
