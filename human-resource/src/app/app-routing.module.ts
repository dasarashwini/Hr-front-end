import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRegionComponent } from './hr-components/hr-region/add-region/add-region/add-region.component';
import { RegionComponent } from './hr-components/hr-region/region/region.component';
import { EditRegionComponent } from './hr-components/hr-region/edit-region/edit-region.component';
import { CountryComponent } from './hr-components/hr-country/country/country.component';
import { AddCountryComponent } from './hr-components/hr-country/add-country/add-country.component';
import { EditCountryComponent } from './hr-components/hr-country/edit-country/edit-country.component';
import { UserLoginComponent } from './hr-components/hr-users/user-login/user-login.component';
import { UserSignupComponent } from './hr-components/hr-users/user-signup/user-signup.component';

const routes: Routes = [
  {path:"",redirectTo:"user-login",pathMatch:'full'},
  {path:"user-login",component:UserLoginComponent},
  {path:"user-signup",component:UserSignupComponent},
  {path:"region",component:RegionComponent},
  {path:"add-region",component:AddRegionComponent},
  {path:"edit-region",component:EditRegionComponent},
  {path:"country",component:CountryComponent},
  {path:"add-country",component:AddCountryComponent},
  {path:"edit-country",component:EditCountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
