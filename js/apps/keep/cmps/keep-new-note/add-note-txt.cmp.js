
export default {
    template: `<div class="add-note add-note-txt">
        <form @submit.prevent="noteSaved">
        <input v-model="userNote"  type="text" class="add-new-note"  placeholder="Enter your note here..." required></input>
        </form>
        </div>`,
        data() { 
            return {
                userNote: null,
                userNoteType: 'txt'
            }
        },
        methods: {noteSaved() { 
        this.$emit('noteSaved', this.userNoteType, this.userNote)
        this.userNote=null
        }
        },
        computed: {
        },

}


/// this comp will be inside keep-app