import { Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MoviesdetailsComponent } from './components/moviesdetails/moviesdetails.component';

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
        path : "details/:movie.id",
        component: MoviesdetailsComponent
    }, 
    {
        path : "**",
        component: NotfoundComponent
    }
];
