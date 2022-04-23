import PricingCard from './PricingCard';

import Check from '../assets/images/check.svg';

const Pricing = () => {
  return (
    <div className='bg-other-grayBg'>
      <div className='section px-[2rem] py-[4rem] md:px-[15rem] md:py-[7rem]'>
        <h2 className='text-lg md:text-xl font-medium mb-[2rem] text-center text-primary-darkText'>
          Choose Your Plan
        </h2>
        <div className='flex justify-center'>
          <p className='text-center md:w-[50%] mb-[4rem] md:mb-[6rem]'>
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div className='flex flex-wrap justify-center lg:justify-between'>
          <PricingCard plan='Free'>
            <div className='flex items-center mb-[1rem]'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Unlimited Bandwitch</p>
            </div>
            <div className='flex items-center mb-[1rem]'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Encrypted Connection</p>
            </div>
            <div className='flex items-center mb-[1rem]'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>No Traffic Logs</p>
            </div>
            <div className='flex items-center mb-[1rem]'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Works on All Devices</p>
            </div>
          </PricingCard>
          <PricingCard plan='Standard' price='9'>
            <div className='flex items-center mb-[1rem]'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Unlimited Bandwitch</p>
            </div>
            <div className='flex items-center mb-[1rem]'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Encrypted Connection</p>
            </div>
            <div className='flex items-center mb-[1rem]'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Yes Traffic Logs</p>
            </div>
            <div className='flex items-center mb-[1rem]'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Works on All Devices</p>
            </div>
            <div className='flex items-center'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Connect Anyware</p>
            </div>
          </PricingCard>
          <PricingCard plan='Premium' price='12'>
            <div className='flex items-center mb-[1rem]'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Unlimited Bandwitch</p>
            </div>
            <div className='flex items-center mb-[1rem]'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Encrypted Connection</p>
            </div>
            <div className='flex items-center mb-[1rem]'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Yes Traffic Logs</p>
            </div>
            <div className='flex items-center mb-[1rem]'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Works on All Devices</p>
            </div>
            <div className='flex items-center mb-[1rem]'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Connect Anyware</p>
            </div>
            <div className='flex items-center'>
              <img
                src={Check}
                alt='check'
                className='w-[2.4rem] no-highlight'
              />
              <p className='text-sm ml-[2rem]'>Get New Features</p>
            </div>
          </PricingCard>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
