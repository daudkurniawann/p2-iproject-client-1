<template>
  <div class="grid place-items-center h-screen">
    <button
      @click.prevent="clickLogin"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      LOGIN
    </button>
  </div>
</template>

<script>
import { useLoginStore } from "../stores/loginStore";
import { mapActions } from "pinia";
export default {
  name: "login",
  methods: {
    ...mapActions(useLoginStore, ["signInWithSpotify"]),

    clickLogin() {
      this.signInWithSpotify();
    },
  },
};
</script>
