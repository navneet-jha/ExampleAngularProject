import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentExampleComponent } from './component-example/component-example.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, ComponentExampleComponent, DirectiveExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
