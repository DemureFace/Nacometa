<template>
  <div class="circle">
    <div class="circle__circles">
      <div
        v-for="circle in circles"
        :key="circle.class"
        :class="`circle__block --${circle.class}`"
      >
        <div :class="`circle__pin --${circle.class}`">
          <div
            :class="[
              `circle__pinInfo --${circle.pin.position.horizontal} --${circle.pin.position.vertikale}`,
              { '--topRight': circle.pin.position.border === 'top-right' },
              { '--topLeft': circle.pin.position.border === 'top-left' },
              {
                '--bottomRight': circle.pin.position.border === 'bottom-right',
              },
              {
                '--bottomLeft': circle.pin.position.border === 'bottom-left',
              },
            ]"
          >
            <h3>{{ circle.pin.info.title }}</h3>
            <p>{{ circle.pin.info.description }}</p>
          </div>
        </div>

        <img
          v-for="img in circle.images"
          :key="img.img"
          :src="require(`@/assets/img/png/circle/${img.img}`)"
          alt="Women"
          :class="`circle__img --${circle.class}`"
        />
      </div>
      <div class="circle__comentPin">
        <p>
          Представь,<br />
          что это ты
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCircles",

  data() {
    return {
      circles: [
        {
          class: "bold",
          pin: {
            position: {
              horizontal: "left",
              vertikale: "top",
              border: "top-right",
            },
            info: {
              title: "€ 10",
              description: "от каждого участника 4 круга",
            },
          },
          images: [{ img: "women1.png" }],
        },
        {
          class: "medium",
          pin: {
            position: {
              horizontal: "right",
              vertikale: "bottom",
              border: "bottom-left",
            },
            info: {
              title: "€ 10",
              description: "от каждого участника 4 круга",
            },
          },
          images: [{ img: "women2.png" }, { img: "women3.png" }],
        },
        {
          class: "regular",
          pin: {
            position: {
              horizontal: "left",
              vertikale: "top",
              border: "top-right",
            },
            info: {
              title: "€ 10",
              description: "от каждого участника 4 круга",
            },
          },
        },
        {
          class: "light",
          pin: {
            position: {
              horizontal: "right",
              vertikale: "bottom",
              border: "bottom-left",
            },
            info: {
              title: "€ 10",
              description: "от каждого участника 4 круга",
            },
          },
          images: [{ img: "centre.png" }],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.circle {
  &__circles {
    position: relative;
    width: 542px;
    height: 542px;
    border-radius: 50%;
    border: 1px solid rgba($blue, 0.15);
  }

  &__comentPin {
    position: absolute;
    top: 171px;
    left: 77px;
    box-shadow: 0px 24px 32px rgba(50, 50, 71, 0.05);
    border-radius: 20px 20px 0px 20px;
    z-index: 1;
    width: 185px;
    background-color: $light;
    padding: 15px;
    box-sizing: border-box;

    p {
      font: 700 16px/24px $fontBold;
    }
  }

  &__block {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;

    &.--bold {
      width: 457px;
      height: 457px;
      background: rgba($blue, 0.4);
    }

    &.--medium {
      width: 363px;
      height: 363px;
      background: rgba($blue, 0.4);
    }

    &.--regular {
      width: 255px;
      height: 255px;
      background: rgba($blue, 0.2);
    }

    &.--light {
      width: 170px;
      height: 170px;
      background: $orangeMain;
    }
  }

  &__pin {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba($blue, 0.3);
    border: 1px solid $light;

    &.--bold {
      bottom: 9px;
      left: 213px;
    }

    &.--medium {
      bottom: 31px;
      left: 240px;
    }

    &.--regular {
      bottom: 88px;
      left: 6px;
    }

    &.--light {
      top: 17px;
      right: 37px;
    }
  }

  &__pinInfo {
    z-index: 1;
    width: 260px;
    position: absolute;
    background-color: $light;
    padding: 15px;
    border-radius: 20px;
    box-shadow: 0px 24px 32px rgba($black, 0.05);
    box-sizing: border-box;

    &.--right {
      right: -244px;
    }

    &.--left {
      left: -244px;
    }

    &.--top {
      top: 16px;
    }

    &.--bottom {
      bottom: 16px;
    }

    &.--topRight {
      border-top-right-radius: 0;
    }
    &.--topLeft {
      border-top-left-radius: 0;
    }
    &.--bottomRight {
      border-bottom-right-radius: 0;
    }
    &.--bottomLeft {
      border-bottom-left-radius: 0;
    }
  }

  &__img {
    position: absolute;
    width: 55px;
    height: 55px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #ffffff;

    &.--bold {
      bottom: 5px;
      right: 79px;
    }

    &.--medium {
      &:first-of-type {
        bottom: 2px;
        right: 245px;
      }
      &:last-of-type {
        top: -20px;
        left: 105px;
      }
    }

    &.--light {
      width: 80px;
      height: 80px;
      top: 45px;
      left: 45px;
    }
  }
}
</style>
