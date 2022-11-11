<template>
  <div @click="clickPlaylist(playlist.id)">
    {{ playlist.name }}
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useLoginStore } from "../stores/loginStore";

export default {
  name: "playlistList",
  props: ["playlist"],
  methods: {
    ...mapActions(useLoginStore, ["fetchPlaylist", "changePage"]),

    clickPlaylist(id) {
      this.changePage("Home");
      this.fetchPlaylist(id);
    },
  },
};
</script>
