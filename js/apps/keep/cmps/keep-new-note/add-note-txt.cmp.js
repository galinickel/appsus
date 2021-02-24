// //
export default {
    template: `<div class="add-note-txt">
        <h1> hi i'm add txt</h1> 
        <textarea v-model="userNote"  rows="4" cols="25" class="add-new-note"></textarea>

        </div>`,
        data() { 
            return {
                userNote: null,
                userNoteType: null
            }
        },
        methods: {
        },
        computed: {
        },

}


/// this comp will be inside keep-app