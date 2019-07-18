import { Component } from '@angular/core';

interface Attendee {
  name: string;
  isIn: boolean;
  inTime?: string;
  status?: status;
  isAssignmentCompleted: boolean;
}

type status = 'good' | 'not-on-time' | 'late' | 'no-entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public attendees: Attendee[] = [
    {
      name: 'Agilesh Sivakumar',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Aaquib Nawaz',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Chandrasekaran T D',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Mahalakshmi Jayaprathap',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Ramakanth Chintalapalli',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Ashish Mallegowda',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Bhagyashri Dhoop',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Manpreet Singh',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Hardik Sethi',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Paramesh Gujjaiah',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Gopalakrishna Chandregowda',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Priya Khirwal',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Sarath Sasidharan',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Sumesh Chemmangattil',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Raunak Sinha',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Rohit Kumar',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Pranav Gauba',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Anjana Patra',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Dinesh Malviya',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Mohit Raj',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Agilesh Sivakumar',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Ooha Bhoga',
      isIn: false,
      isAssignmentCompleted: false
    },
    {
      name: 'Shilpa Reddy',
      isIn: false,
      isAssignmentCompleted: false
    }
  ];

  public attendanceChanged(attendee: Attendee): void {
    if (!attendee.isIn) {
      attendee.inTime = '';
      return;
    }
    attendee.inTime = new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    const hours = parseInt(attendee.inTime.split(':')[0], 10);
    const minutes = parseInt(attendee.inTime.split(':')[1], 10);
    if (hours < 10 || (hours === 10 && minutes === 0)) {
      attendee.status = 'good';
    } else if (hours === 10 && minutes <= 15) {
      attendee.status = 'not-on-time';
    } else if (hours === 10 && minutes <= 30) {
      attendee.status = 'late';
    } else {
      attendee.status = 'no-entry';
    }
  }
}
