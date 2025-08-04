// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';

// Leaflet & Highcharts
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HighchartsChartModule } from 'highcharts-angular';

// Komponen Aplikasi
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardSummaryComponent } from './components/dashboard/dashboard-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardSummaryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LeafletModule,
    HighchartsChartModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
