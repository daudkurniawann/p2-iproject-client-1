<script>
import { useLoginStore } from "../stores/loginStore";
import { mapActions, mapState } from "pinia";
import SongCardHome from "../components/SongCardHome.vue";
import Player from "../components/Player.vue";
export default {
  components: {
    SongCardHome,
    Player,
  },
  methods: {
    ...mapActions(useLoginStore, [
      "signOut",
      "checkSession",
      "fetchAlbum",
      "fetchHomeSong",
    ]),

    clickLogOut() {
      this.signOut();
    },

    clickAlbum() {
      this.fetchAlbum();
    },
  },
  computed: {
    ...mapState(useLoginStore, [
      "homeSongArr",
      "spotifyUserName",
      "dataSession",
    ]),
  },
  created() {
    this.checkSession();
  },
};
</script>

<template>
  <!-- card -->
  <div class="flex flex-col">
    <div
      class="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10"
    >
      <h2 class="font-bold text-3xl text-black text-left">
        WELCOME {{ spotifyUserName }}
      </h2>
    </div>
    <div class="flex flex-wrap sm:justify-start justify-center gap-8">
      <SongCardHome
        v-for="(homeSong, index) in homeSongArr"
        :key="index"
        :homeSong="homeSong"
      />
    </div>
  </div>
  <br />
  <br />
  <button
    @click="signOut"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Log out
  </button>

  <div class="sticky bottom-0">
    <Player />
  </div>
</template>
