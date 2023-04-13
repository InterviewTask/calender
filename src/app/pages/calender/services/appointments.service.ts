import { Injectable } from '@angular/core';
import { Appointment } from '../models';
import { formatDate } from '@angular/common';

@Injectable()
export class AppointmentsService {
  appointmentsList: Appointment[] = [
      {
          "id": null,
          "title": "Default Title 1 ",
          "description": "This Is a Default Title 1 ",
          "date": "2023-04-13",
          "startTime": "04:48",
          "endTime": "04:48"
      },
      {
          "id": null,
          "title": "Default Title 2 ",
          "description": "This Is a Default Title 2 ",
          "date": "2023-04-13",
          "startTime": "04:47",
          "endTime": "04:48"
      },
      {
          "id": null,
          "title": "Default Title 3 ",
          "description": "This Is a Default Title 3 ",
          "date": "2023-04-14",
          "startTime": "04:47",
          "endTime": "04:48"
      }

  ]
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

  getDateAppointment(date:Date){
    const ali= formatDate(date,'yyyy-MM-dd','en-US');
    const goox= this.appointmentsList.filter(item =>item.date===ali)
    return goox
  }
}
