import addNoteTxt from '../cmps/keep-new-note/add-note-txt.cmp.js'


export default {
    template: `<div class="keep-add">
        <h1> hi i'm keep add</h1> 
        <ul class="">
            <li @click="userNoteType = 'txt'">txt</li>
            <li @click="userNoteType = 'img'">img</li>
            <li @click="userNoteType = 'video'">video</li>
            <li @click="userNoteType = 'list'">list</li>
        </ul>
        <add-note-txt v-if="userNoteType === 'txt'"/>
        <p>selected note type:{{userNoteType}}</p>
        <button  class="keep-save-note" @click="logNote">Save Note</button>
        </div>`,
        data() { 
            return {
                userNote: null,
                userNoteType: null
            }
        },
        methods: {
            logNote(){
                console.log(this.userNote);
            }
        },
        computed: {
        },
        components: { 
            addNoteTxt
        }

}


/// this comp will be inside keep-app