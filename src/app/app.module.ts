import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaListItemComponent } from './persona-list/persona-list-item/persona-list-item.component';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageListItemComponent } from './package-list/package-list-item/package-list-item.component';
import { PackageItemSvcListComponent } from './package-list/package-item-svc-list/package-item-svc-list.component';
import { PackageItemSvcListItemComponent } from './package-list/package-item-svc-list-item/package-item-svc-list-item.component';
import { SelectionSummaryListComponent } from './selection-summary-list/selection-summary-list.component';
import { SelectionSummaryListItemComponent } from './selection-summary-list/selection-summary-list-item/selection-summary-list-item.component';
import { SelectionIconComponent } from './selection-summary-list/selection-summary-list-item/selection-icon/selection-icon.component';
import { SelectionNameComponent } from './selection-summary-list/selection-summary-list-item/selection-name/selection-name.component';
import { SelectionDescriptionComponent } from './selection-summary-list/selection-summary-list-item/selection-description/selection-description.component';
import { SelectionPriceComponent } from './selection-summary-list/selection-summary-list-item/selection-price/selection-price.component';
import { StyleVisualRefComponent } from './style-visual-ref/style-visual-ref.component';
import { HeaderContainerComponent } from './header-container/header-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NavbarItemComponent,
    PersonaListComponent,
    PersonaListItemComponent,
    PackageListComponent,
    PackageListItemComponent,
    PackageItemSvcListComponent,
    PackageItemSvcListItemComponent,
    SelectionSummaryListComponent,
    SelectionSummaryListItemComponent,
    SelectionIconComponent,
    SelectionNameComponent,
    SelectionDescriptionComponent,
    SelectionPriceComponent,
    StyleVisualRefComponent,
    HeaderContainerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
