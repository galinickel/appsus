import keepAdd from '../cmps/keep-add.cmp.js'
import keepList from '../cmps/keep-list.cmp.js'
import keepPreview from '../cmps/keep-preview.cmp.js'
import {
    keepService
} from '../services/keep-service.js'
import {
    eventBus
} from "../../../site-services/event-bus.js";

export default {
    template: `<div class="app-page keep-app">
        <h1> KEEP  </h1>
        <h3>Your notes. Brought together.</h3>
        <!-- <button @click="isAddNew = !isAddNew" class="keep-add-btn">{{addNewMsg}}</button>  -->
        <keep-add v-if="isAddNew" @noteSaved="renderNote"/>
        <keep-list v-if="notes.length" :notes="notes"/>
 
        </div> `,
    data() {
        return {
            isAddNew: true,
            notes: []
        }
    },
    methods: {
        renderNote() {
            this.loadNotes();
        },
        loadNotes() {
            keepService.query('keepNotes').then(notes => {
                this.notes = notes
            })
        },
        deleteNote(noteId) {
            keepService.deleteNote(noteId)
                .then(() => {
                    this.loadNotes()
                })
        }
    },
    computed: {},
    created() {
        this.loadNotes();
        eventBus.$on('noteErased', this.deleteNote);
    },
    components: {
        keepAdd,
        keepList,
        keepPreview
    }
}