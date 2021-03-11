import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { MasterComponent } from './master/master.component';
import { ReversePipe } from './reverse.pipe';
import { SlaveComponent } from './slave/slave.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    MasterComponent,
    ReversePipe,
    SlaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
