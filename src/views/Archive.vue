<template>
    <div v-if="this.$store.state.data.archive.length != 0">
        <card cardType="archive" :currentNote="note" :key="note.id" :color="note.color" v-for="note in this.$store.state.data.archive" :content="note.content" :title="note.title"></card>
    </div>
    <div v-else>
        <placeholder icon="archive" text="No notes"></placeholder>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import Fab from '../components/Fab.vue'
import Placeholder from './Placeholder.vue'
import { colors } from '../colors.js'

export default {
    name: 'archive',
    components: {
        Card, Fab, Placeholder
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
