// SEC: WeSub App is organized where each 'step' of the process is it's own container and tree of components. They call services to populate the data and copy the user selection into the session user object so that at the end the object/settings could be saved or analyzed in the future beyond MVP.
// SEC: Static pages are their own container and components, components that show up in other containers will be put in the 'shared' directory.
// SEC: Routing is handled by the AppRouter and the format [routerLink]="['link', 'sublink'] will be used in HTML to allow user to utilize the browswer 'back' button and get the expected behavior of moving back a step instead of leaving the app/page and losing the current state.
// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

// Services and Directives
import { AppRouterModule } from './app-router/app-router.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { OffersService } from './services/offers.service';
import { SessionUserService } from './services/session-user.service';
import { StudentService } from './services/student.service';
import { ProfessionalService } from './services/professional.service';
import { FamilyService } from './services/family.service';
import { SeniorService } from './services/senior.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TeamRosterComponent } from './contact/team-roster/team-roster.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StartButtonComponent } from './shared/start-button/start-button.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { StepsComponent } from './shared/steps/steps.component';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaListItemComponent } from './persona-list/persona-list-item/persona-list-item.component';
import { TierListComponent } from './tier-list/tier-list.component';
import { TierOfferComponent } from './tier-list/tier-offer/tier-offer.component';
import { TierBudgetMenuComponent } from './tier-list/tier-budget-menu/tier-budget-menu.component';
import { TierBudgetMenuItemComponent } from './tier-list/tier-budget-menu/tier-budget-menu-item/tier-budget-menu-item.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { LogoComponent } from './shared/logo/logo.component';
import { DetailComponent } from './shared/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    PersonaListComponent,
    PersonaListItemComponent,
    HeaderContainerComponent,
    TierListComponent,
    StepsComponent,
    TeamRosterComponent,
    AboutComponent,
    ContactComponent,
    SearchBarComponent,
    TierOfferComponent,
    TierBudgetMenuComponent,
    TierBudgetMenuItemComponent,
    DropdownDirective,
    StartButtonComponent,
    ContentContainerComponent,
    LogoComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule
  ],
  providers: [OffersService, SessionUserService, StudentService, ProfessionalService, FamilyService, SeniorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
