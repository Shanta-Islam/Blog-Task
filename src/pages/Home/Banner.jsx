import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="relative bg-slate-800">
                        <img src="https://i.ibb.co/wwHZmtf/slider-img-1.png" alt="" className='h-[700px] w-full' />
                        <div className='absolute top-[40%] left-[40%] translate-x-[-50%] translate-y-[-50%]'>
                            <h2 className='text-white bg-black px-5 py-2 text-center'>Products are made in a factory but brands are created in the mind. Brand Made With Love</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative bg-slate-800">
                        <img src="https://i.ibb.co/C1Qddns/img.jpg" alt="" className='h-[700px] w-full' />
                        <div className='absolute top-[40%] left-[40%]'>
                            <h2 className='text-white bg-black px-5 py-2 text-center '>Products are made in a factory but brands are created in the mind.</h2>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;