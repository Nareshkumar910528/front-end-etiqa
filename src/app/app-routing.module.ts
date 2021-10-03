import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { C19WorldStatsComponent } from './components/c19-world-stats/c19-world-stats.component';

const routes: Routes = [
  { path: '', redirectTo: 'c19-statistics', pathMatch: 'full' },
  { path: 'c19-statistics', component: C19WorldStatsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
