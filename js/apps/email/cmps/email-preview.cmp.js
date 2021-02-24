export default {
    props: ['email'],
    template: `<div class="email-preview">
    <td class="email-from">{{email.from}}</td>
    <td class="email-subject">{{email.subject}}</td>
    <td class="email-body">{{bodyPreview}}</td>
    <td class="email-date">{{emailDate}}</td>
</div>`,
    computed: {
        bodyPreview() {
            return this.email.body.substr(0, 49) + '...'
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
