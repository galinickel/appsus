export default {
    props: ['note'],
    template: `<Section>
        <i class="fas fa-thumbtack keep-preview-pin"></i>
        <p>{{note.info}}</p>
</section>`}