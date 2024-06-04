import { Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MoviesdetailsComponent } from './components/moviesdetails/moviesdetails.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path : "",
        redirectTo: "register", 
        pathMatch: "full"
    },
    {
        path : "register",
        component: RegisterComponent
    },
    {
        path : "login",
        component: LoginComponent
    },
    {
        path : "home",
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
