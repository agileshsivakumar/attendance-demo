import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attendee } from '../_model/attendee';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private _attendees: Attendee[] = [];

  constructor(private http: HttpClient) {
    this.http.get('assets/attendees.json').subscribe(attendeesObject => {
      const attendees = attendeesObject as Attendee[];
      this._attendees = attendees.sort((a: Attendee, b: Attendee) => {
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
      console.log(this._attendees);
    });
  }

  get attendees(): Attendee[] {
    return this._attendees;
  }
}
