import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourWheelComponent } from './four-wheel/four-wheel.component';
import { TwoWheelComponent } from './two-wheel/two-wheel.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LazyComponent } from './lazy/lazy.component';
// import { ParentDirectiveDirective } from './parentDirective.directive';

const routes: Routes = [
  // {path:'lazyloader',loadChildren:()=>import('./lazy/lazy.modules').then(m=>m.Lazy)},
  {path:'twoWheel',title:'FirstPAGE',component:TwoWheelComponent},
  {path:'fourWheel',title:'SecondPAGE',component:FourWheelComponent},
  {path:'',redirectTo:'twoWheel',pathMatch:'full'},
  {path:'**',title:'PAGENOTFOUND',component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[TwoWheelComponent,FourWheelComponent]
   declarations: [
    "ParentDirectiveDirective"
  ];
