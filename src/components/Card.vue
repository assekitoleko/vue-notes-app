<template>
    <div id="card" class="card">
        <div class="card-content" :style="color">
            <div class="card-title">
                {{ title }}
            </div>
            {{ content }}
            <br></br>
        </div>
        <div class="card-action">
            <!-- note -->
            <div v-if="cardType === 'note'">
                <a id="btn" @click="NOTE_edit(currentNote)" class="waves-effect btn-flat black-text">
                    <i class="material-icons">edit</i>
                </a>
                <a id="btn" @click="NOTE_archive(currentNote)" class="waves-effect btn-flat black-text">
                    <i class="material-icons">archive</i>
                </a>
                <a id="btn" @click="NOTE_remove(currentNote)" class="waves-effect btn-flat black-text">
                    <i class="material-icons">delete</i>
                </a>
            </div>

            <!-- archive -->
            <div v-else-if="cardType === 'archive'">
                <a id="btn" @click="ARCHIVE_edit(currentNote)" class="waves-effect btn-flat black-text">
                    <i class="material-icons">edit</i>
                </a>
                <a id="btn" @click="ARCHIVE_remove(currentNote)" class="waves-effect btn-flat black-text">
                    <i class="material-icons">delete</i>
                </a>
            </div>

            <!-- trash -->
            <div v-else-if="cardType === 'trash'">
                <a id="btn" @click="TRASH_edit(currentNote)" class="waves-effect btn-flat black-text">
                    <i class="material-icons">edit</i>
                </a>
                <a id="btn" @click="TRASH_remove(currentNote)" class="waves-effect btn-flat black-text">
                    <i class="material-icons">delete</i>
                </a>
            </div>

        </div>
    </div>
</template>


<script>

export default {
    components: {

    },
    props: ['currentNote', 'content', 'title', 'color', 'cardType'],
    name: 'card',
    data() {
        return {

        }
    },
    methods: {
        // normal note methods
        NOTE_edit(noteData) {
            this.$store.commit('NOTE_edit', noteData.id)
        },
        NOTE_archive(noteData) {
            this.$store.commit('NOTE_archive', noteData.id)
        },
        NOTE_remove(noteData) {
            this.$store.commit('NOTE_remove', noteData.id)
        },

        // archived note methods
        ARCHIVE_edit(noteData) {
            this.$store.commit('ARCHIVE_edit', noteData.id)
        },

        ARCHIVE_remove(noteData) {
            this.$store.commit('ARCHIVE_remove', noteData.id)
        },

        // trashed note methods
        TRASH_edit(noteData) {
            this.$store.commit('TRASH_edit', noteData.id)
        },

        TRASH_remove(noteData) {
            this.$store.commit('TRASH_remove', noteData.id)
        }
    }
}
</script>

<style scoped>
.card-action {

    padding: 0em 0em 0em 0em
}

#btn {
    margin-right: -.25em;
    padding-left: 1em;
    padding-right: 1em;
}
</style>
