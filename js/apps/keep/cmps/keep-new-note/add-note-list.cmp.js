
export default {
    template: `<div class="add-note add-note-list">
        <form @submit.prevent="handleList">
            
        <input v-model="userNote"  type="text" class="add-new-note"  placeholder="Please enter your list, seperated by commas." required></input>
        </form>
        </div>`,
        data() { 
            return {
                userNote: null,
                userNoteType: 'list'
            }
        },
        methods: {noteSaved() { 
        this.$emit('noteSaved', this.userNoteType, this.userNote)
        this.userNote=null
        },
        handleList() { 
            this.userNote = this.userNote.split(',')
            this.noteSaved()
        }
        },
        computed: {
        },

}


/// this comp will be inside keep-app