import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AppointmentComponent } from '../appointment/appointment.component';
import { AppointmentsService } from '../../services/appointments.service';
import { Appointment } from '../../models';


@Component({
  selector: 'app-appointments-table',
  templateUrl: './appointments-table.component.html',
  styleUrls: ['./appointments-table.component.scss']
})
export class AppointmentsTableComponent implements OnInit {

  columns = [
    {
      columnDef: 'title',
      header: 'Events',
      cell: (element: Appointment) => `${element}`,
    },

  ];
  dataSource:Appointment[]=[];
  displayedColumns = this.columns.map(c => c.columnDef);
  @ViewChild(MatTable)table!: MatTable<Appointment>;
  constructor(
    private dialog: MatDialog,
    private appointmentsService:AppointmentsService
    ) { }

  ngOnInit(): void {
    this.getDate();
  }

  getDate(){
    this.dataSource=this.appointmentsService.appointmentsList
    if(this.table){
      this.table.renderRows();
    }
    console.log(this.dataSource);


  }

  drag(event: CdkDragDrop<Appointment>){
    moveItemInArray(this.dataSource,event.previousIndex,event.currentIndex)
    this.table.renderRows();
  }

  openDialog(): void {
    const config: MatDialogConfig = {
      panelClass: 'app-full-bleed-dialog',
      width:'30%'
    }
    const dialogRef = this.dialog.open(AppointmentComponent,config);

    dialogRef.afterClosed().subscribe(result => {
      this.appointmentsService.addAppointment(result)
      this.getDate();

    });
  }

}
