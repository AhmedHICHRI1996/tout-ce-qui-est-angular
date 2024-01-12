import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ListResidenceComponent } from './list-residence/list-residence.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path:'ListResidence',component:ListResidenceComponent},
  { path:'users',component:UsersComponent},
  { path:'user/:name',component:DetailsUserComponent},
  { path:'',redirectTo: '/ListResidence', pathMatch:'full'},
  { path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
