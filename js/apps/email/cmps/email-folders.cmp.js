export default {
    props: ['emails'],
    name: 'email-folders',
    template: `<aside class="email-folders">
        <ul>
            <li @click="routeTo('inbox')">
                Inbox <span v-if="unreadCount" class="unread-count"> ({{unreadCount}}) </span>
            </li>
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
    },
    computed: {
        unreadCount() {
            let unread = this.emails.filter(email => {
                return email.folder === 'inbox' && !email.isRead;
            });
            return unread.length;
        }
    }
}