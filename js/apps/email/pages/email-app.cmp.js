import { emailService } from '../services/email-service.js'
import emailCompose from '../cmps/email-compose.cmp.js'


export default {
    name: 'email-app',
    template: `<div class="app-page">
        <h2>Email</h2>
        <button @click="composing = !composing">{{newEmailBtnTxt}}</button>
        <template v-if="composing"><email-compose @emailSaved="loadEmails" :emails="emails"/></template>
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
                this.composing = false
            })
        },
    },
    computed: {
        newEmailBtnTxt() {
            return this.composing ? 'Cancel' : 'New Email'
        }
    },
    created() {
        this.loadEmails();
    },
    components: {
        emailCompose
    }
}