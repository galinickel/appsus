export default {
    template: `
    <header class="site-header flex">
    <router-link :to="'/'">
    <img class="logo" src="imgs/logo_transparent.png"/>
</router-link>
    <ul class="header-navbar flex">
        <li><router-link :to="'/keep'">Keep</router-link></li>
        <li><router-link :to="'/email'">Email</router-link></li>
        <li><router-link :to="'/about'">About</router-link></li>
    </ul>
    <!-- <router-link :to=""></router-link> -->
    </header>
    `,

}