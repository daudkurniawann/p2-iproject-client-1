import { defineStore } from "pinia";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";

const supabase = createClient(
  "https://lomfpfiigtrnmxotapbt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvbWZwZmlpZ3Rybm14b3RhcGJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc4Nzk2MjUsImV4cCI6MTk4MzQ1NTYyNX0.ddjRG7s28iqaSW4rW7A4wyONdLxmfPsGSR1DAscAO4A"
);

export const useLoginStore = defineStore("login", {
  state: () => ({
    songName: "",
    isLoggedIn: false,
    dataSession: "",
    dataUser: "",
    userImage: '',
    spotifyUserName: "",
    homeSongArr: [],
    songImage: "",
    myPlaylistArr: [],
  }),
  actions: {
    async signInWithSpotify() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "spotify",
        options: {
          scopes:
            "playlist-modify-public playlist-read-private playlist-modify-private user-read-playback-state user-read-recently-played",
        },
      });

      console.log(data, "INI SIGN IN");

      supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session);
      });
    },

    async fetchAlbum(id) {
      try {
        const song = await axios({
          method: "GET",
          url: `https://api.spotify.com/v1/albums/${id}`,
          headers: {
            Authorization: "Bearer " + this.dataSession,
          },
        });
        console.log(song);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchMyPlaylist() {
      try {
        const playlist = await axios({
          method: "GET",
          url: "https://api.spotify.com/v1/me/playlists",
          headers: {
            Authorization: "Bearer " + this.dataSession,
          },
        });
        this.myPlaylistArr = playlist.data.items
        console.log(this.myPlaylistArr)
      } catch (err) {
        console.log(err);
      }
    },

    async fetchPlaylist(id){
      try{
        console.log(id)
        // const selectPlaylist = await axios({
        //   method: 'GET',
        //   url: `https://api.spotify.com/v1/playlists/${id}`,
        //   headers: {
        //     Authorization: "Bearer " + this.dataSession,
        //   },

        // })
      }catch(err){
        console.log(err)
      }
    },

    async fetchHomeSong() {
      try {
        const song = await axios({
          method: "GET",
          url: "https://api.spotify.com/v1/playlists/37i9dQZEVXbIZK8aUquyx8/tracks?market=ID",
          headers: {
            Authorization: "Bearer " + this.dataSession,
          },
        });
        this.homeSongArr = song.data.items;
        // console.log(this.homeSongArr);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchSpotifySong(id) {
      try {
        const song = await axios({
          method: "GET",
          url: `https://api.spotify.com/v1/tracks/${id}`,
          headers: {
            Authorization: "Bearer " + this.dataSession,
          },
        });
        console.log(song.data);
        this.songImage = song.data.album.images[0].url;
      } catch (err) {
        console.log(err);
      }
    },

    async signOut() {
      const { error } = await supabase.auth.signOut();
    },

    async checkSession() {
      const { data, error } = await supabase.auth.getSession();
      if (!data.session) {
        this.isLoggedIn = false;
      } else {
        this.dataUser = data.session.user;
        this.userImage = data.session.user.identities[0].identity_data.avatar_url
        this.dataSession = data.session.provider_token;
        this.isLoggedIn = true;
        this.spotifyUserName = data.session.user.user_metadata.full_name;
        this.fetchHomeSong();
        this.fetchMyPlaylist()

        console.log(this.dataUser)
      }
    },
  },
});
