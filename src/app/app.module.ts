import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReplacementsPanelComponent } from './components/replacements-panel/replacements-panel.component';
import { TemplateOutputPanelComponent } from './components/template-output-panel/template-output-panel.component';
import { ReplacementItemComponent } from './components/replacement-item/replacement-item.component';
import { IFormatterService } from './services/formatter/formatter.service.interface';
import { FormatterService } from './services/formatter/formatter.service';
import { FormatterComponent } from './components/formatter/formatter.component';
import { ErrorAlertsComponent } from './components/error-alerts/error-alerts.component';
import { IErrorAlertsService } from './services/error-alerts/arror-alerts.service.interface';
import { ErrorAlertsService } from './services/error-alerts/error-alerts.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReplacementsPanelComponent,
    TemplateOutputPanelComponent,
    ReplacementItemComponent,
    FormatterComponent,
    ErrorAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: IFormatterService, useClass: FormatterService},
    {provide: IErrorAlertsService, useClass: ErrorAlertsService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
