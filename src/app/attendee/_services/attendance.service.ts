import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attendee } from '../_model/attendee';
import { AttendeeComponent } from '../attendee.component';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private _attendees: Attendee[] = [];

  constructor(private http: HttpClient) {
    this.http.get('assets/attendees.json').subscribe(attendeesObject => {
      this._attendees = attendeesObject as Attendee[];
      this.sortAttendeesByName();
    });
  }

  get attendees(): Attendee[] {
    return this._attendees;
  }

  public getTop3(): Attendee[] {
    const top3Attendees = this._attendees.sort((a: Attendee, b: Attendee) => {
      const marks1 = a.marks;
      const marks2 = b.marks;
      if (marks1 > marks2) {
        return -1;
      }
      if (marks1 < marks2) {
        return 1;
      }
      return 0;
    });
    return top3Attendees.slice(0, 3);
  }

  sortAttendeesByName() {
    this._attendees.sort((a: Attendee, b: Attendee) => {
      const name1 = a.name.toLowerCase();
      const name2 = b.name.toLowerCase();
      if (name1 > name2) {
        return 1;
      }
      if (name1 < name2) {
        return -1;
      }
      return 0;
    });
  }
}
