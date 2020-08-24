import { Routes, RouterModule } from '@angular/router'
const routes: Routes = [
    //home
    {
        path: '',
        component: HomePageComponent
    },
    //Products
    {
        path: 'about',
        component: AboutPageComponent
    }   
];
export const RoutingModule = RouterModule.forRoot(routes);