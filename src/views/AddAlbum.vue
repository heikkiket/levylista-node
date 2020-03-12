<template lang="html">
    <div class="addAlbum"><form>
        <label>
            Artisti
            <input type="text">
        </label>
        <label>
            Albumi
            <input type="text">
        </label>
        <label>
            Julkaisuvuosi
            <input type="number">
        </label>
        <label>
            Formaatti
            <input type="text">
        </label>
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

 label {
     display: block;
 }

 input[type=number] {
     height: 30px;
 }

 input {
     margin-bottom: 1em;
     margin-left: 1rem;
 }
</style>
