import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderContainerComponent } from '../header-container/header-container.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

// SEC: The goal is to present a splash page in the beginning and a CTA button and search bar, then each step will show/hide based on user selection and state.
// SEC: Currently, only the static routes are working, next up is adding dynamic components and children.
const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HeaderContainerComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
