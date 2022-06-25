<template>
  <body>
    <MainBaner />
    <MainActive />
    <MainCircle />
    <MainSlider />
    <MainFrames />
    <MainFeatures />
    <MainDream />
    <MainCompani />
  </body>
</template>

<script>
import MainBaner from "@/components/main/MainBaner.vue";
import MainActive from "@/components/main/MainActive.vue";
import MainCircle from "@/components/main/MainCircle.vue";
import MainSlider from "@/components/main/MainSlider.vue";
import MainFrames from "@/components/main/MainFrams.vue";
import MainFeatures from "@/components/main/MainFeatures.vue";
import MainDream from "@/components/main/MainDream.vue";
import MainCompani from "@/components/main/MainCompani.vue";

export default {
  name: "HomePage",

  components: {
    MainBaner,
    MainActive,
    MainCircle,
    MainSlider,
    MainFrames,
    MainFeatures,
    MainDream,
    MainCompani,
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: $background;
}
</style>
