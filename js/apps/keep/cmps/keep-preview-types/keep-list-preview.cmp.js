export default {
    props: ['note'],
    template: `<span>
        <i class="fas fa-thumbtack keep-preview-pin"></i>
        <ul>
            <li v-for="item in note.info">{{item}}</li>
        </ul>
</span>`}