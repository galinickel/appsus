export default {
    props: ['note'],
    template: `
        <div  class="editTxt">     
        <form @submit.prevent="noteEdited" class="">
            <input type="text" name=""  v-model="editInput">
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
    }
}