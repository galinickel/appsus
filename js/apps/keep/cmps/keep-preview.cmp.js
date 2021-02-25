import {
    eventBus
} from "../../../site-services/event-bus.js";

export default {
    props: ['note'],
    template: `<div :style=" {backgroundColor: noteColor}" :class="note.id" class="keep-preview flex main-layout " @mouseover="editBar=true" @mouseleave="editBar=false">
        <i class="fas fa-thumbtack keep-preview-pin"></i>
        <p v-if="note.type==='txt'">{{note.note}}</p>
        <img v-if="note.type==='img'" :src="note.note">
        <iframe v-if="note.type==='video'" :src="note.note"> </iframe>
        <ul v-if="note.type==='list'">
            <li v-for="item in note.note">{{item}}</li>
        </ul>
        <div  class="edit-bar-container"> 
        <ul v-if="editBar" class="flex edit-bar">
            <li><i class="far fa-edit"></i></li>
            <li><i class="fas fa-palette"><label ><input type="color"  v-model="noteColor"  class="hidden  color-input"></label></i></li>
            <li><i class="fas fa-envelope-open-text"></i></li>
            <li><i class="far fa-trash-alt" @click.stop="noteErased(note.id)"></i></li>
        </ul>
        </div>
        </div>`,
    data() {
        return {
            editBar: false,
            noteColor: null,
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
        }
    },

}