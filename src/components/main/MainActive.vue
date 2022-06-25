<template>
  <section class="sectionActive">
    <div class="sectionActive__top">
      <h1 class="sectionActive__title">Самые активные мечтатели</h1>
      <BaseButton theme="primary-transparent" url="/login" rounded>
        Показать все мечты
      </BaseButton>
    </div>
    <div class="sectionActive__cards">
      <div v-for="item in cards" :key="item.title" class="card">
        <img :src="setSrc(item.img)" alt="cardImg" class="card__img" />
        <div class="card__content">
          <h5 class="card__title">{{ item.title }}</h5>
          <p class="card__description">{{ item.text }}</p>
          <span class="card__lastTransfer">{{ item.lastTransfer }}</span>

          <progress
            id="progres"
            :max="item.max"
            :value="item.current"
            class="card__progres"
          />
          <div class="card__amounts">
            <span class="card__collected">{{ item.collected }}</span>
            <span class="card__everything">{{ item.everything }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="sectionActive__footerr">
      <h3 class="sectionActive__text">
        Nacometa.com — онлайн-сообщество людей, вдохновленных идеей взаимной
        поддержки
      </h3>
    </div>
  </section>
</template>

<script>
import activeData from "@/data/activeData.json";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "MainActive",

  components: {
    BaseButton,
  },

  data() {
    return {
      cards: activeData?.cards || [],
    };
  },

  methods: {
    setSrc(img) {
      return `${require(`@/assets/img/png/${img}`)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.sectionActive {
  margin: 52px 140px 60px;

  &__top {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font: 700 40px/50px $fontBold;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(491px, 491px);
    grid-gap: 0 40px;

    margin-top: 45px;
  }

  &__footerr {
    background: rgba(235, 250, 255, 0.7);
    border-radius: 20px;
    margin-top: 60px;
  }
  &__text {
    text-align: center;
    font: 700 24px/32px $fontBold;
    color: $blue;
    padding: 45px 60px;
  }
}

.card {
  display: flex;
  flex-direction: column;
  &__img {
    min-width: 100%;
  }
  &__content {
    display: flex;
    flex-direction: column;
    padding: 20px;

    height: 100%;
  }
  &__title {
    margin-bottom: 10px;
    font: 700 16px/24px $fontBold;
  }
  &__description {
    font: 400 16px/24px $fontRegular;
  }
  &__lastTransfer {
    color: $grey;
    font: 400 16px/24px $fontRegular;
    margin-bottom: auto;
  }

  &__progres {
    width: 100%;
    height: 5px;
    border-radius: 10px;
    background-color: $blue;

    &::-webkit-progress-value {
      background: $blue;
      border-radius: 10px;
    }

    &::-webkit-progress-bar {
      background-color: $lightBlue;
      border-radius: 10px;
    }
  }

  &__collected {
    font: 700 16px/24px $fontBold;
  }
  &__everything {
    font: 400 16px/24px $fontRegular;
    color: $grey;
  }
}
</style>
