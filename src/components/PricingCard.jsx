import PricingIllustration from '../assets/images/pricing-illustration.svg';

const PricingCard = ({ plan, children, price }) => {
  return (
    <div className='bg-other-white border border-other-line rounded p-[3rem] md:px-[6rem] md:py-[4rem] max-w-[33rem] w-full flex flex-col justify-between mb-[3rem] sm:mr-[3rem] lg:mr-0 lg:mb-0 lg:hover:scale-105 ease-in-out duration-500 cursor-pointer lg:hover:border-primary-red lg:hover:shadow-lg-dark'>
      <div className='flex flex-col items-center'>
        <div className='max-w-[14rem]'>
          <img src={PricingIllustration} alt='pricing' className='w-full' />
        </div>
        <p className='font-bold my-[3rem] text-center text-primary-darkText'>
          {plan} Plan
        </p>
        <div>{children}</div>
      </div>

      <div className='flex flex-col items-center mt-[5rem]'>
        <h3 className='text-lg text-primary-darkText mb-[2rem]'>
          {plan === 'Free' ? 'Free' : `$${price}`}
          {plan !== 'Free' && (
            <span className='text-primary-lightText'>/mo</span>
          )}
        </h3>
        <button className='btn-outline w-full'>Select</button>
      </div>
    </div>
  );
};

export default PricingCard;
