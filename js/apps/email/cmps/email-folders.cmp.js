export default {
    name: 'book-filter',
    template: `<aside class="email-folders">
        <ul>
            <li @click="routeTo('inbox')">Inbox</li>
            <li @click="routeTo('sent')">Sent</li>
            <li @click="routeTo('all')">All</li>
            <!-- <li>Drafts</li> -->
            <!-- <li>Trash</li> -->
        </ul>
</aside>`,
    data() {
        return {
            folders: ['inbox', 'sent', 'all']
        }
    },
    methods: {
        routeTo(folder) {
            if (this.$route.params.folder === folder) return;
            if (!this.folders.includes(this.$route.params.folder)) {
                this.$router.push(`/email/${folder}/`)
            }
            this.$router.push(`/email/${folder}/`)
        }
    }
}