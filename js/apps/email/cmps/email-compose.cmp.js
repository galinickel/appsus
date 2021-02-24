export default {
    name: 'email-compose',
    template: `<div class="email-compose-container">
        <form @submit.prevent="emailSubmitted">
            <input placeholder="to">
            <br>
            <input placeholder="subject">
            <br>
            <textarea placeholder="your email here..."></textarea>
            <button type="submit">send</button>
        </form>
        </div>`,
    methods: {
        emailSubmitted() {
            console.log('i was submitted!');
        }
    }
}

