export default {
    props: ['emails'],
    name: 'email-folders',
    template: `<section class="email-folders">
            <div class="folder" :class="{'active-folder': activeFolder === 'inbox'}"
            @click="setActiveFolder('inbox')">
            <i class="fas fa-inbox"></i> Inbox <span v-if="unreadCount" class="unread-count"> ({{unreadCount}}) </span>
            </div>
            <div class="folder" :class="{'active-folder': activeFolder === 'sent'}" @click="setActiveFolder('sent')"><i class="far fa-paper-plane"></i> Sent</div>
            <div class="folder" :class="{'active-folder': activeFolder === 'all'}" @click="setActiveFolder('all')">All</div>
            <!-- <li>Drafts</li> -->
            <!-- <li>Trash</li> -->
</section>`,
    data() {
        return {
            activeFolder: 'inbox'
        }
    },
    methods: {
        setActiveFolder(folder) {
            this.$router.push(`/email/${folder}/`).catch(err => {
                if (err.name !== 'NavigationDuplicated'
                    && !err.message.includes('Avoided redundant navigation to current location')) {
                    logError(err);
                }
            });
            this.activeFolder = folder;
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