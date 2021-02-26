export default {
    template: `<div class="add-note add-note-video">
        <form @submit.prevent="noteSaved">
        <input type="url" v-model="userNote" placeholder="Enter Youtube URL..." pattern="http://www\.youtube\.com\/(.+)|https://www\.youtube\.com\/(.+)" required/>
        </form>
        </div>`,
    data() {
        return {
            userNote: null,
            userNoteType: 'video'
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