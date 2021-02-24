
import emailCompose from '../cmps/email-compose.cmp.js'
import emailList from '../cmps/email-list.cmp.js'
import emailPreview from '../cmps/email-preview.cmp.js'

export default {
    template: `<div class="app-page">
        <h1> hi i'm EMAIL APP </h1>
        <email-compose/>
        <email-list/>
        <email-preview/>
        
        </div> `,
    components: {emailCompose,
    emailList,
    emailPreview}
}