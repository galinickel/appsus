import {
    emailService
} from '../services/email-service.js';

export default {
    template: `<div v-if="email" class="email-details-container email-table-helper flex">
        <div class="email-details-info ">
        <p>From: {{email.from}}</p>
        <p>To: {{email.to}}</p>
        <p>Subject: {{email.subject}}</p>
    </div>
    <p>{{email.body}}</p> 
<div class="email-actions-container flex">
    <button @click="setReplayEmail(email)"><i class="fas fa-reply fa-2x"></i></button>
        <button @click="saveAsNote(email.body)"><i class="far fa-sticky-note fa-2x"></i></button>  
    </div>
        <router-link :to="'./'"><i class="inbox-redirecter fas fa-arrow-left fa-lg"></i></router-link>    
    </div>`,
    data() {
        return {
            email: null
        }
    },
    methods: {
        loadEmail() {
            const id = this.$route.params.emailId
            emailService.getById(id)
                .then(email => {
                    this.email = email
                });
        },
        setReplayEmail(email) {
            this.$emit('replayEmailSet', email);
        },
        saveAsNote(emailTxt) {
            this.$router.push(`/keep?email=${emailTxt}`);
        }
    },
    created() {
        this.loadEmail();
    }
}