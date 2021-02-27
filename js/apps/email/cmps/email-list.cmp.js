import emailPreview from './email-preview.cmp.js'

export default {

    props: ['emails'],
    template: `<div class="email-table-container">
        <table v-if="folderEmails" class="email-table">
        <tr v-for="email in folderEmails" :key="email.id" :class="{read: email.isRead}" @click="readEmail(email, email.id)">
            <email-preview :email="email"/>
            </tr>
            </table>
            <h4 v-if="!folderEmails.length">it feels empty... no emails here yet</h4>
            </div>`,
    computed: {
        folderEmails() {
            const folder = this.$route.params.folder;
            if (!folder || folder === 'all') return this.emails;

            let fileteredEmails = this.emails;
            return fileteredEmails.filter(email => email.folder === folder)
        }
    },
    methods: {
        readEmail(email, id) {
            this.$emit('emailRead', email)
            this.$router.push('/email/' + this.$route.params.folder + '/' + id)
        }
    },
    components: {
        emailPreview
    }
}