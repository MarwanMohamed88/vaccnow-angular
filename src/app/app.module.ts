import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContectsComponent } from './components/contects/contects.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { HomeComponent } from './components/home/home.component';
import { VaccineComponent } from './components/vaccine/vaccine.component';
import { BranchComponent } from './components/branch/branch.component';
import { ScheduleVaccinationComponent } from './components/schedule-vaccination/schedule-vaccination.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ErrorHandlerInterceptorInterceptor } from './interceptor/error-handler-interceptor.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VaccConfirmationComponent } from './components/vacc-confirmation/vacc-confirmation.component';
import { AllBranchesComponent } from './components/all-branches/all-branches.component';
import { AllVaccineByBranchComponent } from './components/all-vaccine-by-branch/all-vaccine-by-branch.component';
import { VaccineAvaliableByBranchComponent } from './components/vaccine-avaliable-by-branch/vaccine-avaliable-by-branch.component';
import { VaccineBranchComponent } from './components/vaccine-branch/vaccine-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    ContectsComponent,
    ToolBarComponent,
    HomeComponent,
    VaccineComponent,
    BranchComponent,
    ScheduleVaccinationComponent,
    VaccConfirmationComponent,
    AllBranchesComponent,
    AllVaccineByBranchComponent,
    VaccineAvaliableByBranchComponent,
    VaccineBranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
