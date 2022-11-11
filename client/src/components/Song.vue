<template>
  <div
    class="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer"
    @click="clickSong"
  >
    <div class="flex items-center space-x-4">
      <p>{{ index + 1 }}</p>
      <img
        class="h-10 w-10"
        :src="playlistsong.track.album.images[0].url"
        alt=""
      />
      <div>
        <p class="w-36 lg:w-64 truncate text-white">
          {{ playlistsong.track.name }}
        </p>
        <p class="w-40">{{ playlistsong.track.artists[0].name }}</p>
      </div>
    </div>

    <div class="flex items-center justify-between ml-auto md:ml-0">
      <p class="w-40 hidden md:inline">{{ playlistsong.track.album.name }}</p>
      <p class="">{{ millsToSeconds(playlistsong.track.duration_ms) }}</p>
      <p></p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useLoginStore } from "../stores/loginStore";

export default {
  props: ["playlistsong", "index"],
  methods: {
    ...mapActions(useLoginStore, ["fetchSpotifySong"]),

    millsToSeconds(mills) {
      const minutes = Math.floor(mills / 60000);
      const seconds = ((mills % 60000) / 1000).toFixed(0);
      return seconds == 60
        ? minutes + 1 + ":00"
        : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
    clickSong() {
      this.fetchSpotifySong(this.playlistsong.track.id);
    },
  },
};
</script>
