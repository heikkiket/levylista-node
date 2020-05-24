<template lang="html">
    <div class="addAlbum"><form>
        <label for="artist">
            Artisti
        </label>
        <input id="artist" type="text">
        <label for="album">
            Albumi
        </label>
        <input id="album" type="text">
        <label for="year">
            Julkaisuvuosi
        </label>
        <input id="year" type="number">
        <label for="format">
            Formaatti
        </label>
        <input id="format" type="text">
    <input type="submit" value="Tallenna" />
    </form></div>
</template>

<script>
export default {
    name: 'AddAlbum',
    props: {
    },
    data () {
        return {
        }
    },
    watch: {
    },
    computed: {
    }
}
</script>

<style scoped>
 .addAlbum {
     text-align: left;
     max-width: 40rem;
     margin: 0 auto;
 }

 form {
     display: grid;
     grid-template-columns: 12rem 1fr;
 }

 label {
     text-align: right;
 }

 input[type=number] {
     height: 30px;
 }

 input {
     margin-bottom: 1em;
     margin-left: 1rem;
 }
</style>
