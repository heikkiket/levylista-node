<template lang="html">
<div class="album">
    <h1>{{record.album}}</h1>
    <h2>{{record.artist}}</h2>
    <dl>
        <dt>Format:</dt><dd>{{ record.format }}</dd>
        <dt>Release year:</dt><dd>{{ record.release_year }}</dd>
        <dt>Catalog number:</dt>
        <dt>Publisher:</dt>
    </dl>
    <h3>Comment:</h3>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'SingleAlbum',
    props: {
    },
    data () {
        return {
        }
    },
    watch: {
    },
    computed: {
        record() {
            return this.$store.state.singleAlbum[0];
        }
    },
    mounted() {
        this.getSingleAlbum(this.$route.params.id);
    },
    methods: {
        ...mapActions([
            'getSingleAlbum',
        ]),
    }
}
</script>

<style scoped>

</style>
