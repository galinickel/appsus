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
            this.clearEditStatus()
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
                    this.clearEditStatus()
                })
        },
        saveNoteColor(id,color){
            keepService.changeNoteColor(id,color)
            this.loadNotes()
            this.clearEditStatus()
        },
        pinNote(noteId) { 
            keepService.pinNote(noteId).then(() => {
                this.loadNotes()
                this.clearEditStatus()
            })
        },
        toggleEditStatus(noteId){ 
            keepService.toggleNoteEdit(noteId).then(() => {
                this.loadNotes()})
        },
        clearEditStatus(){
            console.log(this.notes);
            this.notes.forEach(note => {
                note.isEditing=false
            });
        },
        renderNoteEdit(noteId,noteType,noteInfo){
            keepService.editNote(noteId,noteType,noteInfo).then(() => {
                this.loadNotes()})
            
        }
    },
    computed: {},
    created() {
        this.loadNotes()
        eventBus.$on('toggleNotePinned', this.pinNote);
        eventBus.$on('noteErased', this.deleteNote);
        eventBus.$on('noteColorChanged', this.saveNoteColor);
        eventBus.$on('toggleNoteEdit', this.toggleEditStatus);
        eventBus.$on('noteEdited', this.renderNoteEdit);


    },
    components: {
        keepAdd,
        keepList,
        keepPreview
    }
}