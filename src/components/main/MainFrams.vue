<template>
  <div class="mainFrames">
    <BaseSlider :slides="iframes" :perView="4" class="mainFrames__swiper" />
  </div>
</template>

<script>
import BaseSlider from "@/components/base/BaseSlider.vue";
export default {
  name: "MainFrames",

  components: { BaseSlider },

  data() {
    return {
      iframes: [
        {
          iframe: "https://www.youtube.com/embed/sohdv21BVNI",
        },
        {
          iframe: "https://www.youtube.com/embed/sohdv21BVNI",
        },
        {
          iframe: "https://www.youtube.com/embed/sohdv21BVNI",
        },
        {
          iframe: "https://www.youtube.com/embed/sohdv21BVNI",
        },
        {
          iframe: "https://www.youtube.com/embed/sohdv21BVNI",
        },
        {
          iframe: "https://www.youtube.com/embed/sohdv21BVNI",
        },
        {
          iframe: "https://www.youtube.com/embed/sohdv21BVNI",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.mainFrames {
  margin: 60px 140px;

  &__swiper {
    &::v-deep .swiper {
      .swiper-pagination {
        display: none;
      }
      .frames__video {
        width: 250px;
        height: 420px;
        border-radius: 10px;
      }
    }
  }
}
</style>
