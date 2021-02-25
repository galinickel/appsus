export default {
    props: ['note'],
    template: `<span>
        <i class="fas fa-thumbtack keep-preview-pin"></i>
        <img :src="note.info"></img>
</span>`}