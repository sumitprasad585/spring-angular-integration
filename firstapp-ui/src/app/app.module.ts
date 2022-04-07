import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
