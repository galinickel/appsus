import { emailService } from '../services/email-service.js'

export default {
    name: 'email-compose',
    template: `<div class="email-compose-container">
        <form @submit.prevent="emailSubmitted">
            <button class="close-compose-email"  @click.prevent="composeClosed"> <i class="fas fa-times fa-lg"></i> </button>
            <h3 class="new-email-title">New Email</h3>
            <input v-model="to" placeholder="to:">
            <input v-model="subject" placeholder="subject:">
            <textarea rows="15" cols="50" v-model="body" placeholder="your email here..."></textarea>
            <button type="submit" class="email-submit-btn"><i class="far fa-paper-plane fa-2x"></i></button>
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
                    swal({ text: 'Email Sent', buttons: false, icon: 'success', timer: 1500 })
                    this.$emit('emailSaved');
                })
        },
        composeClosed() {
            this.$emit('composeClosed');
        }
    }
}

