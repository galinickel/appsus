import { emailService } from '../services/email-service.js'
import emailCompose from '../cmps/email-compose.cmp.js'


export default {
    name: 'email-app',
    template: `<div class="app-page">
        <h1> hi i'm EMAIL APP </h1>
        <button @click="composing = !composing">New Email</button>
        <template v-if="composing"><email-compose :emails="emails"/></template>
        <router-view :emails="emails"/>
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
            emailService.query().then(emails => {
                this.emails = emails
            })
        },
    },
    created() {
        this.loadEmails();
    },
    components: {
        emailCompose
    }
}