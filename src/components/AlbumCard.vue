<template lang="html">
    <div class="album-box">
        <router-link :to="albumLink">
            <div class="album-content">
                <span v-if="admin" class="admin">admin</span>
                <h2>{{album.artist}}</h2>
                <h1>{{album.album}}</h1>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'AlbumCard',
    props: {
        album: {
            type: Object
        }
    },
    data () {
        return {
            admin: false
        }
    },
    watch: {
    },
    computed: {
        albumLink() {
            return "/albums/single/" + this.album._id;
        },
    },
    methods: {
    }
}
</script>

<style scoped>

 a {
 }

 .album-box {
     background: #dcc;
     border-radius: 10px;
     width: 12rem;
     height: 12rem;
     padding: 0.5rem;
 }

 .album-content {
     display: grid;
     grid-template-rows: 1rem 3rem 5rem 3rem;
 }

 h1, h2 {
     margin: 0;
     word-break: break-word;
 }

 h1 {
     grid-row: 2 / span 1;
     font-size: 1.5rem;
 }

 h2 {
     grid-row: 4 / span 1;
     font-size: 1.3rem;
     text-align: bottom;
 }

 .admin {
     background: red;
 }
</style>
