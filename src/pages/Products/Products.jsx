import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Products = () => {
    const loadedProduct = useLoaderData();
    return (
        <div className="py-20">
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
                        <div className=" bg-slate-800">
                            <img src="https://i.ibb.co/mb5cjzp/slider1.jpg" alt="" className='h-[500px] w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative bg-slate-800">

                            <img src="https://i.ibb.co/G90XWfR/slider2.jpg" alt="" className='h-[500px] w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative bg-slate-800">

                            <img src="https://i.ibb.co/5LztD3f/slider3.jpg" alt="" className='h-[500px] w-full' />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 py-20 p-5">
                {
                    loadedProduct.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;