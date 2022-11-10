<template>
  <div class="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
    <div class="space-y-4">
      <button class="flex items-center space-x-2 hover:text-white">
        <p>Home</p>
      </button>
      <button class="flex items-center space-x-2 hover:text-white">
        <p>Search</p>
      </button>
      <button class="flex items-center space-x-2 hover:text-white">
        <p>Library</p>
      </button>
      <hr class="border-t-[0.1px] border-gray-900" />

      <PlaylistList class="cursor-pointer hover:text-white" v-for="(playlist, index) in myPlaylistArr" :key="index" :playlist="playlist"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useLoginStore } from "../stores/loginStore";
import PlaylistList from "./PlaylistList.vue";

export default {
  components: { PlaylistList },
  methods: {
    ...mapActions(useLoginStore, [""]),
  },
  computed: {
    ...mapState(useLoginStore, ["myPlaylistArr"]),
  },
};
</script>
