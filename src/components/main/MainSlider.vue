<template>
  <div class="mainSlider">
    <h1 class="mainSlider__title">Эти люди уже исполнили свои мечты</h1>

    <BaseSlider :slides="slids" class="mainSlider__swiper" />
  </div>
</template>

<script>
import BaseSlider from "@/components/base/BaseSlider.vue";

export default {
  name: "MainSlider",

  components: {
    BaseSlider,
  },

  data() {
    return {
      slids: [
        {
          title: "Great community!",
          text: "Max from the UK",
          description:
            "I want to express my admiration of a brilliant project and a great community. Thanks to nacometa.com I went to study in the UK, which I could have only dreamed of before. With your help I succeeded, and let me say a big thank you to everyone! ",
        },
        {
          title: "Dreams come true!",
          description:
            "I joined Nacometa to try to fundraise money for my own pizza delivery business. And I am amazed by the way its working! I am certainly on the way to my dream, thanks to the brilliant team and 24/7 support! ",
          text: "John from Poland",
        },
        {
          title: "Every dream matters!",
          description:
            "I tried to fundraise money for my ecological campaign using different services, but they didnt give me any significant results. Then I got to know about Nacometa and voila! I have the money to save the forest I live nearby.",
          text: "Martin from France",
        },
        {
          title: "Every dream matters!",

          description:
            "I tried to fundraise money for my ecological campaign using different services, but they didnt give me any significant results. Then I got to know about Nacometa and voila! I have the money to save the forest I live nearby.",
          text: "Martin from France",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.mainSlider {
  margin: 0 140px;
  &__title {
    font: 700 40px/50px $fontBold;
    color: $black;
    margin-left: 140px;
  }

  &__swiper {
    margin-top: 80px;
    &::v-deep .swiper {
      .swiper-pagination {
        display: flex;
      }
      .swiper-wrapper {
        .swiper-slide {
          height: 265px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0px 10px 32px rgba($black, 0.05);
          padding: 30px;

          .swiper__cardTitle {
            font: 700 24px/32px $fontBold;
            margin-bottom: 15px;
          }
          .swiper__cardDescription {
          }
          .swiper__cards-icon {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 19px;

            .swiper__cardText {
              font: 400 16px/24px $fontRegular;
            }
          }
        }
      }
    }
  }
}
</style>
