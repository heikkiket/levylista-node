<template>
    <div class="albums">
        <h1>Albums</h1>
        <ul>
            <li v-for="(album, index) in albums" :key="index">
                <AlbumCard :album="album" />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import  AlbumCard  from '../components/AlbumCard.vue';
export default {
    name: 'Albums',
    props: {
        msg: String
    },
    components: {
        AlbumCard
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

 .albums {
     display: block;
 }

 ul {
     display: grid;
     grid-template-columns: repeat(auto-fill, 13rem);
     grid-gap: 1rem;
     align-items: center;
     margin: 0 auto;
     padding: 0;
 }

 li {
     list-style-type: none;
 }

 ul {
     width: 56rem;
 }

 @media screen and (max-width: 768px) {
     ul {
         width: 41rem;
     }
 }

 @media screen and (max-width: 670px) {
     ul {
         width: 27rem;
     }
 }

 @media screen and (max-width: 450px) {
     ul {
         width: 13rem;
     }
 }
</style>
