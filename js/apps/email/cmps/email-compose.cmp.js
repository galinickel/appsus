import { emailService } from '../services/email-service.js'

export default {
    name: 'email-compose',
    template: `<div class="email-compose-container">
        <form @submit.prevent="emailSubmitted">
            <input v-model="to" placeholder="to">
            <br>
            <input v-model="subject" placeholder="subject">
            <br>
            <textarea v-model="body" placeholder="your email here..."></textarea>
            <button type="submit">send</button>
        </form>
        </div>`,
    data() {
        return {
            to: '',
            subject: '',
            body: ''
        }
    },
    methods: {
        emailSubmitted() {
            let newEmail = {
                folder: 'sent', subject: this.subject, from: 'me', to: this.to,
                body: this.body, isRead: false, sentAt: Date.now()
            };
            emailService.save(newEmail)
                .then(() => {
                    swal('Email sent', '', 'success');
                    this.$emit('emailSaved');
                })
        }
    }
}

