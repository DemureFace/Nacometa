<template>
  <div class="slider">
    <swiper
      ref="swiper"
      :slidesPerView="perView"
      :spaceBetween="30"
      :freeMode="true"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="swiper"
    >
      <swiper-slide v-for="(slide, i) in slides" :key="i" class="swiper__slide">
        <h6 v-if="slide.title" class="swiper__cardTitle">
          {{ slide.title }}
        </h6>

        <p v-if="slide.description" class="swiper__cardDescription">
          {{ slide.description }}
        </p>

        <div v-if="slide.text" class="swiper__cards-icon">
          <img src="@/assets/img/png/max.png" alt="Max" class="swiper__img" />
          <span class="swiper__cardText">{{ slide.text }}</span>
        </div>

        <iframe
          v-if="slide.iframe"
          :src="slide.iframe"
          class="frames__video"
        ></iframe>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
    <div @click="changeSlide()" class="slider__button-prev">
      <img src="@/assets/img/svg/slider/arrow.svg" alt="arrow" />
    </div>
    <div @click="changeSlide('Next')" class="slider__button-next">
      <img src="@/assets/img/svg/slider/arrow.svg" alt="arrow" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

export default {
  name: "BaseSlider",

  props: {
    slides: {
      type: Array,
      default: () => [],
    },
    perView: {
      type: Number,
      default: 3,
    },
  },

  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },

  computed: {
    swiper() {
      const swiper = this.$refs.swiper.$el.swiper;
      console.log(swiper);
      return swiper;
    },
  },

  methods: {
    changeSlide(direction) {
      if (direction === "Next") {
        this.swiper.slideNext();
      } else {
        this.swiper.slidePrev();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  &__slide {
  }
  &__cardTitle {
    font: 700 24px/32px $fontBold;
    margin-bottom: 15px;
  }
  &__cardDescription {
    font: 400 16px/24px $fontRegular;
    margin-bottom: 15px;
  }
  &__cards-icon {
    display: flex;
    align-items: center;
    gap: 22px;
  }
  &__img {
  }
  &__cardText {
    font: 400 16px/24px $fontRegular;
  }

  &__button-prev {
    z-index: 10;
    left: -60px;
    top: 40%;
    width: 48px;
    height: 48px;
    position: absolute;
  }
  &__button-next {
    z-index: 1;
    top: 40%;
    right: -60px;
    width: 48px;
    height: 48px;
    position: absolute;
    transform: rotate(180deg);
  }
}
</style>
