export default {
    props: ['note'],
    template: `
        <div  class="editList">     
        <form @submit.prevent="handleList" class="">
            <input type="text" name=""  v-model="editInput">
            </form> 

        </div>
        `,
    data() {
        return {
            editInput: 'Enter a comma separated list...'
        }
    },
    methods: {
        noteEdited() {
            this.$emit('noteEdited', this.note.id, this.note.type, this.editInput)
        },
        handleList() { 
            this.editInput = this.editInput.split(',')
            this.noteEdited()
        }
    }
}