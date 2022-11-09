<script>
import { RouterView } from "vue-router";
import { useLoginStore } from "./stores/loginStore";
import { mapState } from "pinia";
export default {
  components: {
    RouterView,
  },
  computed: {
    ...mapState(useLoginStore, ["isLoggedIn"]),
  },
};
</script>

<template>
  <RouterView />
</template>
