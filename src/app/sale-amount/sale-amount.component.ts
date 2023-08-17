import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent implements OnInit {
  @Output() event = new EventEmitter<string>()
  total!: string;

  sendTotal() {
    // console.log(this.total)
    this.event.emit(this.total)
    // console.log(this.event.emit(this.total));

  }

  //saleAmount : Decimal 

  constructor() { }

  ngOnInit(): void {
  }

  validate(event: any) {
    var t = event.target.value;
    event.target.value =
      t.indexOf(".") >= 0
        ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)
        : t;
    this.total = t
    // console.log(+this.total);
    this.sendTotal();
  }



}

// var num = event.target.value;
// event.target.value =
// (Math.round(num * 100) / 100).toFixed(2);
// }