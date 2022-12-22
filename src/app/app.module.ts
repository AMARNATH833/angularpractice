import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyComponent } from './lazy/lazy.component';
import { BindingComponent } from './binding/binding.component';
import { BindingMainComponent } from './bindingMain/bindingMain.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileReactiveComponent } from './profileReactive/profileReactive.component';

@NgModule({
  declarations: [						
    AppComponent,
    routingComponents,
    LazyComponent,
      BindingComponent,
      BindingMainComponent,
      ReactiveformsComponent,
      ProfileReactiveComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
