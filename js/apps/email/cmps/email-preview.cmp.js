import { eventBus } from '../../../site-services/event-bus.js'

export default {
    props: ['email'],
    template: `<div class="email-preview" @mouseover="editBar=true" @mouseleave="editBar=false">
    <td class="email-from">{{email.from}}</td>
    <td class="email-subject">{{email.subject}}</td>
    <td class="email-body">{{bodyPreview}}</td>
    <td class="email-date">{{emailDate}}</td>
    <td class="email-edit-bar">
    <button class="email-edit-icon" @click.stop="readToggled(email)">
        <i v-if="editBar" :class="toggleReadIcon"></i></button>
    <button class="email-edit-icon" @click.stop="emailEreased(email.id)">
        <i v-if="editBar" class="far fa-trash-alt fa-lg" ></i></button>
    </td>
</div>`,
    data() {
        return {
            editBar: false
        }
    },
    methods: {
        emailEreased(id) {
            eventBus.$emit('emailEreased', id)

        },
        readToggled(email) {
            eventBus.$emit('readToggled', email)
        }
    },
    computed: {
        bodyPreview() {
            return this.email.body.substr(0, 25) + '...'
        },
        toggleReadIcon() {
            return this.email.isRead ? 'far fa-envelope fa-lg' : 'far fa-envelope-open fa-lg'
        },
        emailDate() {
            let sentDate = new Date(this.email.sentAt).toString()
            let currDate = new Date().toString()

            if (sentDate.substr(0, 15) === currDate.substr(0, 15)) {
                return sentDate.substr(16, 5);
            }
            /// if it's the same year- show date without year
            else if (sentDate.substr(11, 4) === currDate.substr(11, 4)) {
                return sentDate.substr(3, 7);
            }
            /// if it's from another year- show full date 
            else return new Date(this.email.sentAt).toLocaleDateString()
        }
    }
}
