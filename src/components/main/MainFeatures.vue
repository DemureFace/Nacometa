<template>
  <section class="features">
    <div class="features__top">
      <h1 class="features__Title">Возможности</h1>
      <p class="features__Description">
        Легкий, быстрый и эффективный способ осуществить свою мечту!
      </p>
    </div>
    <div class="features__cards">
      <div v-for="item in card" :key="item.title" class="features__card">
        <img :src="setSrc(item.img)" alt="cardImg" class="features__img" />

        <h6 class="features__cardTitle">{{ item.title }}</h6>
        <p class="features__cardDescription">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import activeData from "@/data/featuresData.json";
export default {
  name: "MainFeatures",

  data() {
    return {
      card: activeData?.card || [],
    };
  },

  methods: {
    setSrc(img) {
      return `${require(`@/assets/img/svg/featuresSVG/${img}`)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.features {
  margin: 60px 140px 140px;
  &__top {
    margin: 60px 0;
  }
  &__Title {
    font: 700 40px/50px $fontBold;
  }
  &__Description {
    font: 400 24px/32px $fontRegular;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  &__card {
    width: 200px;
    background: rgba($light, 0.7);
    border-radius: 20px;
    display: flex;
    padding: 30px;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    background-color: rgba($blue, 0.1);
  }
  &__img {
    width: 75px;
    height: 75px;
  }
  &__cardTitle {
    font: 700 16px/24px $fontBold;
  }
}
</style>
