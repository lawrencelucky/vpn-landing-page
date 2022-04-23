import UserIcon from '../assets/images/user.svg';
import LocationIcon from '../assets/images/location.svg';
import ServerIcon from '../assets/images/server.svg';

const Info = () => {
  return (
    <div className='section md:mb-[4rem] mx-[2rem] md:mx-[15rem] flex sm:flex-row flex-wrap justify-center items-center sm:justify-between sm:px-[5rem] py-[4rem] md:px-[9rem] md:py-[7rem] sm:shadow-md-dark rounded'>
      <div className='flex items-center flex-1 mb-[4rem] sm:mb-0'>
        <div className='w-[5rem] h-[5rem] grid place-items-center rounded-full bg-other-lightRed'>
          <img src={UserIcon} alt='user' className='w-[2.4rem]' />
        </div>
        <div className='ml-[4rem]'>
          <h3 className='font-bold text-lg mb-[5px] text-primary-darkText'>
            90+
          </h3>
          <p>Users</p>
        </div>
      </div>
      <div className='flex items-center flex-1 mb-[4rem] sm:mb-0'>
        <div className='w-[5rem] h-[5rem] grid place-items-center rounded-full bg-other-lightRed'>
          <img src={LocationIcon} alt='user' className='w-[2.4rem]' />
        </div>
        <div className='ml-[4rem]'>
          <h3 className='font-bold text-lg mb-[5px] text-primary-darkText'>
            30+
          </h3>
          <p>Locations</p>
        </div>
      </div>
      <div className='flex items-center flex-none mb-[4rem] sm:mb-0'>
        <div className='w-[5rem] h-[5rem] grid place-items-center rounded-full bg-other-lightRed'>
          <img src={ServerIcon} alt='user' className='w-[2.4rem]' />
        </div>
        <div className='ml-[4rem]'>
          <h3 className='font-bold text-lg mb-[5px] text-primary-darkText'>
            50+
          </h3>
          <p>Servers</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
