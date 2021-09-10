import { NotFoundComponent } from './not-found/not-found.component';
import { StepOneComponent } from './step-one/step-one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepTwoComponent } from './step-two/step-two.component';

const routes: Routes = [
  { path: '', component: StepOneComponent, pathMatch: 'full' },
  { path: 'step-two', component: StepTwoComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
