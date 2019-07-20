import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AttendeeComponent } from './attendee.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AttendeeComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, NgbModalModule],
  exports: [AttendeeComponent]
})
export class AttendeeModule {}
