export default {
    template: `<div class="app-page home-page flex">
        <h1 class="main-title">No need to swing between apps.</h1>
    <div class="home-container flex">
    <h1 class="app-title" @click="routeTo('keep')">Keep</h1>
            <img src="imgs/rocking-horse.svg" alt="" class="horse">
            <h1 class="app-title" @click="routeTo('email/inbox')">Mail</h1>
            </div>
        </div>`,
    methods: {
        routeTo(app) {
            this.$router.push(`/${app}`)
        }
    }
}