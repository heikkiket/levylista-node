<template lang="html">
<AlbumCard :album="album" :admin="1">
</template>

<script>
import AlbumCard from './AlbumCard.vue';
export default {
    name: '{{ name }}',
    props: {
        album {
            type: Object
        }
    },
    components: {
        AlbumCard
    }
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

</style>
