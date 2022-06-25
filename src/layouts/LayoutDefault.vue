<template>
  <TheHeader />
  <main>
    <router-view />
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  name: "LayoutDefault",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: $background;
}
</style>
