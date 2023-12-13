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
import { UserComponent } from './hr-components/hr-user/user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

