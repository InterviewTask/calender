import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  selected!: Date;
  constructor() { }

  ngOnInit(): void {
    this.selected = new Date();
  }


}
