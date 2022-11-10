<template>
    <div @click="">
        {{playlist.name}}
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useLoginStore } from '../stores/loginStore';

    export default {
        name: "playlistList",
        props: ["playlist"],
        methods: {
            ...mapActions(useLoginStore, ['fetchPlaylist']),

            clickPlaylist(id){
                console.log(id)
            }
        }
    }
</script>