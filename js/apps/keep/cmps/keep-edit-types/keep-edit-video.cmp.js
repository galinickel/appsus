export default {
    props: ['note'],
    template: `
        <div  class="editVideo">     
        <form @submit.prevent="noteEdited" class="">
        <input type="url" v-model="editInput" placeholder="Enter Youtube URL..." pattern="http://www\.youtube\.com\/(.+)|https://www\.youtube\.com\/(.+)" required/>
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
            console.log(this.editInput);
            this.$emit('noteEdited', this.note.id, this.note.type, this.editInput)
        }
    }
}