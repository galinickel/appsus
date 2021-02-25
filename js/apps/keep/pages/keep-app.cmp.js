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
        renderNote() {
            this.loadNotes();
        },
        loadNotes() { 
            return keepService.query('keepNotes').then(notes=>
                {this.notes=notes})
        }
    },
    computed: {
    },
    created() {
        this.loadNotes();
    },
    components: {
        keepAdd,
        keepList,
        keepPreview
    }
}