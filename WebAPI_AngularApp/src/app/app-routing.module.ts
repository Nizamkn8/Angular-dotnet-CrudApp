import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertTabComponent } from './insert-tab/insert-tab.component';
import { SelectallDBComponent } from './selectall-db/selectall-db.component';
import { SelectDetailsWithIdComponent } from './select-details-with-id/select-details-with-id.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

const routes: Routes = [
  {path:"",component:SelectallDBComponent},
  {path:"stdetails",component:SelectallDBComponent},
  {path:"insertdb",component:InsertTabComponent},
  {path:"details/:id",component:SelectDetailsWithIdComponent},
  {path:"edit/:id",component:EditDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
