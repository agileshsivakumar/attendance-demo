import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Day, status } from './_model/attendee';
import { AttendanceService } from './_services/attendance.service';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.scss']
})
export class AttendeeComponent implements OnChanges {
  @Input() day: number;
  public dayNumber: number;
  constructor(public attendeeService: AttendanceService) {}

  ngOnChanges() {
    if (this.day) {
      this.dayNumber = this.day - 1;
    }
  }

  public attendanceChanged(day: Day): void {
    if (!day.isIn) {
      day.inTime = '';
      return;
    }
    day.inTime = new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  }

  getStatus(day: Day): status {
    const hours = parseInt(day.inTime.split(':')[0], 10);
    const minutes = parseInt(day.inTime.split(':')[1], 10);
    if (hours < 10 || (hours === 10 && minutes === 0)) {
      return 'good';
    } else if (hours === 10 && minutes <= 15) {
      return 'not-on-time';
    } else if (hours === 10 && minutes <= 30) {
      return 'late';
    } else {
      return 'no-entry';
    }
  }
}
