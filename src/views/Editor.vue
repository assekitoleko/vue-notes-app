<template>
    <div>
        <div class="card" :style="'background-color:' + note()['color']['backgroundColor']">
            <div class="card-content">
                <div class="card-title">
                    <input placeholder="Note title" :style="'box-shadow: 0 1px 0 0' + note()['color']['backgroundColor'] + ';border-bottom: 1px solid' + note()['color']['backgroundColor']" id="input" type="text" v-model="note()['title']"></input>
                </div>
                <textarea id="notecontent" placeholder="Note content" :style="'box-shadow: 0 1px 0 0' + note()['color']['backgroundColor'] + ';border-bottom: 1px solid' + note()['color']['backgroundColor']" class="materialize-textarea" v-model=" note()['content']"></textarea>
            </div>
        </div>
        {{ this.$route.path }}
        <br></br>
        {{ this.$route.params }}
        <br></br>
        {{ note() }}
    </div>
</template>

<script>
export default {
    name: 'editor',
    data() {
        return {

        }
    },
    methods: {
        note() {
            var data = this.$store.state.data
            var params = this.$route.params
            var note_data = data[params["noteIn"]].find(i => i.id == this.$route.params["noteID"])
            return note_data
        }
    },
    mounted() {
        $('#notecontent').trigger('autoresize');
    },
    beforeUpdate() {
        var updateObj = {
            updateTo: this.$route.params["noteIn"],
            updateForID: parseInt(this.$route.params["noteID"]),
            title: this.note()["title"],
            content: this.note()["content"]
        }

        this.$store.commit('NOTE_edit', updateObj)
    }
}
</script>

<style scoped>
input[type="text"] {
    font-size: 25px;
}

a {
    color: black;
}

textarea {
    padding-bottom: 0em;
}

::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: grey;
}

:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: grey;
    opacity: 1;
}

::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: grey;
    opacity: 1;
}

:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: grey;
}

::-ms-input-placeholder {
    /* Microsoft Edge */
    color: grey;
}
</style>
