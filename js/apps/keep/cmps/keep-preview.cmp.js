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
    <div :style=" {backgroundColor: noteColor}" :class="{pinned:isPinned}" class="keep-preview flex main-layout " @mouseover="editBar=true" @mouseleave="editBar=false">
        <i class="fas fa-thumbtack keep-preview-pin" :class="{pinned:isPinned}" @click="isPinned = !isPinned"></i>
        <component :is="previewType" :note="note"></component>
        <previewEditBar v-if="editBar" @changeColor="colorChanged" @noteErased="noteErased" :note="note"/>
    </div>`,
    data() {
        return {
            editBar: false,
            noteColor: null,
            previewType: null,
            isPinned: false
        }
    },
    methods: {

        noteErased(noteId) {
            swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this note",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Your note was successfully deleted", {
                            icon: "success"
                        });
                        eventBus.$emit('noteErased', noteId)
                    }
                })
        },
        colorChanged(userColor) {
            this.noteColor = userColor
            eventBus.$emit('noteColorChagned', noteId)
        }
    },
    created() {
        if (this.note.type === 'txt') this.previewType = 'txtPreview'
        else if (this.note.type === 'img') this.previewType = 'imgPreview'
        else if (this.note.type === 'list') this.previewType = 'listPreview'
        else if (this.note.type === 'video') this.previewType = 'vidPreview'
    },
    components: {
        previewEditBar,
        txtPreview,
        imgPreview,
        listPreview,
        vidPreview
    }

}