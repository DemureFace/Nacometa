<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{ 'active-dropzone': active }"
    class="dropzone"
  >
    <img
      src="@/assets/img/svg/img.svg"
      alt="dropzoneFile.name"
      class="dropzone__img"
    />
    <label for="dropzoneFile"
      >Перетащи сюда изображение или &nbsp;
      <p>загрузи с компьютера</p></label
    >
    <input type="file" id="dropzoneFile" class="dropzoneFile" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DropZone",

  setup() {
    const active = ref(false);

    const toggleActive = () => {
      active.value = !active.value;
    };

    return { active, toggleActive };
  },
};
</script>

<style scoped lang="scss">
.dropzone {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    color: $lightGrey;
    display: flex;
    font: 600 16px/24px "Nunito-SemiBold", sans-serif;
    margin: 30px 0 86px;

    & p {
      color: $blue;
      border-bottom: 1px dotted $blue;
      cursor: pointer;
    }
  }
  input {
    display: none;
  }

  &__img {
    margin-top: 50px;
  }
}
.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: rgba($blue, $alpha: 0.4);
  border: 2px dashed #aed2df;
  border-radius: 20px;

  @include transition(ease-in-out);
}
</style>
