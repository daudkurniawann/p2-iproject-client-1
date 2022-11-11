<script>
import { useLoginStore } from "../stores/loginStore";
import { mapActions, mapState } from "pinia";
import SongCardHome from "../components/SongCardHome.vue";
import Player from "../components/Player.vue";
import Sidebar from "../components/Sidebar.vue";
import Center from "../components/Center.vue";
import Search from "../components/Search.vue";
export default {
  components: {
    SongCardHome,
    Player,
    Sidebar,
    Center,
    Search,
  },
  methods: {
    ...mapActions(useLoginStore, [
      "checkSession",
      "fetchAlbum",
      "refreshSession",
    ]),

    clickAlbum() {
      this.fetchAlbum();
    },
  },
  computed: {
    ...mapState(useLoginStore, ["spotifyUserName", "dataSession", "isPage"]),
  },
  created() {
    this.checkSession();
  },
};
</script>

<template>
  <div class="bg-black h-screen overflow-hidden">
    <main class="flex">
      <Sidebar />
      <Center v-if="isPage === 'Home'" />
      <Search v-if="isPage === 'Search'" />
    </main>
  </div>

  <!-- <div class="sticky bottom-0"> -->
  <!-- <Player /> -->
  <!-- </div> -->
</template>
