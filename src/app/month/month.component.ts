import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  @Output() event = new EventEmitter<string>()
  month!: string ;

  // constructor() { }

  sentMonth() {
    this.event.emit(this.month);
    console.log("MonthNosent",this.month);
    console.log("Monthsent",this.event.emit(this.month));
    
  }

  getMonth(event: any) {
    this.month = event.target.value;
    console.log(typeof(this.month));
    this.sentMonth()
    // this.event.emit(event.target.value)
  }

  ngOnInit(): void {

  }

}
