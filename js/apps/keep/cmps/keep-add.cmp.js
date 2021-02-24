export default {
    template: `<div class="keep-add">
        <h1> hi i'm keep add</h1> 
        <textarea v-model="userNote"  rows="4" cols="25" class="add-new-note"></textarea>
        <button  class="keep-save-note" @click="logNote">Save Note</button>
        </div>`,
        data() { 
            return {
                userNote: null
            }
        },
        methods: {
            logNote(){
                console.log(this.userNote);
            }
        },
        computed: {
        },

}


/// this comp will be inside keep-app