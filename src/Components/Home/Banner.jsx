// Import Swiper React components
import image from '../../assets/images/b1.jpg'
import image1 from '../../assets/images/b2.jpg'
import image2 from '../../assets/images/b3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div className='my-10 '>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div
      className='w-full bg-center bg-cover h-[45rem] rounded-2xl'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg bg-gray-900/40 rounded-2xl'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
          Flourishing Flavors, Biting Bliss!
          </h1>
          <br />
          <Link
            to='/add-job'
          >
            <button className="btn btn-wide bg-[#FAF4E4] ">All Foods</button>
          </Link>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide><div
      className='w-full bg-center bg-cover h-[45rem] rounded-2xl '
      style={{
        backgroundImage: `url(${image1})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/40 rounded-2xl'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
          Flourishing Flavors, Biting Bliss!
          </h1>
          <br />
          <Link
            to='/add-job'
          >
            <button className="btn btn-wide bg-[#FAF4E4]  ">All Foods</button>
          </Link>
        </div>
      </div>
    </div></SwiperSlide>
        <SwiperSlide><div
      className='w-full bg-center bg-cover h-[45rem] rounded-2xl'
      style={{
        backgroundImage: `url(${image2})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/40 rounded-2xl'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
          Flourishing Flavors, Biting Bliss!
          </h1>
          <br />
          <Link
            to='/add-job'
          >
            <button className="btn btn-wide bg-[#FAF4E4] ">All Foods</button>
          </Link>
        </div>
      </div>
    </div></SwiperSlide>
      </Swiper>
    </div>

  );
};

export default Banner;
