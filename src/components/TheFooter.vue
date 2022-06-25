<template>
  <footer>
    <div class="footer">
      <h6 class="footer__title">
        Есть вопросы? Мы открыты для общения и поддержки 24/7
      </h6>
      <div class="footer__mail">
        <a href="">info@nacometa.com</a>
        <a href="">support@nacometa.com</a>
      </div>
      <div class="footer__bottom">
        <router-link class="footer__link" to="#"
          >Условия использования</router-link
        >
        <router-link class="footer__link" to="#"
          >Политика конфиденциальности</router-link
        >

        <img
          v-for="item in image"
          :key="item.img"
          :src="setSrc(item.img)"
          alt="cardImg"
          class="footer__icon"
        />
      </div>
    </div>
    <span class="footer__description">© 2021 Nacometa. Все права защищены</span>
  </footer>
</template>

<script>
import footerData from "@/data/footerData.json";
export default {
  name: "TheFooter",

  data() {
    return {
      image: footerData?.image || [],
    };
  },

  methods: {
    setSrc(img) {
      return `${require(`@/assets/img/svg/footer/${img}`)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    font: 700 16px/24px $fontBold;
    letter-spacing: 0.1px;
    color: $black;
    margin: 128px 0 20px;
  }
  &__mail {
    font: 600 14px/24px $fontSemiBold;

    & a {
      color: $blue;
      letter-spacing: 0.2px;
      text-decoration: underline;
      &:last-of-type {
        margin-left: 68px;
      }

      @include transition(ease-in-out);

      @include hover {
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
  &__bottom {
    margin-top: 70px;
  }
  &__link {
    text-decoration: underline;
    font: 600 14px/24px $fontSemiBold;
    color: $blue;
    &:last-of-type {
      margin-left: 40px;
      margin-right: 492px;
    }
  }

  &__icon {
    margin-right: 28px;
    &:last-of-type {
      margin-right: 0;
    }
  }

  &__description {
    display: flex;
    justify-content: center;
    margin-top: 55px;
    font: 400 12px/24px $fontRegular;

    color: $lightGrey;
  }
}
</style>
