export default {
    template: `
    <header class="site-header">
    <router-link :to="'/'"><h1>AppSus</h1></router-link>
    <ul>
        <li><router-link :to="'/keep'">Keep</router-link></li>
        <li><router-link :to="'/email'">Email</router-link></li>
        <li><router-link :to="'/about'">About</router-link></li>
    </ul>
    <!-- <router-link :to=""></router-link> -->
    <h1 class="header-title">AppSus</h1>
    </header>
    `,

}