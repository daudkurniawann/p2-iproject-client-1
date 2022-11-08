import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://lomfpfiigtrnmxotapbt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvbWZwZmlpZ3Rybm14b3RhcGJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc4Nzk2MjUsImV4cCI6MTk4MzQ1NTYyNX0.ddjRG7s28iqaSW4rW7A4wyONdLxmfPsGSR1DAscAO4A"
);

export const useLoginStore = defineStore("login", {
  actions: {
    async signInWithSpotify(event) {
      console.log(event);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "spotify",
      });
    },
  },
});
