import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Appointment } from '../../models';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  form!: FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AppointmentComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFrom()
  }

  createFrom(item?: Appointment) {
    this.form = this.fb.group({
      id         : [item ? item.id :          null],
      title      : [item ? item.title :       null, [Validators.required]],
      description: [item ? item.description : null],
      date       : [item ? item.date :        this.data.date, [Validators.required]],
      startTime  : [item ? item.startTime :   null, [Validators.required]],
      endTime    : [item ? item.endTime :     null, [Validators.required]],
    })
  }
  handleAction() {

    this.form.markAllAsTouched();
    if(this.form.valid){
      this.form.get('date')?.setValue(
        formatDate(this.form.get('date')?.value,'yyyy-MM-dd','en-US')
        )
      this.dialogRef.close(this.form.value)
    }
  }

}
