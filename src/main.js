import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "./App.vue";
import VuexPersist from "vuex-persist";
import { colors } from "./colors.js";

import Routes from "./routes.js";

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  storage: window.localStorage
});

const store = new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    data: {
      bin: [],
      archive: [],
      notes: [
        // {
        //   id: 0,
        //   title: "card 0 title",
        //   content: "card 0 content",
        //   color: colors.grey
        // },
        // {
        //   id: 1,
        //   title: "card 1 title",
        //   content: "card 1 content",
        //   color: colors.yellow
        // },
        // {
        //   id: 2,
        //   title: "card 2 title",
        //   content: "card 2 content",
        //   color: colors.green
        // }
      ]
    }
  },
  mutations: {
    NOTE_add(state) {
      var newID = state.data.notes.length;
      state.data.notes.push({
        id: newID,
        title: "",
        content: "",
        color: colors.white
      });
      router.push({
        name: "Editor",
        params: { noteIn: "notes", noteID: newID }
      });
    },

    NOTE_edit(state, updateObj) {
      var index = state.data[updateObj.updateTo].findIndex(
        i => i.id === updateObj.updateForID
      );
      state.data[updateObj.updateTo][index].title = updateObj.title;
      state.data[updateObj.updateTo][index].content = updateObj.content;
    },

    // TODO temporary solution as notes will not be sorted
    // if they are sorted, we will have to go trhough notes
    // and see if any notes are empty and remove them
    NOTE_pop(state, id) {
      state.data.notes.pop();
    },

    NOTE_archive(state, id) {
      var obj = state.data.notes.find(i => i.id === id);
      state.data.archive.push(obj);
      Materialize.toast("Note archived.", 1000);

      // TODO same as remove
      var index = state.data.notes.findIndex(i => i.id === id);
      state.data.notes.splice(index, 1);
    },

    NOTE_remove(state, id) {
      // TODO same as archive but pushed to bin
      var obj = state.data.notes.find(i => i.id === id);
      state.data.bin.push(obj);

      var index = state.data.notes.findIndex(i => i.id === id);
      state.data.notes.splice(index, 1);

      Materialize.toast("Note moved to bin.", 1000);
    },

    // archived note mutations
    ARCHIVE_edit(state, id) {
      // var index = state.data.archive.findIndex(i => i.id === id);
      // state.data.archive[index].title = "edited..in archive";
    },

    ARCHIVE_remove(state, id) {
      // TODO same as archive but pushed to bin
      var obj = state.data.archive.find(i => i.id === id);
      state.data.bin.push(obj);

      var index = state.data.archive.findIndex(i => i.id === id);
      state.data.archive.splice(index, 1);

      Materialize.toast("Note moved to bin.", 1000);
    },

    // trashed note mutations
    TRASH_edit(state, id) {
      // var index = state.data.bin.findIndex(i => i.id === id);
      // state.data.bin[index].title = "edited..in trash";
    },

    TRASH_remove(state, id) {
      // TODO dupes
      var index = state.data.bin.findIndex(i => i.id === id);
      state.data.bin.splice(index, 1);

      Materialize.toast("Note deleted.", 1000);
    },

    // TODO
    STATE_import(state, newState) {
      state.data = JSON.parse(newState).data;
      Materialize.toast("Notes restored from settings file.", 1500);
    }
  }
});

new Vue({
  // eslint-disable-line no-new
  el: "#app",
  router,
  store,
  render: h => h(App)
});
