import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
        <table class="email-list">
        <td v-for="email in emails" :key="email.id">
            <!-- <email-preview :email="email"/> -->
{{email}}
</td>
</table>
    `,
    methods: {
    },
    components: emailPreview
}
