<template>
  <div class="flex-grow h-screen overflow-y-scroll scrollbar-hide">
    <header class="absolute top-5 right-8">
      <div
        class="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white"
      >
        <img class="rounded-full w-10 h-10" :src="userImage" alt="" />
        <h2>{{ spotifyUserName }}</h2>
        <button class="flex" @click="signOut">Log Out</button>
      </div>
    </header>

    <section
      class="flex item-end space-x-7 bg-gradient-to-b to-black from-red-500 h-80 p-8 text-white"
    >
      <img src="" alt="" />
      <img class="h-44 w-44 shadow-2xl" :src="playlistImage" alt="" />
      <div>
        <p>Playlist</p>
        <h1 class="text-2xl md:text-3xl xl:text-5xl font-bold">
          {{ playlistData.name }}
        </h1>
      </div>
    </section>

    <div><Songs /></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useLoginStore } from "../stores/loginStore";
import Songs from "./Songs.vue";

export default {
  components: {
    Songs,
  },
  computed: {
    ...mapState(useLoginStore, [
      "userImage",
      "spotifyUserName",
      "playlistImage",
      "playlistData",
    ]),
  },
  methods: {
    ...mapActions(useLoginStore, ["signOut"]),

    clickLogOut() {
      this.signOut();
    },
  },
};
</script>
