import keepPreview from '../cmps/keep-preview.cmp.js'

export default {
    props: ['notes'],
    template: `<div class="keep-list ">
        <ul class="pinned-preview-container short-length">
            <keep-preview :note="note" v-for="note in getPinned"  :key="note.id"/>
        </ul>     

<hr>
        <ul class="keep-preview-container ">
            <keep-preview :note="note" v-for="note in getUnpinned"  :key="note.id"/>
        </ul>
        </div>`,
    data() {
        return {
            unpinnedNotes: null
        }
    },
    methods: {},
    created() {},
    computed: {
        getUnpinned() {
            let unpinnedNotes = this.notes;
            return unpinnedNotes.filter(note => !note.isPinned)
        },
        getPinned() {
            let pinnedNotes = this.notes;
            return pinnedNotes.filter(note => note.isPinned)
        }
    },
    components: {
        keepPreview
    }
}


/// this comp will be inside keep-app