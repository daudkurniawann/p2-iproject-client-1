<template>
  <div class="px-8 flex-col space-y-1 pb-28 text-white">
    <Song
      v-for="(playlistsong, index) in playlistSongArr"
      :key="index"
      :index="index"
      :playlistsong="playlistsong"
    />
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useLoginStore } from "../stores/loginStore";
import Song from "./Song.vue";
export default {
  components: {
    Song,
  },
  name: "Songs",
  computed: {
    ...mapState(useLoginStore, ["playlistSongArr"]),
  },
};
</script>
