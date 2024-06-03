import { Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {
        path : "",
        component: HomeComponent
    },
    {
        path : "aboutus",
        component: AboutusComponent
    }, 
    {
        path : "contactus",
        component: ContactusComponent
    }, 
    {
        path : "**",
        component: NotfoundComponent
    }
];
