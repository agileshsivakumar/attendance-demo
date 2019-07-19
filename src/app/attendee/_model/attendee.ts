export interface Attendee {
  name: string;
  isStriken?: boolean;
  marks: number;
  days?: Day[];
}

export interface Day {
  dayNumber: number;
  isIn?: boolean;
  inTime?: string;
  status?: status;
  isAssignmentCompleted?: boolean;
}

export type status = 'good' | 'not-on-time' | 'late' | 'no-entry';
