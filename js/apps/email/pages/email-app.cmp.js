import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../site-services/event-bus.js'
import emailCompose from '../cmps/email-compose.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailFolders from '../cmps/email-folders.cmp.js'


export default {
    name: 'email-app',
    template: `<section class="app-page">
        <email-filter @filterSet="setFilter" @sortSet="setSort"/>
        <div class="main-email-container"> 
        <aside class="email-aside">
            <button class="compose-email-btn" @click="isComposing = !isComposing"><i :class="'fas fa-pen-fancy fa-lg'"> </i></button>
            <email-folders :emails="emails"/>
        </aside>
        <router-view @replayEmailSet="setReplyEmail" @emailRead="markAsRead" :emails="emailsToDisplay"/>
    </div>
    <transition name="height">
    <div v-if="isComposing">
        <email-compose @emailSaved="saveEmail" @composeClosed="closeCompose" :replayEmail="replayEmail" :note="note"/>
    </div>
</transition> 
        </section> `,
    data() {
        return {
            emails: [],
            filterBy: null,
            sortBy: null,
            isComposing: false,
            replayEmail: null,
            note: null
        }
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => {
                    this.emails = emails
                });
        },
        setFilter(filter) {
            this.filterBy = filter;
        },
        setSort(sort) {
            this.sortBy = sort;
        },
        setReplyEmail(email) {
            this.replayEmail = email;
            this.isComposing = true;
        },
        closeCompose() {
            this.isComposing = false;
            this.replayEmail = null;
        },
        saveEmail() {
            this.isComposing = false;
            this.loadEmails();
        },
        deleteEmail(id) {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this email",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal({ text: 'Your email has been deleted', buttons: false, timer: 1200 });
                        emailService.remove(id)
                            .then(() => {
                                if (this.$route.params.emailId) this.$router.push(`./`);
                                this.loadEmails();
                            })
                    }
                });

        },
        markAsRead(email) {
            email.isRead = true;
            emailService.update(email)
                .then(() => {
                    this.loadEmails();
                })
        },
        toggleRead(email) {
            email.isRead = !email.isRead;
            emailService.update(email)
                .then(() => {
                    this.loadEmails();
                })
        }
    },
    computed: {
        emailsToDisplay() {
            let emailsToDisplay = this.emails;

            if (this.filterBy) {
                if (this.filterBy.byContent)
                    emailsToDisplay = emailService.searchByContent(emailsToDisplay, this.filterBy.byContent);
                if (this.filterBy.byStatus)
                    emailsToDisplay = emailService.filterByStatus(emailsToDisplay, this.filterBy.byStatus);
            }

            if (this.sortBy) emailsToDisplay = emailService.sortBy(emailsToDisplay, this.sortBy)

            return emailsToDisplay;
        }
    },
    created() {
        this.loadEmails();

        eventBus.$on('emailEreased', this.deleteEmail);
        eventBus.$on('readToggled', this.toggleRead);

        if (this.$route.query.note) {
            this.note = this.$route.query.note;
            this.isComposing = true;
            this.$router.push('/email/inbox')
        }

    },
    components: {
        emailCompose,
        emailFilter,
        emailFolders
    }
}