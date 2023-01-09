import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { AComponent } from './a/a.component';
import { CasterDetailsComponent } from './caster-details/caster-details.component';
import { HeatProductionComponent } from './heat-production/heat-production.component';
import {MatTableModule} from '@angular/material/table';



import {MatPaginatorModule} from '@angular/material/paginator';
import { TableComponent } from './table/table.component';
import { BottomTableComponent } from './bottom-table/bottom-table.component';



@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    CasterDetailsComponent,
    HeatProductionComponent,
    TableComponent,
    BottomTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
