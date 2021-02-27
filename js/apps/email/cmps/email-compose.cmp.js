import { eventBus } from '../../../site-services/event-bus.js'
import { emailService } from '../services/email-service.js'

export default {
    props: ['replayEmail', 'note'],
    name: 'email-compose',
    template: `<div class="email-compose">
        <form @submit.prevent="emailSubmitted">
            <button class="close-compose-email"  @click.prevent="composeClosed"> <i class="fas fa-times fa-lg"></i> </button>
            <h3 class="new-email-title">New Email</h3>
            <input v-model="to" placeholder="to:">
            <input v-model="subject" placeholder="subject:">
            <textarea rows="12" cols="9" v-model="body" placeholder="your email here..."></textarea>
            <button type="submit" class="email-submit-btn"><i class="far fa-paper-plane fa-2x"></i></button>
        </form>
        </div>`,
    data() {
        return {
            to: '',
            subject: '',
            body: '',
        }
    },
    methods: {
        setData() {
            if (this.replayEmail) {
                this.subject = `re: ${this.replayEmail.subject}`
                this.to = `${this.replayEmail.from}`
            }
            else if (this.note) this.body = this.note
        },
        emailSubmitted() {
            let newEmail = {
                folder: 'sent', subject: this.subject, from: 'me', to: this.to,
                body: this.body, isRead: false, sentAt: Date.now()
            };
            emailService.save(newEmail)
                .then(() => {
                    swal({ text: 'Email Sent', buttons: false, timer: 1200 })
                    this.$emit('emailSaved');
                })
        },
        composeClosed() {
            this.$emit('composeClosed');
        },
    },
    created() {
        this.setData();
    }
}