<template>
  <div
    class="flex flex-col w-[250px] p-4 bg-red/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
  >
    <div class="relative w-full h-56 group">
      <div
        @click="clickSong"
        class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex"
      ></div>
      <img :src="homeSong.track.album.images[0].url" alt="" class="h-40 w-40" />
    </div>
    <div class="mt-4" flex flex-col>
      <p class="text-black font-semibold">{{ homeSong.track.name }}</p>
      <p class="text-black text-sm truncate mt-1">
        {{ homeSong.track.artists[0].name }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useLoginStore } from "../stores/loginStore";

export default {
  name: "songCard",
  props: ["homeSong"],
  methods: {
    ...mapActions(useLoginStore, ["fetchSpotifySong"]),

    clickSong() {
      const id = this.homeSong.track.id;
      this.fetchSpotifySong(id);
    },
  },
};
</script>
