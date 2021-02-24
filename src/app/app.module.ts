import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { CompaniesComponent } from './features/companies/companies.component';
import { IntegrationsComponent } from './features/integrations/integrations.component';
import { SimpleButtonComponent } from './features/simple-button/simple-button.component';
import { ThirdComponent } from './third/third.component';
import { ForthComponent } from './forth/forth.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HeaderComponent,
    FooterComponent,
    CompaniesComponent,
    IntegrationsComponent,
    SimpleButtonComponent,
    ThirdComponent,
    ForthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
