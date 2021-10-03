import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { C19WorldStatsComponent } from './components/c19-world-stats/c19-world-stats.component';
import { C19CountryStatsComponent } from './components/c19-country-stats/c19-country-stats.component';

const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    C19WorldStatsComponent,
    C19CountryStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
