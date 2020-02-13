<template lang="html">
<div class="album">
    <h1>{{title}}</h1>
    <h2>{{artist}}</h2>
</div>
</template>

<script>
export default {
    name: 'SingleAlbum',
    props: {
        id: {
            type: String,
            default: '',
            required: true
        }
    },
    data () {
        return {
        }
    },
    watch: {
    },
    computed: {
    },
    methods: {
        getAlbum() {
            
        }
    }
}
</script>

<style scoped>

</style>
