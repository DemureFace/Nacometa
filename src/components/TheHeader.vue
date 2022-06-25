<template>
  <header
    class="header"
    :class="{
      header_hide: direction === 'Down',
      header_show: direction === 'Up' && startY > 0,
    }"
  >
    <div class="header__container">
      <div class="header__logo">
        <img src="@/assets/img/svg/logo.svg" alt="logo" />
      </div>
      <nav class="header__list">
        <a
          href="#"
          v-for="link in links"
          :key="link.name"
          class="header__link"
          >{{ link.name }}</a
        >
      </nav>
      <BaseDropdown
        v-model="selectedLenguage"
        :items="lenguages"
        @input="setLenguage"
      />
      <img
        src="@/assets/img/svg/profile.svg"
        alt="profile"
        class="header__profile"
      />
    </div>
  </header>
</template>

<script>
import BaseDropdown from "@/components/base/BaseDropdown";

export default {
  name: "TheHeader",
  components: {
    BaseDropdown,
  },
  data() {
    return {
      direction: null,
      startY: 0,
      selectedLenguage: "",
      links: [
        {
          name: "О нас",
        },
        {
          name: "Как это работает",
        },
        {
          name: "Истории успеха",
        },
        {
          name: "Возможности",
        },
        {
          name: "FAQ",
        },
        {
          name: "Новости",
        },
      ],
      lenguages: [
        {
          label: "Русский",
        },
        {
          label: "Английский",
        },
        {
          label: "Немецкий",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      const scrollY = window.scrollY;

      if (scrollY > this.startY) {
        this.direction = "Down";
      } else {
        this.direction = "Up";
      }

      this.startY = scrollY;
    },
    setLenguage(lenguage) {
      this.selectedLenguage = lenguage.label;
      console.log(lenguage.label);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  z-index: 10;
  width: 100%;
  position: fixed;
  padding: 20px 0;

  @include transition();

  @include centered-x;

  &_hide {
    transform: translate(-50%, calc(-100% - 20px));
  }

  &_show {
    transform: translateY(-50%, 0);
    background-color: $blue;
  }
  &__container {
    display: flex;
    max-width: 1154px;
    margin: 0 auto;
  }
  &__logo {
  }
  &__list {
    margin: 5px 30px 0 40px;
    font: 700 18px/22px $fontBold;
  }
  &__link {
    color: $light;
    &:not(:last-of-type) {
      margin-right: 30px;
      transition: all 0.1s ease-out 0.1s;
    }
    &:hover {
      border-bottom: 2px solid $orangeMain;
    }
  }

  &__profile {
    margin-left: 20px;
  }
}
</style>
