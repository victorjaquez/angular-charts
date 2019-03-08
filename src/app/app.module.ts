import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component'

const routes: Routes = [
  {path: 'doughnut-chart', component: DoughnutChartComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
