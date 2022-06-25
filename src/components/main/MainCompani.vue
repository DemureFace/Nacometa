<template>
  <div class="compani">
    <h1 class="compani__title">Что такое фандрайзинговая кампания?</h1>
    <div v-for="item in texts" :key="item.text" class="compani__dropDown">
      <p class="compani__text">{{ item.text }}</p>
      <img src="@/assets/img/svg/companiArrow.svg" alt="" />
    </div>
  </div>
</template>

<script>
import companiData from "@/data/companiData.json";
export default {
  name: "MainCompani",

  data() {
    return {
      texts: companiData?.texts || [],
    };
  },
};
</script>

<style lang="scss" scoped>
.compani {
  &__title {
    font: 700 40px/50px $fontBold;
    letter-spacing: 0.2px;
    margin: 0 140px 50px;
  }
  &__dropDown {
    display: flex;
    justify-content: space-between;
  }
  &__text {
    font: 400 24px/32px $fontRegular;
    letter-spacing: 0.2px;
    margin: 0 0 40px 140px;
  }
}
</style>
