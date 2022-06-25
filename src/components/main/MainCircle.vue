<template>
  <section class="circle">
    <h2 class="circle__title">
      Поддержи мечты участников сообщества всего на € 100 и собери до € 5 000 на
      каждую свою мечту!
    </h2>

    <div class="circle__container">
      <BaseCircle />

      <div class="circle__stats">
        <div class="circle__statsTop">
          <h4 class="circle__statsTitle">На каждую мечту можно собрать до:</h4>
          <span class="circle__money">€ 5 000</span>
          <p class="circle__statsDescription">
            По нашей статистике эту сумму реалистично собрать за 30 дней
          </p>
        </div>
        <div class="circle__list">
          <h6 class="circle__listTitle">Как это работает</h6>
          <ul class="circle__items">
            <li v-for="item in stats" :key="item.number" class="circle__item">
              <span class="circle__number">{{ item.number }}</span>
              <p class="circle__description">{{ item.description }}</p>
            </li>
          </ul>
          <div class="circle__buttons">
            <BaseButton
              theme="secoundary"
              url="/login"
              rounded
              class="circle__buttonsOrange"
            >
              Начать сбор средств
            </BaseButton>
            <BaseButton theme="primary" url="/login" rounded>
              Узнать подробнее
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import BaseCircle from "@/components/base/BaseCircle.vue";
import circleData from "@/data/circleData.json";

export default {
  name: "Circ-le",

  components: {
    BaseButton,
    BaseCircle,
  },

  data() {
    return {
      stats: circleData?.stats || [],
    };
  },
};
</script>

<style lang="scss" scoped>
.circle {
  margin: 60px 140px 130px;

  &__title {
    font: 700 40px/50px $fontBold;
    text-align: center;
    margin-bottom: 125px;
  }

  &__container {
    display: flex;
    justify-content: space-around;
  }

  &__stats {
    width: 400px;
  }

  &__statsTop {
    margin-bottom: 20px;
    padding: 30px;
    border: 1px solid rgba($blue, 0.15);
    border-radius: 20px;
  }
  &__statsTitle {
    font: 700 24px/32px $fontBold;
    margin-bottom: 15px;
  }

  &__money {
    display: block;
    margin-bottom: 15px;
    color: $blue;
    font: 700 24px/32px $fontBold;
  }

  &__statsDescription {
    font: 700 16px/24px $fontBold;
    color: $grey;
  }

  &__number {
    position: relative;
    font: 700 40px/50px $fontBold;
    color: $blue;
    margin: 10px 20px 10px 0;

    &::before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: rgba($blue, 0.2);
      bottom: 0px;
    }
  }
  &__list {
    background: #ebfaff;
    border-radius: 20px;
    padding: 20px;
  }
  &__listTitle {
    font: 700 24px/32px $fontBold;
  }

  &__description {
    font: 400 16px/24px $fontRegular;
  }

  &__number {
    font: 700 40px/50px $fontBold;
  }
  &__item {
    display: flex;
    align-items: center;
    height: 50px;
    margin-bottom: 25px;
  }
  &__buttons {
    display: flex;
    gap: 10px;
    margin-top: 35px;
  }
}
</style>
