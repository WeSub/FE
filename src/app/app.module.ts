// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { FooterComponent } from './footer/footer.component';
import { TeamRosterComponent } from './contact/team-roster/team-roster.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { StepsComponent } from './shared/steps/steps.component';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaListItemComponent } from './persona-list/persona-list-item/persona-list-item.component';
import { TierListComponent } from './tier-list/tier-list.component';
import { TierOfferComponent } from './tier-list/tier-offer/tier-offer.component';
import { TierBudgetMenuComponent } from './tier-list/tier-budget-menu/tier-budget-menu.component';
import { TierBudgetMenuItemComponent } from './tier-list/tier-budget-menu/tier-budget-menu-item/tier-budget-menu-item.component';

// Services and Directives
import { DropdownDirective } from './shared/dropdown.directive';
import { OffersService } from './services/offers.service';
import { SessionUserService } from './services/session-user.service';
import { StudentService } from './services/student.service';
import { ProfessionalService } from './services/professional.service';
import { FamilyService } from './services/family.service';
import { SeniorService } from './services/senior.service';

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
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OffersService, SessionUserService, StudentService, ProfessionalService, FamilyService, SeniorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
