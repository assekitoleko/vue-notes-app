<template>
    <div>
        <!-- Backup and Restore -->
        <preference configTitle="Backup & Restore">
            <div slot="prefDesc">
                {{ backupRestore.description }}
            </div>

            <div slot="prefContent">
                <a @click="settingsBackup" :class="backupRestore.btnStyle">Backup</a>
                <a @click="settingsRestore" :class="backupRestore.btnStyle">Restore</a>
                <input type="file" id="fileUpload" @change="handleFileUpload" hidden>
            </div>

        </preference>

        <!-- Appearance -->
        <preference configTitle="Appearance">
            <div slot="prefDesc">
                {{ appearance.description }}
            </div>

            <div slot="prefContent">

            </div>
        </preference>
    </div>
</template>

<script>

import { saveAs } from 'file-saver'
import Preference from '../components/Preference.vue'

export default {
    components: {
        Preference
    },
    name: 'Config',
    data() {
        return {
            backupRestore: {
                description: 'Perform backup of app data or restore them from a selected settings file',
                btnStyle: 'black btn waves-effect waves-light'
            },
            appearance: {
                description: 'Configure how the app looks'
            } 
        }
    },
    methods: {
        handleFileUpload() {
            var file = event.target.files[0];
            var reader = new FileReader();
            const store = this.$store
            reader.onload = function (event) {
                // The file's text will be printed here
                var fileContent = event.target.result
                store.commit('STATE_import', fileContent)
            };

            reader.readAsText(file);

            // TODO there should be a better way to do this
            $('#fileUpload')[0].value = ""
        },
        settingsRestore() {
            // TODO there should be a better way to do this
            $('#fileUpload').click()
        },
        settingsBackup() {
            var date = new Date()
            var dateStr = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
            var text = JSON.stringify(this.$store.state)
            var filename = 'notesbackup-' + dateStr
            var blob = new Blob([text], { type: "application/json;charset=utf-8" });
            saveAs(blob, filename + ".json");
        }
    }
}
</script>

<style scoped>

</style>