<template>
    <div class="albums">
        <h1>Albums</h1>
        <ul>
            <li v-for="(album, index) in albums" :key="index">{{album.artist}}: {{album.album}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Albums',
    props: {
        msg: String
    },
    data() {
        return {
            albums: null
        }
    },
    mounted() {
        this.getAlbums();
    },
    methods: {
        getAlbums() {
            let apiUrl = "http://localhost:8081/api/";
            let endpoint = "albums";
            let url = apiUrl + endpoint;
            let headers = new Headers();
            headers.append('Origin', 'https://localhost:8080');
            fetch(url, {Headers: headers}).
                  then((response) => {
                      return response.json();
                  }).then((response) => {
                      this.albums = response;
                  });
        }
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
