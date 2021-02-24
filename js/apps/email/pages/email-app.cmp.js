
import emailCompose from '../cmps/email-compose.cmp.js'

export default {
    template: `<div class="app-page">
        <h1> hi i'm EMAIL APP </h1>
        <email-compose/>
        <router-view></router-view>
        </div> `,
    components: {
        emailCompose
    }
}