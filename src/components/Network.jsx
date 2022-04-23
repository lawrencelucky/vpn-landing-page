import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Global from '../assets/images/global.svg';
import Netflix from '../assets/images/netflix.svg';
import Reddit from '../assets/images/reddit.svg';
import Discord from '../assets/images/discord.svg';
import Spotify from '../assets/images/spotify.svg';

const Network = () => {
  return (
    <div className='bg-other-grayBg'>
      <div className='section px-[2rem] py-[4rem] md:px-[15rem] md:py-[7rem]'>
        <h2 className='text-xl font-medium text-center mb-[2rem] text-primary-darkText'>
          Huge Global Network of Fast VPN
        </h2>
        <div className='flex justify-center mb-[4rem] md:mb-[10rem]'>
          <p className='text-center md:w-[50%]'>
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>
        </div>
        <img
          src={Global}
          alt='globe'
          className='max-w-[100rem] w-full'
          draggable='false'
        />
        <div className='mt-[7rem]'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            loopFillGroupWithBlank={true}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay]}
            className='mySwiper  flex justify-center md:justify-between items-center'
          >
            <SwiperSlide>
              <img
                src={Netflix}
                alt='netflix'
                className='h-[8rem]'
                draggable='false'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Reddit}
                alt='netflix'
                draggable='false'
                className='h-[8rem]'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Discord}
                alt='netflix'
                draggable='false'
                className='h-[8rem]'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Spotify}
                alt='netflix'
                draggable='false'
                className='h-[8rem]'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Network;
