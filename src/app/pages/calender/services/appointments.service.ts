import { Injectable } from '@angular/core';
import { Appointment } from '../models';

@Injectable()
export class AppointmentsService {
  appointmentsList: Appointment[] = []
  constructor() { }

  addAppointment(item: Appointment) {
    this.appointmentsList.push(item);
  }

  editAppointment(item: Appointment) {
    this.appointmentsList = [
      ...this.appointmentsList,
      item
    ]
  }
  deleteAppointment(appointmentId: number) {
    this.appointmentsList = this.appointmentsList.filter(item => item.id !== appointmentId)
  }
}
