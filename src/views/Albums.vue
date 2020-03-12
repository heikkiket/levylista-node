<template>
    <div class="albums">
        <h1>Albums</h1>
        <ul>
            <li v-for="(album, index) in albums" :key="index">
                <router-link :to="'/albums/single/' + album._id">
                    {{album.artist}}: {{album.album}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Albums',
    props: {
        msg: String
    },
    data() {
        return {
        }
    },
    mounted() {
        this.getAlbums();
    },
    computed: {
        albums() {
            return this.$store.state.albums;
        }
    },
    methods: {
        albumLink(id) {
            return "/albums/single/" + id;
        },
        ...mapActions([
            'getAlbums',
        ]),
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h3 {
     margin: 40px 0 0;
 }
 a {
     color: #42b983;
 }
</style>
