import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { FooterComponent } from './footer/footer.component';
import { StepsComponent } from './shared/steps/steps.component';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaListItemComponent } from './persona-list/persona-list-item/persona-list-item.component';
import { TierListComponent } from './persona-list/tier-list/tier-list.component';
import { TeamRosterComponent } from './contact/team-roster/team-roster.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { TierOfferComponent } from './persona-list/tier-list/tier-offer/tier-offer.component';
import { TierBudgetMenuComponent } from './persona-list/tier-list/tier-budget-menu/tier-budget-menu.component';
import { TierBudgetMenuItemComponent } from './persona-list/tier-list/tier-budget-menu/tier-budget-menu-item/tier-budget-menu-item.component';

import { BudgetService } from './services/budget.service';
import { ComfortableService } from './services/comfortable.service';
import { PremiumService } from './services/premium.service';
import { TierSelectService } from './services/tier-select.service';

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
    TierBudgetMenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TierSelectService, BudgetService, ComfortableService, PremiumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
