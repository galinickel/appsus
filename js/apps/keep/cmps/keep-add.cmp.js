import addNoteTxt from '../cmps/keep-new-note/add-note-txt.cmp.js'
import addNoteImg from '../cmps/keep-new-note/add-note-img.cmp.js'
import addNoteList from '../cmps/keep-new-note/add-note-list.cmp.js'
import addNoteVideo from '../cmps/keep-new-note/add-note-vid.cmp.js'
import {
    keepService
} from '../services/keep-service.js'


export default {
    template: `<div class="keep-add">
        <div class="add-container flex">
        <component :is="addType" @noteSaved="saveNote"></component>
        <ul class="flex">
            <li @click="addType = addNoteTxt"><i class="far fa-file-alt"></i></li>
            <li @click="addType = 'addNoteImg'"><i class="far fa-file-image"></i></li>
            <li @click="addType = 'addNoteVideo'"><i class="fab fa-youtube"></i></li>
            <li @click="addType = 'addNoteList'"><i class="fas fa-list-ul"></i></li>
        </ul>
        </div>
        </div>`,
    data() {
        return {
            userNote: null,
            userNoteType: 'txt',
            addType: 'addNoteTxt'
        }
    },
    methods: {
        saveNote(noteType, note) {
            keepService.addNote(noteType, note)
                .then(()=>{this.$emit('noteSaved')})
        }
    },
    computed: {},
    components: {
        addNoteTxt,
        addNoteImg,
        addNoteList,
        addNoteVideo
    }

}


/// this comp will be inside keep-app