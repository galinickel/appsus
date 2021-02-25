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
        <add-note-txt v-if="userNoteType === 'txt'" @noteSaved="saveNote"/>
        <add-note-img v-if="userNoteType === 'img'" @noteSaved="saveNote"/>
        <add-note-list v-if="userNoteType === 'list'" @noteSaved="saveNote"/>
        <add-note-video v-if="userNoteType === 'video'" @noteSaved="saveNote"/>
        <ul class="flex">
            <li @click="userNoteType = 'txt'"><i class="far fa-file-alt"></i></li>
            <li @click="userNoteType = 'img'"><i class="far fa-file-image"></i></li>
            <li @click="userNoteType = 'video'"><i class="fab fa-youtube"></i></li>
            <li @click="userNoteType = 'list'"><i class="fas fa-list-ul"></i></li>
        </ul>
        </div>
        </div>`,
    data() {
        return {
            userNote: null,
            userNoteType: 'txt'
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