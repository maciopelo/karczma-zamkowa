import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { sections } from '@/constants';
import SliderItem from './SliderItem';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../app/swiper-custom.css';

export default function Slider() {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      speed={500}
      touchStartPreventDefault={false}
      simulateTouch={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        renderBullet: function (_, className) {
          return (
            '<div class="' + className + '"> <div><span></span></div> </div>'
          );
        },
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <SliderItem
          title="Poznaj naszą kartę - klasyki i autorskie kompozycje"
          subtitle="Od przystawek po dania główne - każdy znajdzie coś dla siebie. Gotujemy z pasją, serwujemy z sercem."
          image="/menu.jpg"
          imageAlt="Pasztet z zurawina i rukolą"
          buttonText="Menu"
          buttonLink={`/${sections.menu}`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem
          title="Zaplanuj z nami swój tydzień - codziennie coś pysznego!"
          subtitle="Od poniedziałku do piątku. Zestawy obiadowe, które zaskakują smakiem i świeżością"
          image="/rolada.jpg"
          imageAlt="Rolada śląska"
          buttonText="Dania dnia"
          buttonLink={`/${sections.dailyMeals}`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem
          title="Zorganizuj przyjęcie, które goście zapamietają."
          subtitle="Urodziny, komunie, firmowe spotkania - mamy przestrzeń, menu i doświadczenie by stworzyć wyjątkowe chwile"
          image="/sala.jpg"
          imageAlt="Sala kominkowa"
          buttonText="Oferta"
          buttonLink={`/${sections.offer}`}
        />
      </SwiperSlide>
    </Swiper>
  );
}
