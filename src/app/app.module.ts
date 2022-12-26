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
import { LoginComponent } from './login/login.component';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FruitsComponent } from "./supermarket/fruits/fruits.component";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [		
        AppComponent,
        routingComponents,
        LazyComponent,
        BindingComponent,
        BindingMainComponent,
        ReactiveformsComponent,
        ProfileReactiveComponent,
        LoginComponent,
        SupermarketComponent,
        HttpClientModule
   ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NgbModule,
    ]
})
export class AppModule { }
