import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PrismModule } from '@ngx-prism/core';
import { AppComponent } from './app.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MiscComponent } from './misc/misc.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { BarsComponent } from './bars/bars.component';
import { ModalsComponent } from './modals/modals.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { ToastsComponent } from './toasts/toasts.component';
import { LoadersComponent } from './loaders/loaders.component';


@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    MiscComponent,
    FormsComponent,
    TableComponent,
    BarsComponent,
    ModalsComponent,
    CollapsibleComponent,
    ToastsComponent,
    LoadersComponent
  ],
  imports: [
    BrowserModule,
    PrismModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
