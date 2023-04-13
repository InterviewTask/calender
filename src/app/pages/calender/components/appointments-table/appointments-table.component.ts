import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AppointmentComponent } from '../appointment/appointment.component';
import { AppointmentsService } from '../../services/appointments.service';
import { Appointment } from '../../models';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';


@Component({
  selector: 'app-appointments-table',
  templateUrl: './appointments-table.component.html',
  styleUrls: ['./appointments-table.component.scss']
})
export class AppointmentsTableComponent implements OnInit,OnChanges {
  @Input()selectedDate = new Date();
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
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getDate();
  }

  getDate(){
    this.dataSource=this.appointmentsService.getDateAppointment(this.selectedDate);
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
      width:'30%',
      data:{
        date:this.selectedDate
      }
    }
    const dialogRef = this.dialog.open(AppointmentComponent,config);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.appointmentsService.addAppointment(result)
        this.getDate();

      }

    });
  }

  editItem(item:Appointment){
    item={
      ...item,
      date:this.selectedDate
    }
    const config: MatDialogConfig = {
      panelClass: 'app-full-bleed-dialog',
      width:'30%',
      data: item
    }
    const dialogRef = this.dialog.open(AppointmentComponent,config);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.appointmentsService.editAppointment(result)
        this.getDate();

      }

    });
  }

  deleteItem(item:Appointment){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '40%',
      maxHeight: '90vh',
      data: {
        title: 'Delete Appointment',
        message: 'Are you sure you want to delete this Appointment?',
        button: 'Delete'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.appointmentsService.deleteAppointment(item.id||0)
        this.getDate();
      }
    });
  }

}
