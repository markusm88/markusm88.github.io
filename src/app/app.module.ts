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


@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    MiscComponent,
    FormsComponent,
    TableComponent,
    BarsComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    PrismModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
