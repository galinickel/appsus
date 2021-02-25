import { emailService } from '../services/email-service.js';

export default {
    template: `<div v-if="email" class="email-details-container">
        from: {{email.from}}
        <br>
        to: {{email.to}}
        <br>
        {{email.subject}}
        <br>
        {{email.body}}
        <br>
        <router-link :to="'./all'">back</router-link>
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
        }
    },
    created() {
        this.loadEmail();
    }
}