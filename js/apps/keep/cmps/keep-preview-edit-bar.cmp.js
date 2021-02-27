import editTxt from '../cmps/keep-edit-types/keep-edit-txt.cmp.js'
import editList from '../cmps/keep-edit-types/keep-edit-list.cmp.js'
import editImg from '../cmps/keep-edit-types/keep-edit-img.cmp.js'
import editVideo from '../cmps/keep-edit-types/keep-edit-video.cmp.js'
import {
    eventBus
} from "../../../site-services/event-bus.js";

export default {
    props: ['note'],
    template: `
        <div  class="edit-bar-container"> 
        <ul  class="flex edit-bar">
            <li><i title="Edit" class="far fa-edit" @click.stop="noteEdit(note.id)"></i></li>
            <li><i title="Change Background" class="fas fa-palette"><label ><input type="color" v-model="noteColor" @input="changedColor" class="hidden color-input"></label></i></li>
            <li><i title="Send as Email" @click="sendAsEmail(note.info)" class="fas fa-envelope-open-text"></i></li>
            <li><i title="Delete Note" class="far fa-trash-alt" @click.stop="noteErased(note.id)"></i></li>
        </ul>
        <transition name="fadeHeight">
        <component v-if="note.isEditing" :is="editType" :note="note" @noteEdited="renderNoteEdit"></component>
</transition>
        </div>
        `,
    data() {
        return {
            noteColor: null,
            editType: null
        }
    },
    methods: {
        changedColor() {
            this.$emit('changeColor', this.noteColor)
        },
        noteErased(noteId) {
            this.$emit('noteErased', noteId)
        },
        noteEdit(noteId) {
            this.$emit('noteEdit', noteId)
        },
        renderNoteEdit(noteId, noteType, editInfo) {
            eventBus.$emit('noteEdited', noteId, noteType, editInfo),
                this.editType = null
        },
        sendAsEmail(noteInfo) {
            this.$router.push(`/email/inbox?note=${noteInfo}`)
        }
    },
    created() {
        if (this.note.type === 'txt') this.editType = 'editTxt'
        else if (this.note.type === 'img') this.editType = 'editImg'
        else if (this.note.type === 'list') this.editType = 'editList'
        else if (this.note.type === 'video') this.editType = 'editVideo'
    },
    components: {
        editTxt,
        editList,
        editImg,
        editVideo
    }
}