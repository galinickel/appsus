import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../site-services/event-bus.js'
import emailCompose from '../cmps/email-compose.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'


export default {
    name: 'email-app',
    template: `<div class="app-page">
        <h2>Email</h2>
        <button @click="composing = !composing"><i :class="newEmailBtnTxt"></i></button>
        <template v-if="composing">
            <email-compose @emailSaved="loadEmails" :emails="emailsToDisplay"/></template>
        <email-filter @filterSet="setFilter"/>
        <router-view @emailRead="markAsRead" :emails="emailsToDisplay"/>
        </div> `,
    data() {
        return {
            emails: [],
            filterBy: null,
            composing: false
        }
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => {
                    this.emails = emails
                    this.composing = false
                });
        },
        setFilter(filter) {
            this.filterBy = filter;
        },
        deleteEmail(id) {
            emailService.remove(id)
                .then(() => {
                    this.loadEmails();
                })
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
        newEmailBtnTxt() {
            return this.composing ? 'fas fa-times fa-lg' : 'fas fa-pen-fancy fa-lg'
        },
        emailsToDisplay() {
            if (!this.filterBy) return this.emails;
            let filteredEmails = this.emails;

            if (this.filterBy.byContent) {
                filteredEmails = emailService.searchByContent(this.emails, this.filterBy.byContent);
            }

            if (this.filterBy.byStatus)


                return filteredEmails;
        }
    },
    created() {
        this.loadEmails();

        eventBus.$on('emailEreased', this.deleteEmail);
        eventBus.$on('readToggled', this.toggleRead);

    },
    components: {
        emailCompose,
        emailFilter
    }
}