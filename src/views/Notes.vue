<template>
    <div>
        <fab color="black" iconType="add"></fab>
        <card cardType="note" :currentNote="note" :key="note.id" :color="note.color" v-for="note in this.$store.state.data.notes" :content="note.content" :title="note.title"></card>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import Fab from '../components/Fab.vue'
import { colors } from '../colors.js'

export default {
    name: 'notes',
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
