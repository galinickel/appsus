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
            let sentDate = new Date(this.email.sentAt);
            let currDate = new Date();

            console.log(sentDate, currDate);
            /// CHECK IF IT IS TODAY- SHOW ONLY HOUR

            ///CHECK IF A WHOLE YEAR PASSED- IF SO, SHOW THE FULL DATE INCLUDING YEAR

            /// IF IT'S FROM THIS YEAR- SHOW ONLY DAY AND MONTH


            return '12:40'
        }
    }
}
