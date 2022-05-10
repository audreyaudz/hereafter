
// Import Vue and Vue Router
import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter  from 'vue-router';

// Here we register the Inkline components
import { Inkline, components } from '@inkline/inkline';
import '@inkline/inkline/inkline.scss';

// Load the app css
import "./main.scss";

// Here we register the page components (each component maps to a page)
// Adding a new page:
// 1. Add the new page .vue to the src/components/pages

// 2. Add the import statement here
import Home from './components/pages/Home.vue';
import TermsOfService from './components/pages/TermsOfService.vue';
import About from './components/pages/About.vue';
import Resources from './components/pages/Resources.vue';
import Chapters from './components/pages/Chapters.vue';
import Contact from './components/pages/Contact.vue';

// 3. Add the new page to the routes below
const routes = [
    {path: '/', component: Home },
    {path: '/tos', component: TermsOfService },
    {path: '/about', component: About},
    {path: '/chapters', component: Chapters},
    {path: '/resources', component: Resources},
    {path: '/contact', component: Contact},
];

const router = VueRouter.createRouter(
    {
        history: VueRouter.createWebHistory(),
        routes
    }
);

// 4. Add a <router-link to='...'> to the navbar or footer as required


// Instantiate the app, register middleware and mount it to the root element
const app = createApp(App);

app.use(router);
app.use(Inkline, {
    components
});

app.mount('#app');