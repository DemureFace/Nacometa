<template>
  <section class="mainBaner">
    <h1 class="mainBaner__title">€ 355 320 000</h1>
    <p class="mainBaner__text">
      Cобрано на платформе nacometa.com <br />
      Поделись своей мечтой <br />
      и получи поддержку сообщества!
    </p>
    <div class="mainBaner__buttons">
      <BaseButton animate url="/login" rounded>
        Начать сбор средств
      </BaseButton>
      <BaseButton theme="transparent" url="/login" rounded>
        Смотреть видео
      </BaseButton>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "MainBaner",
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.mainBaner {
  background-image: url(@/assets/img/png/bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  color: $light;
  padding: 0 10%;

  &__title {
    font: 800 58px/80px $fontExtraBold;
  }

  &__text {
    font: 700 24px/32px $fontBold;
  }

  &__buttons {
    width: 100%;
    display: flex;
    margin-top: 40px;
    gap: 23px;
  }
}
</style>
