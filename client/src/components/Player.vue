<template>
  <div>
    <h1>player</h1>
    <img :src="songImage" alt="" />
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useLoginStore } from "../stores/loginStore";

export default {
  computed: {
    ...mapState(useLoginStore, ["songImage"]),
  },
};
</script>
