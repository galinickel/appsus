export default {
    props: ['note'],
    template: `<div class="keep-preview">
        <p v-if="note.type==='txt'">{{note.note}}</p>
        <img v-if="note.type==='img'" :src="note.note">
        <iframe v-if="note.type==='video'" :src="note.note"> </iframe>
        <ul v-if="note.type==='list'">
            <li v-for="item in note.note">{{item}}</li>
        </ul>
        </div>`,
    computed: {

    },

}
