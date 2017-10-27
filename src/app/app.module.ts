import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserPersonaService } from './services/user-persona.service';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaListItemComponent } from './persona-list/persona-list-item/persona-list-item.component';
import { SelectionSummaryListComponent } from './selection-summary-list/selection-summary-list.component';
import { SelectionSummaryListItemComponent } from './selection-summary-list/selection-summary-list-item/selection-summary-list-item.component';
import { SelectionIconComponent } from './selection-summary-list/selection-summary-list-item/selection-icon/selection-icon.component';
import { SelectionNameComponent } from './selection-summary-list/selection-summary-list-item/selection-name/selection-name.component';
import { SelectionDescriptionComponent } from './selection-summary-list/selection-summary-list-item/selection-description/selection-description.component';
import { SelectionPriceComponent } from './selection-summary-list/selection-summary-list-item/selection-price/selection-price.component';
import { StyleVisualRefComponent } from './style-visual-ref/style-visual-ref.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { TierListComponent } from './persona-list/tier-list/tier-list.component';
import { StepsComponent } from './steps/steps.component';
import { TeamRosterComponent } from './team-roster/team-roster.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    PersonaListComponent,
    PersonaListItemComponent,
    SelectionSummaryListComponent,
    SelectionSummaryListItemComponent,
    SelectionIconComponent,
    SelectionNameComponent,
    SelectionDescriptionComponent,
    SelectionPriceComponent,
    StyleVisualRefComponent,
    HeaderContainerComponent,
    TierListComponent,
    StepsComponent,
    TeamRosterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [UserPersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
