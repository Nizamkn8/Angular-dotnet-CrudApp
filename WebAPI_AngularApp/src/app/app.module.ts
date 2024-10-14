import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MyserviceService } from './myservice.service';
import { FormsModule } from '@angular/forms';
import { InsertTabComponent } from './insert-tab/insert-tab.component';
import { SelectallDBComponent } from './selectall-db/selectall-db.component';
import { SelectDetailsWithIdComponent } from './select-details-with-id/select-details-with-id.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertTabComponent,
    SelectallDBComponent,
    SelectDetailsWithIdComponent,
    EditDetailsComponent
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
export class AppModule { }
