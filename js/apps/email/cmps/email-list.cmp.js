import emailPreview from './email-preview.cmp.js'

export default {

    props: ['emails'],
    template: ` <table class="email-table"><tr v-for="email in emails" :key="email.id"class="email-table-item"><email-preview :email="email"/></tr></table>`,
    methods: {}

    ,
    components: {
        emailPreview
    }
}