<template>
    <div v-if="this.$store.state.data.bin.length != 0">
        <card cardType="trash" :currentNote="note" :key="note.id" :color="note.color" v-for="note in this.$store.state.data.bin" :content="note.content" :title="note.title"></card>
    </div>
    <div v-else>
        <placeholder icon="delete" text="No notes"></placeholder>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import Fab from '../components/Fab.vue'
import Placeholder from './Placeholder.vue'
import { colors } from '../colors.js'

export default {
    name: 'trash',
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
