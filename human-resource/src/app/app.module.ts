import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './hr-components/hr-country/country/country.component';
import { RegionComponent } from './hr-components/hr-region/region/region.component';
import { LocationComponent } from './hr-components/hr-location/location/location.component';
import { DepartmentComponent } from './hr-components/hr-department/department/department.component';
import { EmployeeComponent } from './hr-components/hr-employee/employee/employee.component';
import { JobsComponent } from './hr-components/hr-jobs/jobs/jobs.component';
import { JobHistoryComponent } from './hr-components/hr-job-history/job-history/job-history.component';
import { ManagerComponent } from './hr-components/hr-manager/manager/manager.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddRegionComponent } from './hr-components/hr-region/add-region/add-region/add-region.component';
import { EditRegionComponent } from './hr-components/hr-region/edit-region/edit-region.component';
import { AddCountryComponent } from './hr-components/hr-country/add-country/add-country.component';
import { EditCountryComponent } from './hr-components/hr-country/edit-country/edit-country.component';
import { HeaderComponent } from './hr-header/header/header.component';
import { FooterComponent } from './hr-footer/footer/footer.component';
import { UserLoginComponent } from './hr-components/hr-users/user-login/user-login.component';
import { UserLogoutComponent } from './hr-components/hr-users/user-logout/user-logout.component';
import { UserSignupComponent } from './hr-components/hr-users/user-signup/user-signup.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    RegionComponent,
    LocationComponent,
    DepartmentComponent,
    EmployeeComponent,
    JobsComponent,
    JobHistoryComponent,
    ManagerComponent,
    AddRegionComponent,
    EditRegionComponent,
    AddCountryComponent,
    EditCountryComponent,
    HeaderComponent,
    FooterComponent,
    UserLoginComponent,
    UserLogoutComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

