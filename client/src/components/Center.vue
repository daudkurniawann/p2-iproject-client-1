<template>
    <div class="flex-grow text-white">
        <header class="absolute top-5 right-8">
            <div class="flex items-center bg-red-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
                <img class="rounded-full w-10 h-10" :src=userImage alt="">
                <h2>{{spotifyUserName}}</h2>
            </div>
        </header>

        <section class="flex item-end space-x-7 bg-gradient-to-b to-black from-red-500 h-80 text-white padding-8">
            <img src="" alt="">
            <h1>test</h1>
        </section>

    </div>
</template>

<script>
import { mapState } from 'pinia';
import { useLoginStore } from '../stores/loginStore';

    export default {
        computed: {
            ...mapState(useLoginStore, ['userImage', 'spotifyUserName'])

        }
    }
</script>