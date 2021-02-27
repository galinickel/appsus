import {
    eventBus
} from "../../../site-services/event-bus.js";
import previewEditBar from "./keep-preview-edit-bar.cmp.js"
import txtPreview from "./keep-preview-types/keep-txt-preview.cmp.js"
import imgPreview from "./keep-preview-types/keep-img-preview.cmp.js"
import listPreview from "./keep-preview-types/keep-list-preview.cmp.js"
import vidPreview from "./keep-preview-types/keep-vid-preview.cmp.js"


export default {
    props: ['note'],
    template: `
    <transition name="fadeHeight">
    <div :style="{backgroundColor: noteColor}" :class="{pinned:isPinned}" class="keep-preview flex main-layout " @mouseover="editBar=true" @mouseleave="checkIfEditStopped">
    <i class="fas fa-thumbtack keep-preview-pin" :class="{pinned:isPinned}" @click="toggleNotePinned"></i>
        <component :is="previewType" :note="note"></component>
        <transition name="fadeHeight">
        <previewEditBar v-if="editBar" @changeColor="colorChanged" @noteErased="noteErased" @noteEdit="toggleNoteEdit" :note="note"/>
        </transition>
    </div></transition>
    `,

    data() {
        return {
            editBar: false,
            noteColor: null,
            previewType: null,
            isPinned: false,
            isEditing: false
        }
    },
    methods: {

        noteErased(noteId) {
            eventBus.$emit('noteErased', noteId);
            swal({
                text: "Your note has been deleted",
                buttons: false,
                timer: 1200
            });
        },
        colorChanged(userColor) {
            this.noteColor = userColor
            eventBus.$emit('noteColorChanged', this.note.id, this.noteColor)
        },
        toggleNotePinned() {
            this.isPinned = !this.isPinned
            eventBus.$emit('toggleNotePinned', this.note.id)
        },
        toggleNoteEdit() {
            this.isEditing = !this.isEditing
            eventBus.$emit('toggleNoteEdit', this.note.id)
        },
        checkIfEditStopped() {
            if (!this.isEditing) this.editBar = false
            else this.editBar = true
        }
    },
    created() {
        if (this.note.type === 'txt') this.previewType = 'txtPreview'
        else if (this.note.type === 'img') this.previewType = 'imgPreview'
        else if (this.note.type === 'list') this.previewType = 'listPreview'
        else if (this.note.type === 'video') this.previewType = 'vidPreview'
        this.noteColor = this.note.noteColor
    },
    components: {
        previewEditBar,
        txtPreview,
        imgPreview,
        listPreview,
        vidPreview,
    }

}