import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHeightlightDirectives } from './basic-heighlight/basic-heighlight.directive';
import { BetterHeighlightDirective } from './better-heighlight/better-heighlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    BasicHeightlightDirectives,
    BetterHeighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
