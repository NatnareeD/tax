import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  @Output() event = new EventEmitter<string>()
  year!: string
  constructor() { }

  sentYear() {
    this.event.emit(this.year);
    console.log("Yearsent",this.year);
    //console.log("Yearsent",this.event.emit(this.year));
    
  }

  getYear(event: any) {
    this.year = event.target.value;
    console.log(typeof(this.year));
    this.sentYear()
    // this.event.emit(event.target.value)
  }

  ngOnInit(): void {
  }

}
