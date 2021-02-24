import keepPreview from '../cmps/keep-preview.cmp.js'

export default {
    props: ['notes'],
    template: `<div class="keep-list">
        <h1> Ready to see your notes?</h1> 
        <ul class="keep-preview-container">
            <li v-for="note in notes"  :key="note.id">
            <keep-preview :note="note"/>
            </li>
        </ul>
        </div>`,
    data() {
        return {}
    },
    methods: {

    },
    created() {

    },
    components: {
        keepPreview
    }
}


/// this comp will be inside keep-app