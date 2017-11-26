import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderContainerComponent } from '../header-container/header-container.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

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
