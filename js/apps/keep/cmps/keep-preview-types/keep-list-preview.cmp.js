export default {
    props: ['note'],
    template: `<span>
        <ul>
            <li v-for="item in note.info">{{item}}</li>
        </ul>
</span>`}