import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AttendeeModule } from './attendee/attendee.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AttendeeModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
