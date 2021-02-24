import keepAdd from '../cmps/keep-add.cmp.js'
import keepList from '../cmps/keep-list.cmp.js'
import keepPreview from '../cmps/keep-preview.cmp.js'
import {
    keepService
} from '../services/keep-service.js'

export default {
    template: `<div class="app-page keep-app">
        <h1> KEEP  </h1>
        <h3>Your notes. Brought together.</h3>
        <!-- <button @click="isAddNew = !isAddNew" class="keep-add-btn">{{addNewMsg}}</button>  -->
        <keep-add v-if="isAddNew" @noteSaved="renderNote"/>
        <keep-list :notes="notes"/>
        <keep-preview/>
        </div> `,
    data() {
        return {
            isAddNew: true,
            notes: []
        }
    },
    methods: {
        renderNote(noteType, note) {
            console.log(noteType, note);
        }
    },
    computed: {
        addNewMsg() {
            if (this.isAddNew) return 'Close me'
            else return 'Add new note!'
        }
    },
    created() {
        return keepService.query('keepNotes')
        .then (notes=> {this.notes = notes
            console.log(this.notes);
        })
    },
    components: {
        keepAdd,
        keepList,
        keepPreview
    }
}