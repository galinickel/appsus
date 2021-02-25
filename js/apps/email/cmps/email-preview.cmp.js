import { eventBus } from '../../../site-services/event-bus.js'

export default {
    props: ['email'],
    template: `<div class="email-preview">
    <td class="email-from">{{email.from}}</td>
    <td class="email-subject">{{email.subject}}</td>
    <td class="email-body">{{bodyPreview}}</td>
    <td class="email-date">{{emailDate}}</td>
    <td class="email-erease" @click.stop="emailEreased(email.id)">🗑️</td>
    <td class="email-toggle-read" @click.stop="readToggled(email)">{{toggleReadBtn}}</td>
</div>`,
    methods: {
        emailEreased(id) {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this email",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Your email has been deleted", {
                            icon: "success",
                        });
                        eventBus.$emit('emailEreased', id)
                    }
                });
        },
        readToggled(email) {
            eventBus.$emit('readToggled', email)
        }
    },
    computed: {
        bodyPreview() {
            return this.email.body.substr(0, 49) + '...'
        },
        toggleReadBtn() {
            return this.email.isRead ? 'mark unread' : 'mark read'
        },
        emailDate() {
            let sentDate = new Date(this.email.sentAt).toString()
            let currDate = new Date().toString()

            if (sentDate.substr(0, 15) === currDate.substr(0, 15)) {
                return sentDate.substr(16, 5);
            }
            /// if it's the same year- show date without year
            else if (sentDate.substr(11, 4) === currDate.substr(11, 4)) {
                return sentDate.substr(3, 6);
            }
            /// if it's from another year- show full date 
            else return new Date(this.email.sentAt).toLocaleDateString()
        }
    }
}
