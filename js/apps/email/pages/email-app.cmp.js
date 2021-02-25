import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../site-services/event-bus.js'
import emailCompose from '../cmps/email-compose.cmp.js'


export default {
    name: 'email-app',
    template: `<div class="app-page">
        <h2>Email</h2>
        <button @click="composing = !composing"><i :class="newEmailBtnTxt"></i></button>
        <template v-if="composing"><email-compose @emailSaved="loadEmails" :emails="emails"/></template>
        <router-view @emailRead="markAsRead" :emails="emails"/>
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
        }
    },
    created() {
        this.loadEmails();

        eventBus.$on('emailEreased', this.deleteEmail);
        eventBus.$on('readToggled', this.toggleRead);

    },
    components: {
        emailCompose
    }
}