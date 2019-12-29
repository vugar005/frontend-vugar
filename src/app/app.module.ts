import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireHeaderComponent } from './questionnaire/questionnaire-header/questionnaire-header.component';
import { QuestionnaireExperienceComponent } from './questionnaire/questionnaire-experience/questionnaire-experience.component';
import { QuestionnaireAboutComponent } from './questionnaire/questionnaire-about/questionnaire-about.component';
import { QuestionnaireJsComponent } from './questionnaire/questionnaire-js/questionnaire-js.component';
import { QuestionnairePersonalInfoComponent } from './questionnaire/questionnaire-personal-info/questionnaire-personal-info.component';
import { MaterialModule } from '../material.module';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';

registerLocaleData(localeRu);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionnaireComponent,
    QuestionnaireHeaderComponent,
    QuestionnaireExperienceComponent,
    QuestionnaireAboutComponent,
    QuestionnaireJsComponent,
    QuestionnairePersonalInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
 { provide: MAT_DATE_LOCALE, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
