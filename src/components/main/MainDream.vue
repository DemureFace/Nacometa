<template>
  <div class="dream">
    <h1 class="dream__title">
      Расскажи о своей <br />
      мечте прямо сейчас!
    </h1>
    <div class="dream__container">
      <form class="dream__drop">
        <DropZone @drop.prevent="drop" @change="selectedFile" />
        <!-- <span class="file-info">File: {{ dropzoneFile.name }}</span> -->

        <div class="dream__form">
          <input type="text" placeholder="Название мечты" />
          <textarea type="text" placeholder="Описание" />

          <label for="goal">Цель по сбору</label>
          <input id="goal" type="text" placeholder="5 000 €" />
          <BaseButton theme="secoundary" class="dream__button"
            >Продолжить</BaseButton
          >
        </div>
      </form>

      <div class="dream__goal">
        <p class="dream__goalText">Здесь будет название твоей мечты</p>
        <progress id="progres" max="5000" value="0" class="dream__progres" />
        <div class="dream__amounts">
          <span class="dream__collected">€ 0 собрано </span>
          <span class="dream__everything">из € 5 000</span>
        </div>
        <BaseCircle />
      </div>
    </div>
  </div>
</template>

<script>
import DropZone from "@/components/DropZone.vue";
import { ref } from "vue";
import BaseButton from "../base/BaseButton.vue";
import BaseCircle from "@/components/base/BaseCircle.vue";

export default {
  name: "MainDream",

  components: {
    DropZone,
    BaseButton,
    BaseCircle,
  },
  setup() {
    let dropzoneFile = ref("");

    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };

    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };

    return { dropzoneFile, drop, selectedFile };
  },
};
</script>

<style lang="scss" scoped>
.dream {
  padding: 60px;
  margin: 60px 140px;

  &__title {
    font: 700 40px/50px $fontBold;
    margin-bottom: 52px;
  }
  &__drop {
    width: 520px;
    background: #f9f9f9;
    border-radius: 20px;
    padding: 18px 20px 32px;
  }

  &__form {
  }

  &__button {
    margin: 0 auto;
    padding: 20px 22px;
    border-radius: 10px;
  }

  &__goalText {
    color: $grey;
    font: 400 16px/24px $fontRegular;
    margin-bottom: auto;
  }

  &__progres {
    width: 440px;
    margin: 10px 0;
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
