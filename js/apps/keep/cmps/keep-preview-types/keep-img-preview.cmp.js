export default {
    props: ['note'],

    template: `<span>
        <img :src="note.info"></img>
</span>`}