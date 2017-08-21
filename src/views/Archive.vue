<template>
    <div>
        <card cardType="archive" :currentNote="note" :key="note.id" :color="note.color" v-for="note in this.$store.state.archive" :content="note.content" :title="note.title"></card>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import Fab from '../components/Fab.vue'
import { colors } from '../colors.js'

export default {
    name: 'archive',
    components: {
        Card, Fab
    },
    data() {
        return {
            
        }
    }
}    
</script>

<style scoped>
.container {
    padding-top: 2em;
}
</style>
