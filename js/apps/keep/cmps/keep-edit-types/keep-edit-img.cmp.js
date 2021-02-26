export default {
    props: ['note'],
    template: `
        <div class="note-edit edit-img">    
            <form @submit.prevent="noteEdited" class="">
            <input ref="userInput" type="url" name=""  v-model="editInput">
            </form> 
        </div>
        `,
    data() {
        return {
            editInput: this.note.info
        }
    },
    methods: {
        noteEdited() {
            this.$emit('noteEdited', this.note.id, this.note.type, this.editInput)
        }
    },
    mounted(){
        this.$refs.userInput.focus();
    }
}