// external import
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../SessionName.css';


const SessionName = () => {

  const apiPath = import.meta.env.VITE_API;
  // console.log(swiper)

  function handleSubmit(e) {
    e.preventDefault();
    const activeSlide = document.querySelector('.swiper-slide-active');
    const activeImg = activeSlide.querySelector('img');
    const activeImgName = activeImg.name;
    console.log(activeImgName);
  }

  // <img src={`${apiPath}/aman_dream.png`} />
  // <img src={`${apiPath}/bman_dream.png`} />
  // <img src={`${apiPath}/bwimagine.png`} />
  // <img src={`${apiPath}/dream.png`} />
  // <img src={`${apiPath}/wboy_imagine.png`} />
  // <img src={`${apiPath}/wgirl_dream.png`} />
  // <img src={`${apiPath}/wman_imagine.png`} />
  // <img src={`${apiPath}/wwoman_imagine.png`} />;

  return (
    <div>
      <div>
        <Swiper
          spaceBetween={-5}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          // modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={`${apiPath}/aman_dream.png`} alt="aman_dream.png" name="aman_dream.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${apiPath}/bman_dream.png`} alt="bman_dream.png" name="bman_dream.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${apiPath}/bwimagine.png`} alt="bwimagine.png" name="bwimagine.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${apiPath}/dream.png`} alt="dream.png" name="dream.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${apiPath}/wboy_imagine.png`} alt="wboy_imagine.png" name="wboy_imagine.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${apiPath}/wgirl_dream.png`} alt="wgirl_dream.png" name="wgirl_dream.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${apiPath}/wman_imagine.png`} alt="wman_imagine.png" name="wman_imagine.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${apiPath}/wwoman_imagine.png`} alt="wwoman_imagine.png" name="wwoman_imagine.png" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div >
  );
};

export default SessionName;
