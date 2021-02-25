export default {
    props: ['note'],
    template: `
        <div  class="edit-bar-container"> 
        <ul  class="flex edit-bar">
            <li><i class="far fa-edit"></i></li>
            <li><i class="fas fa-palette"><label ><input type="color" v-model="noteColor" @input="changedColor" class="hidden color-input"></label></i></li>
            <li><i class="fas fa-envelope-open-text"></i></li>
            <li><i class="far fa-trash-alt" @click.stop="noteErased(note.id)"></i></li>
        </ul>
        </div>
        `,
        data(){
            return { 
                noteColor:null
            }
        },
    methods: {
        changedColor() { 
            this.$emit('changeColor',this.noteColor)
        },
        noteErased(noteId){
            this.$emit('noteErased',noteId)
        }
    }}