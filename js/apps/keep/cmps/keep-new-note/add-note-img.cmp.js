export default {
    template: `<div class="add-note add-note-img">
        <form @submit.prevent="noteSaved">
            <input type="url"  v-model="userNote"  placeholder="Enter Img URL..." required
            
            title="The URL must be an image!">
        </form>
        </div>`,
    data() {
        return {
            userNote: null,
            userNoteType: 'img'
        }
    },
    methods: {
        noteSaved() {
            this.$emit('noteSaved', this.userNoteType, this.userNote)
            this.userNote=null
        },

    },
    computed: {},

}


/// this comp will be inside keep-app