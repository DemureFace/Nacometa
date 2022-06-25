<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :target="target"
    :disabled="disabled"
    :class="classes"
    @click="onClick"
  >
    <span class="button__text">
      <slot name="default">Button text</slot>
    </span>
    <span v-if="animate" class="button__waves" />
  </component>
</template>

<script>
export default {
  name: "BaseButton",

  props: {
    url: {
      type: String,
      default: "",
    },
    target: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "primary",
      validator: (type) =>
        [
          "primary",
          "primary-transparent",
          "secoundary",
          "transparent",
        ].includes(type),
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    animate: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    tag() {
      if (!this.url) {
        return "button";
      } else if (
        /(http|https)|(tel:)|(mailto:)/.test(this.url) ||
        this.target === "_blank"
      ) {
        return "a";
      } else {
        return "router-link";
      }
    },
    href() {
      return this.tag !== "button" ? this.url : null;
    },
    to() {
      return this.tag === "router-link" ? this.url : null;
    },
    classes() {
      return [
        "button",
        `button_${this.theme}`,
        { button_rounded: this.rounded },
      ];
    },
  },
  methods: {
    onClick(event) {
      if (this.tag === "nuxt-link") {
        event.preventDefault();
      }
      if (this.disabled) return;
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  overflow: hidden;
  height: 30px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 15px;

  @include hover {
    .button__waves {
      opacity: 0;
    }
  }

  @include transition(ease-in-out);

  &_primary {
    background-color: $blue;
    color: $light;

    @include hover {
      box-shadow: 0px 0px 20px $blue;
    }
  }

  &_primary-transparent {
    border: 1px solid $blue;

    color: $blue;

    @include hover {
      box-shadow: 0 0 25px rgba(73, 115, 255, 0.6);
      background-color: $blue;
      color: $light;
    }
  }

  &_secoundary {
    background-color: $orangeMain;
    color: $black;

    @include hover {
      box-shadow: 0px 0px 20px $orangeMain;
    }
  }

  &_transparent {
    border: 1px solid $light;
    background-color: transparent;
    color: $light;

    @include hover {
      background-color: $light;
      color: $black;
      box-shadow: 0 0 10px $light;
    }
  }

  &_rounded {
    border-radius: 15px;
  }

  &__text {
    z-index: 1;
    position: relative;
    font: 700 14px/24px $fontBold;
    letter-spacing: 0.2px;
  }

  &__waves {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 280px;
    background-color: $blue;
    box-shadow: 0 0 50px rgba($black, 0.5);

    @include transition();

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 250%;
      height: 160%;
      transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
    }

    &::before {
      background-color: $blue;
      border-radius: 48%;
      animation: waves 5s infinite linear;
    }

    &::after {
      background-color: rgba($light, 0.5);
      border-radius: 44%;
      animation: waves 10s infinite linear;
    }
  }
}

@keyframes waves {
  0% {
    transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
  }
  100% {
    transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
  }
}
</style>
