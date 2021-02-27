import addNoteTxt from '../cmps/keep-new-note/add-note-txt.cmp.js'
import addNoteImg from '../cmps/keep-new-note/add-note-img.cmp.js'
import addNoteList from '../cmps/keep-new-note/add-note-list.cmp.js'
import addNoteVideo from './keep-new-note/add-note-video.cmp.js'

import {
    keepService
} from '../services/keep-service.js'


export default {
    template: `<div class="keep-add">
        <div class="add-container flex">
        <component :is="addType" @noteSaved="saveNote"></component>
        <ul class="flex">
            <li @click="addType = 'addNoteTxt'"><i title="Add Text" class="far fa-file-alt"></i></li>
            <li @click="addType = 'addNoteImg'"><i title="Add Image URL" class="far fa-file-image"></i></li>
            <li @click="addType = 'addNoteVideo'"><i title="Add Video" class="fab fa-youtube"></i></li>
            <li @click="addType = 'addNoteList'"><i title="Add List" class="fas fa-list-ul"></i></li>
        </ul>
        </div>
        </div>`,
    data() {
        return {
            userNote: null,
            userNoteType: 'txt',
            addType: 'addNoteTxt',
        }
    },
    methods: {
        saveNote(noteType, note) {
            keepService.addNote(noteType, note)
                .then(() => { this.$emit('noteSaved') })
        }
    },
    computed: {},
    created() {
        if (this.$route.query.email) {
            this.saveNote('txt', '✉️' + this.$route.query.email);
            this.$router.push('/keep')
            swal({
                text: "Your email has been saved as note",
                buttons: false,
                timer: 1200
            });
        }
    },
    components: {
        addNoteTxt,
        addNoteImg,
        addNoteList,
        addNoteVideo,
    }

}


/// this comp will be inside keep-app