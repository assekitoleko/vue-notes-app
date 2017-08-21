import Notes from "./views/Notes.vue";
import Archive from "./views/Archive.vue";
import Trash from "./views/Trash.vue";
import Config from "./views/Config.vue"

export default [
  {
    path: "/",
    redirect: "/notes"
  },
  {
    path: "/notes",
    name: 'Notes',
    component: Notes
  },
  {
    path: "/archive",
    name: 'Archives',
    component: Archive
  },
  {
    path: "/trash",
    name: 'Trash',
    component: Trash
  },
  {
    path: "/config",
    name: 'Settings',
    component: Config
  }
];
