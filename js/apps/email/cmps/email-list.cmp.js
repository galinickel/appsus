import emailPreview from './email-preview.cmp.js'

export default {

    props: ['emails'],
    template: `<table v-if="emails" class="email-table">
        <tr v-for="email in emails" :key="email.id" :class="{read: email.isRead}" @click="readEmail(email, email.id)">
            <email-preview :email="email"/>
            </tr>
            </table>`,
    methods: {
        readEmail(email, id) {
            this.$emit('emailRead', email)
            this.$router.push('/email/' + id)
        }
    },
    components: {
        emailPreview
    }
}