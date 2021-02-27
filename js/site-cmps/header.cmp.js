export default {
    template: `
    <header>
    <div class="header-container flex"> 
    <router-link :to="'/'"><img class="logo" src="imgs/logo_transparent.png"/></router-link>
    <ul class="header-navbar flex">
        <li><router-link :to="'/keep'">Keep</router-link></li>
        <li><router-link :to="'/email/inbox'">Email</router-link></li>
        <li><router-link :to="'/about'">About</router-link></li>
    </ul>
</div>
    </header>
    `,

}