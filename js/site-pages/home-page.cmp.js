export default {
    template: `<div class="app-page home-page flex">
        <h1 class="main-title">No need to swing between apps.</h1>
    <div class="home-container flex">
    <h2 class="app-title" @click="routeTo('keep')">Keep</h2>
            <img src="imgs/rocking-horse.svg" alt="" class="horse">
            <h2 class="app-title" @click="routeTo('email/inbox')">Mail</h2>
            </div>
        </div>`,
    methods: {
        routeTo(app) {
            this.$router.push(`/${app}`)
        }
    }
}