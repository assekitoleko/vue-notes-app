<template>
    <a id="fab" @click="add()" class="btn-floating btn-large waves-effect waves-light" :class='[color]'>
        <i class="material-icons">{{ iconType }}</i>
    </a>
</template>

<script>

export default {
    props: ['iconType', 'color'],
    name: 'fab',
    data() {
        return {

        }
    },
    methods: {
        add() {
            this.$store.commit('NOTE_add')
        }
    }
}  

</script>

<style scoped>
#fab {
    position: fixed;
    right: 2em;
    bottom: 2em;
}
</style>
